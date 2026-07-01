import { useState } from "react";
import { FICHAS } from "./fichas";

// ---------------------------------------------------------------------------
// Reading Comprehension ficha — KS3 / Year 7 (British curriculum)
// - Loads a random ficha from a bank of ~30 (instant).
// - "Otra ficha" picks another preloaded one instantly.
// - "Generar con IA" asks Claude (via /api/chat) for a brand-new passage.
// - The student types answers into boxes; the AI marks them with feedback.
// ---------------------------------------------------------------------------

const MARK_PROMPT = `You are a warm, encouraging KS3 English teacher marking a Year 7 reading comprehension worksheet at a British curriculum school.

You will be given: the reading passage, the questions (each with a skill type and a mark allocation), and the student's typed answers.

Your task:
1. Mark EACH question in order. For every question output exactly this format on separate lines:
   Question N: X/Y marks
   Feedback: one or two sentences — say what was correct, and if marks were lost, explain kindly what was missing or how to improve. Refer to the passage where useful.
2. Award partial marks fairly. Reward valid inference and evidence, not just word-matching.
3. If an answer box was left empty, give 0 marks and gently encourage an attempt.
4. After all questions, output:
   TOTAL: sum/maximum
   Then one short, warm paragraph: one thing done well and one clear next step to improve reading skills.

Rules:
- British English spelling always.
- Age-appropriate, positive, specific. Never harsh.
- IMPORTANT: Never use markdown. No asterisks, hashtags, backticks or bold. Plain text only.`;

const GEN_PROMPT = `You create reading comprehension worksheets for a Year 7 student (age 11-12) following the British KS3 curriculum.

Produce ONE original passage of about 200-260 words on an interesting topic (science, nature, history, geography, biography, technology, environment, or a short fiction extract). Vary the topic and genre each time. Age-appropriate, British English spelling.

Then write exactly 5 questions that test a MIX of these reading skills, labelling each with its skill type: Retrieval, Vocabulary, Inference, Language analysis, Summary. Allocate 1 to 3 marks per question.

Return ONLY valid JSON, with no extra text, no markdown and no code fences, in exactly this shape:
{"title":"...","genre":"...","passage":"...","questions":[{"type":"Retrieval","prompt":"...","marks":1}]}

In the passage, separate paragraphs with \\n\\n. Do not use markdown anywhere.`;

const typeColour = {
  Retrieval: "#0F766E",
  Vocabulary: "#7C3AED",
  Inference: "#1D4ED8",
  "Language analysis": "#BE185D",
  Summary: "#B45309",
};

function randomIndex(exclude, length) {
  if (length <= 1) return 0;
  let i = exclude;
  while (i === exclude) i = Math.floor(Math.random() * length);
  return i;
}

// Ensure every question has a stable id (AI-generated ones won't).
function withIds(ficha) {
  return {
    ...ficha,
    questions: ficha.questions.map((q, i) => ({ ...q, id: q.id || `q${i + 1}` })),
  };
}

export default function ReadingApp() {
  const [bankIndex, setBankIndex] = useState(() => Math.floor(Math.random() * FICHAS.length));
  const [ficha, setFicha] = useState(() => withIds(FICHAS[bankIndex]));
  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(withIds(FICHAS[bankIndex]).questions.map((q) => [q.id, ""]))
  );
  const [feedback, setFeedback] = useState("");
  const [marking, setMarking] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [marked, setMarked] = useState(false);

  const totalMarks = ficha.questions.reduce((s, q) => s + q.marks, 0);
  const answeredCount = Object.values(answers).filter((a) => a.trim()).length;

  const loadFicha = (f) => {
    const withId = withIds(f);
    setFicha(withId);
    setAnswers(Object.fromEntries(withId.questions.map((q) => [q.id, ""])));
    setFeedback("");
    setMarked(false);
  };

  const setAnswer = (id, value) => setAnswers((a) => ({ ...a, [id]: value }));

  const nextFromBank = () => {
    const i = randomIndex(bankIndex, FICHAS.length);
    setBankIndex(i);
    loadFicha(FICHAS[i]);
  };

  const generateWithAI = async () => {
    if (generating || marking) return;
    setGenerating(true);
    setFeedback("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1500,
          system: GEN_PROMPT,
          messages: [{ role: "user", content: "Generate a new Year 7 reading comprehension worksheet now. Choose a fresh topic and genre." }],
        }),
      });
      const data = await res.json();
      let text = data.content?.[0]?.text || "";
      text = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
      const parsed = JSON.parse(text);
      if (!parsed.passage || !Array.isArray(parsed.questions) || parsed.questions.length === 0) {
        throw new Error("bad shape");
      }
      loadFicha({ id: "ai", ...parsed });
    } catch {
      setFeedback("Sorry — I couldn't generate a new text just now. Please try again, or use 'Otra ficha' for a preloaded one.");
    }
    setGenerating(false);
  };

  const handleMark = async () => {
    if (marking || generating) return;
    setMarking(true);
    setFeedback("");

    const answerBlock = ficha.questions
      .map(
        (q, i) =>
          `Question ${i + 1} (${q.type}, ${q.marks} mark${q.marks > 1 ? "s" : ""}): ${q.prompt}\nStudent answer: ${
            answers[q.id].trim() || "[left blank]"
          }`
      )
      .join("\n\n");

    const userMessage = `READING PASSAGE — "${ficha.title}":\n\n${ficha.passage}\n\n---\n\nMARK THE STUDENT'S ANSWERS (total ${totalMarks} marks available):\n\n${answerBlock}`;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1200,
          system: MARK_PROMPT,
          messages: [{ role: "user", content: userMessage }],
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Something went wrong. Please try again.";
      setFeedback(reply);
      setMarked(true);
    } catch {
      setFeedback("Connection error. Please check your internet and try again.");
    }
    setMarking(false);
  };

  const busy = marking || generating;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F0FDFA",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        padding: "24px 16px",
        color: "#0F172A",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 40 }}>📖</div>
          <h1 style={{ margin: "8px 0 4px", fontSize: 28, color: "#0F766E" }}>Reading Comprehension</h1>
          <p style={{ margin: 0, color: "#475569", fontSize: 15 }}>
            Year 7 · KS3 English — read, answer in the boxes, then get marked
          </p>
        </header>

        {/* Text controls */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
          <button
            onClick={nextFromBank}
            disabled={busy}
            style={{
              background: "#fff",
              color: "#0F766E",
              border: "1.5px solid #0F766E",
              borderRadius: 10,
              padding: "9px 18px",
              fontSize: 14,
              fontWeight: 600,
              cursor: busy ? "not-allowed" : "pointer",
            }}
          >
            🔀 Otra ficha
          </button>
          <button
            onClick={generateWithAI}
            disabled={busy}
            style={{
              background: generating ? "#94A3B8" : "#0F766E",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "9px 18px",
              fontSize: 14,
              fontWeight: 600,
              cursor: busy ? "not-allowed" : "pointer",
            }}
          >
            {generating ? "Generando…" : "✨ Generar con IA"}
          </button>
        </div>

        {/* Passage card */}
        <section
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "24px 26px",
            boxShadow: "0 4px 14px rgba(15,118,110,0.10)",
            marginBottom: 24,
            opacity: generating ? 0.5 : 1,
          }}
        >
          <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "#0F766E", fontWeight: 700 }}>
            {ficha.genre}
          </div>
          <h2 style={{ margin: "6px 0 14px", fontSize: 22 }}>{ficha.title}</h2>
          {String(ficha.passage).split("\n\n").map((para, i) => (
            <p key={i} style={{ lineHeight: 1.7, fontSize: 16, margin: "0 0 12px" }}>
              {para}
            </p>
          ))}
        </section>

        {/* Questions */}
        <section>
          <h3 style={{ fontSize: 18, margin: "0 0 12px", color: "#0F766E" }}>
            Questions{" "}
            <span style={{ color: "#94A3B8", fontWeight: 400, fontSize: 14 }}>({totalMarks} marks)</span>
          </h3>

          {ficha.questions.map((q, i) => (
            <div
              key={q.id}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "16px 18px",
                marginBottom: 14,
                boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 8 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    color: typeColour[q.type] || "#475569",
                    background: (typeColour[q.type] || "#475569") + "18",
                    padding: "3px 8px",
                    borderRadius: 20,
                  }}
                >
                  {q.type}
                </span>
                <span style={{ fontSize: 12, color: "#94A3B8" }}>
                  {q.marks} mark{q.marks > 1 ? "s" : ""}
                </span>
              </div>
              <p style={{ margin: "0 0 10px", fontSize: 15.5, fontWeight: 500 }}>
                <strong style={{ color: "#0F766E" }}>{i + 1}.</strong> {q.prompt}
              </p>
              <textarea
                value={answers[q.id] || ""}
                onChange={(e) => setAnswer(q.id, e.target.value)}
                placeholder="Type your answer here…"
                rows={q.marks > 1 ? 3 : 2}
                disabled={busy}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: 10,
                  padding: "10px 12px",
                  fontSize: 15,
                  fontFamily: "inherit",
                  resize: "vertical",
                  outline: "none",
                  background: "#F8FAFC",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#0F766E")}
                onBlur={(e) => (e.target.style.borderColor = "#CBD5E1")}
              />
            </div>
          ))}
        </section>

        {/* Actions */}
        <div style={{ display: "flex", gap: 12, alignItems: "center", margin: "18px 0 8px", flexWrap: "wrap" }}>
          <button
            onClick={handleMark}
            disabled={busy || answeredCount === 0}
            style={{
              background: busy || answeredCount === 0 ? "#94A3B8" : "#0F766E",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "13px 28px",
              fontSize: 16,
              fontWeight: 700,
              cursor: busy || answeredCount === 0 ? "not-allowed" : "pointer",
              boxShadow: "0 4px 12px rgba(15,118,110,0.25)",
            }}
          >
            {marking ? "Marking…" : "✓ Mark my answers"}
          </button>
          <span style={{ fontSize: 13, color: "#94A3B8" }}>
            {answeredCount}/{ficha.questions.length} answered
          </span>
        </div>

        {/* Feedback */}
        {feedback && (
          <section
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "22px 24px",
              marginTop: 16,
              boxShadow: "0 4px 14px rgba(15,118,110,0.12)",
              borderTop: "5px solid #0F766E",
            }}
          >
            <h3 style={{ margin: "0 0 12px", fontSize: 18, color: "#0F766E" }}>📝 Your feedback</h3>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 15, lineHeight: 1.65, margin: 0 }}>
              {feedback}
            </pre>
          </section>
        )}

        <footer style={{ textAlign: "center", marginTop: 28, fontSize: 12, color: "#94A3B8" }}>
          Y7 Summer Study Hub · Reading Comprehension · {FICHAS.length} textos + generación con IA
        </footer>
      </div>
    </div>
  );
}
