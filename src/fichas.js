// ===========================================================================
// Reading Comprehension bank — KS3 / Year 7 (British curriculum)
// ~30 curated passages, each with 5 tailored questions.
// Skill types used: Retrieval, Vocabulary, Inference, Language analysis, Summary
// (These match the colour tags in App.jsx.)
// ===========================================================================

export const FICHAS = [
  {
    id: "octopus",
    title: "The Master of Disguise",
    genre: "Non-fiction — Science & Nature",
    passage: `Deep beneath the waves, one of the ocean's strangest creatures is hiding in plain sight. The octopus has no bones, no shell and no sharp teeth to defend itself, yet it is rarely caught by predators. Its secret weapon is camouflage.

An octopus can change the colour and even the texture of its skin in less than a second. Special cells called chromatophores act like tiny bags of paint just under the surface of its body. By squeezing or relaxing these cells, the octopus can imitate the sandy seabed, a clump of coral or a jagged rock. Some species can also raise bumps on their skin so that they feel as rough as the reef around them.

This talent is not only used for hiding. When threatened, an octopus may suddenly flash a bright, startling pattern to confuse an attacker before jetting away in a cloud of ink. Scientists believe it is one of the most intelligent creatures without a backbone, capable of solving puzzles, opening jars and even recognising human faces.

For a soft, slow-moving animal, the octopus has turned survival into an art form. It does not need to be the fastest or the strongest in the sea — it simply needs to disappear.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "According to the passage, what is the octopus's 'secret weapon'?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What are chromatophores, and what does the writer compare them to?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in paragraph 2 that means 'to copy or mimic'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why might camouflage be more useful to an octopus than being fast or strong? Use the text to support your answer.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says the octopus is 'hiding in plain sight'. What effect does this phrase have on the reader?", marks: 2 },
    ],
  },
  {
    id: "volcano",
    title: "When the Mountain Wakes",
    genre: "Non-fiction — Science & Nature",
    passage: `A volcano can sleep for hundreds of years before it stirs. Far beneath the surface, molten rock called magma collects in a vast underground chamber. As pressure builds, the ground above may begin to swell and tremble, giving scientists their first clues that an eruption could be near.

When a volcano finally erupts, the results can be spectacular and terrifying. Rivers of glowing lava pour down the slopes, while clouds of ash are hurled kilometres into the sky. The ash can blot out the sun, ground aircraft and blanket entire towns in grey dust. In the most violent eruptions, superheated gas and rock race downhill faster than a car can drive.

Yet volcanoes are not only destroyers. Over thousands of years, cooled lava breaks down into some of the richest soil on Earth, which is why farmers often live on their fertile slopes despite the danger. Volcanoes also created many of the islands we know today, building new land from the sea floor upwards.

To live beside a volcano is to accept a bargain: the same force that can destroy a village can also feed it.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What is magma, and where does it collect before an eruption?", marks: 2 },
      { id: "q2", type: "Retrieval", prompt: "Give two effects that volcanic ash can have.", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'producing good crops' or 'rich'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why do farmers choose to live near volcanoes even though they are dangerous?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer calls living beside a volcano 'a bargain'. Why is this a good word choice?", marks: 2 },
    ],
  },
  {
    id: "antarctica",
    title: "The White Continent",
    genre: "Non-fiction — Geography",
    passage: `Antarctica is the coldest, windiest and driest continent on Earth. Almost the entire landmass is buried beneath a sheet of ice up to four kilometres thick, which holds around seventy per cent of the world's fresh water. Despite all this frozen water, so little snow falls that much of Antarctica is technically a desert.

No people live there permanently. Instead, the continent is home to scientists who arrive for a few months at a time to study the ice, the weather and the wildlife. They live in specially designed research stations that can withstand temperatures below minus fifty degrees and winds strong enough to knock a person over.

The animals that survive here are perfectly adapted to the cold. Emperor penguins huddle together in their thousands, taking turns to shuffle into the warm centre of the group. Seals rest on the ice, and in summer the surrounding ocean teems with tiny shrimp-like creatures called krill, which feed almost everything else.

Antarctica belongs to no single country. By international agreement it is protected for peaceful science, a rare place where nations work together rather than compete.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Roughly how much of the world's fresh water is held in Antarctica's ice?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Why is Antarctica described as a desert, despite being covered in ice?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'suited to conditions' or 'adjusted'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "What does the passage suggest about why penguins huddle together?", marks: 2 },
      { id: "q5", type: "Summary", prompt: "In one sentence, summarise why Antarctica is unusual compared with other continents.", marks: 2 },
    ],
  },
  {
    id: "honeybees",
    title: "The Language of Bees",
    genre: "Non-fiction — Science & Nature",
    passage: `Inside a beehive, tens of thousands of insects work together with astonishing order. Each bee has a job, and the survival of the whole colony depends on how well they cooperate. Perhaps the most remarkable of their skills is the way they share information.

When a worker bee discovers a good patch of flowers, she returns to the hive and performs a strange movement known as the waggle dance. By shaking her body and moving in a figure-of-eight, she tells the other bees exactly which direction to fly and how far to travel to find the food. The angle of her dance points the way, using the position of the sun as a guide.

Bees are not just clever; they are vital. As they move from flower to flower collecting nectar, they carry pollen with them, allowing plants to produce seeds and fruit. Without this quiet work, many of the crops that feed us would fail.

In recent years, bee numbers have fallen in many countries. Scientists warn that protecting these small insects may be one of the most important tasks we face.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What is the 'waggle dance', and what does it tell other bees?", marks: 2 },
      { id: "q2", type: "Retrieval", prompt: "What do bees use as a guide to point out direction?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'extremely important' or 'essential'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why might falling bee numbers be a serious problem for humans? Use the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer describes the bees' work as 'quiet'. What impression does this word create?", marks: 2 },
    ],
  },
  {
    id: "brain",
    title: "The Three-Pound Universe",
    genre: "Non-fiction — Science",
    passage: `Weighing little more than a bag of sugar, the human brain is the most complex object we know of in the universe. It contains around eighty-six billion nerve cells, called neurons, each connected to thousands of others. Together they form a network so vast that no computer has ever matched it.

Every thought, memory and feeling you have is the result of tiny electrical signals racing between these cells. When you learn something new, the connections between certain neurons grow stronger, which is why practice makes a skill feel easier over time. In a real sense, learning physically changes the shape of your brain.

The brain is also a hungry organ. Although it makes up only two per cent of your body weight, it uses about a fifth of all the energy you burn. This is why concentrating hard for a long time can leave you feeling genuinely tired.

Perhaps the strangest fact of all is this: the brain is the organ we use to understand everything else, yet it remains one of the greatest mysteries science has left to solve.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Roughly how many neurons does the human brain contain?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What happens to the connections between neurons when you learn something new?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that shows the brain needs a lot of energy.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say 'practice makes a skill feel easier over time'? Explain using the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The title calls the brain a 'Three-Pound Universe'. Why is this an effective title?", marks: 2 },
    ],
  },
  {
    id: "romanroads",
    title: "The Roads That Built an Empire",
    genre: "Non-fiction — History",
    passage: `The ancient Romans were among the greatest builders the world has ever seen, and nothing shows this better than their roads. Stretching for tens of thousands of kilometres, these roads linked distant corners of the empire to the city of Rome itself. It is from this network that we get the old saying, 'All roads lead to Rome.'

Roman roads were built to last. Workers dug deep foundations and layered them with stones, gravel and sand before laying a smooth surface of flat paving on top. The roads were slightly curved in the middle so that rainwater drained off the sides, and many were so well made that parts of them survive today, almost two thousand years later.

These roads were not built for comfort but for power. Along them marched the Roman army, able to reach a rebellion or a threatened border with remarkable speed. Traders, messengers and officials followed, carrying goods and news across the empire.

In a world without engines, the road was the fastest link between places. To control the roads was, in many ways, to control the empire itself.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What saying comes from the Roman road network?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Why were Roman roads built with a curve in the middle?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'an organised revolt against those in power'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say the roads helped the Romans control their empire?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says the roads were 'built for power, not comfort'. What does this contrast suggest?", marks: 2 },
    ],
  },
  {
    id: "egypt",
    title: "Secrets of the Pyramids",
    genre: "Non-fiction — History",
    passage: `More than four thousand years ago, the ancient Egyptians built enormous stone pyramids that still astonish us today. The largest, the Great Pyramid of Giza, was made from over two million blocks of stone, some weighing as much as a small lorry. For thousands of years it was the tallest building on Earth.

The pyramids were built as tombs for the pharaohs, the god-kings of Egypt. The Egyptians believed in a life after death, and a pharaoh was buried with everything he might need in the next world: food, furniture, jewellery and even boats. To protect these treasures, builders designed hidden passages and heavy stone doors, though robbers still found their way inside over the centuries.

How the pyramids were built without modern machinery remains a puzzle. Most historians believe thousands of skilled workers dragged the blocks up long ramps of earth, using ropes, sledges and sheer determination. They were not slaves, as was once thought, but paid labourers who were fed and housed by the state.

The pyramids stand today as a monument to human ambition and to a civilisation obsessed with eternity.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What were the pyramids built to be?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Why were pharaohs buried with food, furniture and treasure?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the final paragraph that means 'a strong desire to succeed or achieve something great'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "What does the passage suggest has changed in what historians believe about the builders?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer calls the pyramids 'a monument to human ambition'. What effect does this ending have?", marks: 2 },
    ],
  },
  {
    id: "blackdeath",
    title: "The Great Pestilence",
    genre: "Non-fiction — History",
    passage: `In the middle of the fourteenth century, a terrible disease swept across Europe. Known later as the Black Death, it is thought to have killed as many as one in three people on the continent within just a few years. Few disasters in human history have struck so quickly or so widely.

The disease spread along trade routes, carried by fleas that lived on the black rats aboard merchant ships. When the ships docked in busy ports, the infection leapt ashore and raced through crowded towns. In an age with no understanding of germs, people were helpless. Some blamed bad air, others blamed sin, and many simply fled.

The effects went far beyond the death toll. With so few workers left alive, those who survived could suddenly demand better pay and conditions. Old ways of life were shaken, and the rigid order of medieval society began, slowly, to crack.

Historians still debate the exact numbers, but on one point they agree: the Black Death changed Europe forever, reshaping not only who lived, but how they lived.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "How did the disease spread from place to place?", marks: 2 },
      { id: "q2", type: "Retrieval", prompt: "Give one reason people gave for the plague at the time.", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'strict and unbending'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why were surviving workers able to demand better pay after the plague?", marks: 2 },
      { id: "q5", type: "Summary", prompt: "In one sentence, summarise how the Black Death affected Europe beyond the deaths it caused.", marks: 2 },
    ],
  },
  {
    id: "rainforest",
    title: "The Lungs of the Planet",
    genre: "Non-fiction — Geography",
    passage: `Tropical rainforests cover only a small fraction of the Earth's surface, yet they are among the most important places on the planet. Warm, wet and green all year round, they are home to more than half of all the plant and animal species we know of, many of which are found nowhere else.

A rainforest is built in layers. High above, the tallest trees form a green roof called the canopy, where monkeys leap and birds nest in the sunlight. Below, in the dim and humid understorey, insects, frogs and snakes live among the tangled branches. On the shadowy forest floor, very little grows, because so little light reaches the ground.

Rainforests do vital work for the whole world. Their trees take in carbon dioxide and release the oxygen we breathe, which is why they are sometimes called the lungs of the planet. They also help control rainfall far beyond their own borders.

Yet every year, huge areas are cut down for timber and farmland. Protecting what remains has become one of the great challenges of our time.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What is the 'canopy' of a rainforest?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Why does very little grow on the rainforest floor?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the second paragraph that means 'damp and warm'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why are rainforests called 'the lungs of the planet'? Explain using the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "How does the writer make the loss of rainforests feel urgent in the final paragraph?", marks: 2 },
    ],
  },
  {
    id: "vikings",
    title: "Raiders and Traders",
    genre: "Non-fiction — History",
    passage: `For many people the word Viking brings to mind fierce warriors leaping from longships to raid the coasts of Europe. There is truth in this picture. More than a thousand years ago, Norse seafarers from Scandinavia did launch sudden and brutal attacks on villages and monasteries, carrying off treasure and terrifying those they left behind.

But the Vikings were far more than raiders. They were also skilled sailors, traders and settlers who travelled astonishing distances in their wooden ships. They reached as far east as the rivers of Russia and as far west as North America, five hundred years before Columbus. Along the way they traded furs, silver and even enslaved people.

At home, the Vikings were farmers and craftworkers who told long stories, called sagas, around the fire. Their society had its own laws and gatherings, and women held more rights than in many other lands of the time.

To remember the Vikings only as violent invaders is to miss half the story. They were explorers who helped connect a scattered world.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Where did the Vikings originally come from?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Give two things the Vikings did besides raiding.", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the second paragraph that means 'people who make their home in a new place'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say that seeing the Vikings only as raiders 'misses half the story'?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "How does the opening paragraph try to grab the reader's attention?", marks: 2 },
    ],
  },
  {
    id: "lighthouse",
    title: "The Light on the Rock",
    genre: "Fiction — Narrative extract",
    passage: `The storm had been building all afternoon, and by nightfall the sea was throwing itself against the rocks like something alive. Mira pressed her face to the cold glass of the lighthouse window and watched the waves rise higher than she had ever seen them.

Her grandfather moved calmly behind her, checking the great lamp as he had done every night for forty years. "The light must not go out," he said quietly, though she had heard him say it a hundred times before. Tonight the words felt different. Tonight, somewhere out in that churning darkness, a ship was trying to find its way home.

A gust struck the tower and the whole building seemed to shudder. Mira gripped the rail. Then, far out among the black waves, she saw it: a single, faint light, blinking on and off, on and off. A signal. A plea.

Her grandfather saw it too. Without a word he turned the great lamp until its beam swept across the water like a golden arm reaching out. "Hold on," Mira whispered to the tiny light. "We see you. Hold on."`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "How long has Mira's grandfather worked at the lighthouse?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What does Mira see far out among the black waves?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'to shake or tremble'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the grandfather's saying 'The light must not go out' feel 'different' to Mira tonight?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer describes the lamp's beam as 'a golden arm reaching out'. What effect does this image create?", marks: 3 },
    ],
  },
  {
    id: "abandonedhouse",
    title: "The House at the End of the Lane",
    genre: "Fiction — Narrative extract",
    passage: `Nobody in the village could remember who had last lived in the house at the end of the lane. Its windows were grey with dust, its garden had swallowed the path, and ivy crept across the walls like slow green fingers. Children dared one another to touch the gate, then ran away shrieking before they had.

Tom was not like the other children. On the last afternoon of summer, while his friends played by the river, he walked up the overgrown path alone. The gate opened with a groan, as if it had been waiting a long time for someone to try.

Inside the garden, the air was strangely still. No birds sang. A single apple tree stood in the centre, heavy with fruit that no one had ever picked. Tom reached up, and as his fingers closed around an apple, he heard it: a soft sound, somewhere between a sigh and a whisper, coming from the dark house behind him.

He should have run. Instead, slowly, he turned to face the open door.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What has happened to the house's garden?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What does Tom hear coming from the dark house?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the second paragraph that means 'a low, creaking sound'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "How does the writer suggest that Tom is braver, or more curious, than the other children?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer describes the ivy as 'slow green fingers'. Why is this description effective?", marks: 3 },
    ],
  },
  {
    id: "stormsea",
    title: "Overboard",
    genre: "Fiction — Narrative extract",
    passage: `The wave came out of nowhere. One moment Sam was coiling a rope on the deck of his uncle's fishing boat; the next, a wall of grey water lifted him off his feet and hurled him into the freezing sea.

The cold hit him like a fist, driving the breath from his lungs. When he surfaced, gasping, the boat was already further away than it should have been, rising and falling on the enormous swell. He tried to shout, but a mouthful of salt water choked the words.

Kick, he told himself. Just keep kicking. His lifejacket held him up, but the waves kept breaking over his head, and the shore was nowhere in sight. Panic clawed at him, urging him to thrash and scream, and he knew that if he gave in to it he would tire and sink.

So Sam did the hardest thing of all. He forced himself to be calm. He turned onto his back, let the jacket carry him, and fixed his eyes on the pale shape of the boat as it began, at last, to turn towards him.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What was Sam doing on the deck when the wave struck?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What keeps Sam afloat in the water?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word or phrase in the third paragraph that shows Sam felt sudden fear.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer call staying calm 'the hardest thing of all'?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says 'the cold hit him like a fist'. What does this simile tell us about the water?", marks: 3 },
    ],
  },
  {
    id: "malala",
    title: "The Girl Who Would Not Be Silenced",
    genre: "Non-fiction — Biography",
    passage: `Malala Yousafzai was born in the Swat Valley of Pakistan, a place of green mountains and rushing rivers. From a young age she loved school, and her father, a teacher, encouraged her to read, question and learn. For Malala, the classroom was the most exciting place in the world.

But when an armed group took control of the valley, everything changed. They declared that girls should no longer be allowed to go to school. Many families were too frightened to argue. Malala, still only a child, refused to stay silent. She began to speak out, writing and giving interviews about her right to an education.

In 2012, her courage nearly cost her life. On her way home from school she was attacked and seriously wounded. Against all odds, she survived, and instead of falling quiet she grew louder still, carrying her message to the wider world.

In 2014, at just seventeen, Malala became the youngest person ever to receive the Nobel Peace Prize. Her story reminds us that a single determined voice can be heard around the globe.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Where was Malala born?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What did the armed group declare about girls and school?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'bravery in the face of danger'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "What does the passage suggest about Malala's character? Support your answer with the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The title says Malala 'would not be silenced'. Why is this an effective title for her story?", marks: 2 },
    ],
  },
  {
    id: "earthquake",
    title: "When the Ground Shakes",
    genre: "Non-fiction — Geography",
    passage: `The ground beneath our feet feels solid and unmoving, yet the surface of the Earth is actually broken into enormous slabs of rock called tectonic plates. These plates drift very slowly, no faster than your fingernails grow, floating on the hot, semi-molten rock below.

Most of the time this movement goes unnoticed. But where two plates meet, they can grind against one another, and pressure builds along the join. When that pressure is finally released, the ground lurches violently. This is an earthquake, and it can last only seconds yet cause enormous destruction.

Scientists measure the strength of earthquakes using instruments called seismometers, which record the shaking as jagged lines. A large earthquake can topple buildings, snap roads and, if it strikes beneath the sea, trigger giant waves known as tsunamis.

We cannot yet predict exactly when an earthquake will strike. Instead, in places where they are common, people build flexible structures designed to sway rather than break, and practise drills so that everyone knows what to do when the ground begins to move.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What are the large slabs of rock that make up the Earth's surface called?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What can happen if an earthquake strikes beneath the sea?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the second paragraph that means 'moved suddenly and roughly'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why do people in earthquake zones build structures that can 'sway rather than break'?", marks: 2 },
      { id: "q5", type: "Summary", prompt: "In one sentence, explain what causes an earthquake.", marks: 2 },
    ],
  },
  {
    id: "spiders",
    title: "The Silk Spinners",
    genre: "Non-fiction — Science & Nature",
    passage: `Many people shiver at the sight of a spider, but these eight-legged creatures are among nature's most skilful engineers. The silk they produce is one of the most remarkable materials in the world: for its weight, it is stronger than steel, yet it can stretch without snapping.

A spider spins silk from tiny openings near the tip of its body. Some spiders use it to build delicate webs, spun in patient circles to trap flying insects. Others do not build webs at all, but use their silk as a safety line, or wrap it around their eggs to keep them safe. A few even float on the wind by trailing a thread behind them, drifting for miles like tiny living kites.

Far from being pests, most spiders are helpful. A single spider can eat hundreds of insects in a year, keeping the numbers of flies and mosquitoes in check. Without them, our homes and gardens would be far buzzier places.

Scientists are now trying to copy spider silk in laboratories, hoping to make materials as strong and light as the ones a spider produces every day.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Give two different ways spiders use their silk.", marks: 2 },
      { id: "q2", type: "Retrieval", prompt: "Why are scientists interested in spider silk?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the first paragraph that means 'able to be stretched'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say spiders are 'helpful' rather than pests? Use the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer compares floating spiders to 'tiny living kites'. Why is this comparison effective?", marks: 2 },
    ],
  },
  {
    id: "greatfire",
    title: "The Night London Burned",
    genre: "Non-fiction — History",
    passage: `In the early hours of a September morning in 1666, a small fire began in a baker's shop on Pudding Lane in London. Nobody could have guessed that this modest blaze would grow into one of the greatest disasters the city had ever known.

London at that time was a maze of narrow streets and wooden houses built so close together that their upper floors almost touched. That summer had been long and dry, and a strong wind was blowing. The flames leapt from roof to roof faster than anyone could fight them, and for four days the fire raged out of control.

By the time it was finally stopped, the Great Fire had destroyed thousands of homes and left much of the city in ashes. Remarkably, very few people are recorded as having died. Thousands were left homeless, camping in the fields beyond the walls.

Yet from the disaster came change. London was rebuilt with wider streets and houses of brick and stone, and out of the ruins rose grand new buildings, including the great dome of St Paul's Cathedral.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Where did the Great Fire of London begin?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Give two reasons the fire spread so quickly.", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the second paragraph that means 'burned fiercely and out of control'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why might London have been safer after it was rebuilt? Use the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer calls the first fire 'modest'. Why is this word choice interesting, given what happened next?", marks: 2 },
    ],
  },
  {
    id: "desert",
    title: "Life in the Driest Places",
    genre: "Non-fiction — Geography",
    passage: `A desert is any place that receives very little rain, and some deserts go for years without a single drop. By day the sun can be fierce enough to crack stone, while at night, with no clouds to trap the heat, temperatures can plunge below freezing. It seems an impossible place to live, and yet life finds a way.

Desert plants have clever tricks for survival. The cactus stores water in its thick, waxy stem and protects itself with sharp spines, while other plants spread their roots wide and shallow to soak up the smallest shower. Some seeds lie hidden in the sand for years, bursting into flower only when rain finally comes.

Animals, too, have adapted. Many sleep through the burning day in cool burrows and hunt at night. The camel, famously, can survive for days without drinking, its hump storing fat that it slowly turns into energy and water.

Deserts may look empty, but to those who know how to read them, they are full of quiet, stubborn life.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What makes somewhere count as a desert?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "How does a cactus survive with so little water?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the first paragraph that means 'to drop suddenly'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why do many desert animals hunt at night rather than during the day?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer ends by calling desert life 'quiet, stubborn'. What impression do these words give?", marks: 2 },
    ],
  },
  {
    id: "everest",
    title: "The Roof of the World",
    genre: "Non-fiction — Geography",
    passage: `At almost nine kilometres high, Mount Everest is the tallest mountain on Earth, its peak piercing the sky where jet aircraft fly. For centuries it was thought impossible to climb, a frozen giant guarding the border between Nepal and Tibet.

The higher a climber goes, the thinner the air becomes, until each breath holds barely a third of the oxygen found at sea level. Near the summit lies a region so hostile that mountaineers call it the 'death zone', where the body slowly begins to fail and no one can survive for long. Cold, exhaustion and sudden storms make every step a risk.

In 1953, Edmund Hillary of New Zealand and Tenzing Norgay, a Sherpa guide, became the first people known to reach the top and return safely. Since then, thousands have followed, though many have lost their lives trying.

Everest still draws climbers from across the world. For some it is a test of courage; for others, a reminder that there remain places on Earth that humans conquer only briefly, and never truly tame.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Which two countries does Mount Everest lie between?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Who were the first two people known to reach the summit and return safely?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the second paragraph that means 'extremely unwelcoming or dangerous'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why is the area near the summit called the 'death zone'? Explain using the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says humans 'conquer only briefly, and never truly tame' Everest. What does this suggest about the mountain?", marks: 2 },
    ],
  },
  {
    id: "watercycle",
    title: "The Endless Journey of Water",
    genre: "Non-fiction — Science",
    passage: `The water that falls as rain today may once have flowed in an ancient river, floated in a cloud above the dinosaurs, or lain frozen in a glacier for a thousand years. Water is never truly used up; instead, it travels endlessly around our planet in a process called the water cycle.

It begins with the sun. Its warmth heats the surface of oceans, lakes and rivers, turning liquid water into an invisible gas called water vapour, which rises into the sky. This is called evaporation. As the vapour climbs higher, it cools and gathers into tiny droplets, forming the clouds we see drifting overhead.

When those droplets grow heavy enough, they fall back to Earth as rain, snow or hail. Some soaks into the ground, some is drunk by plants and animals, and much of it flows through streams and rivers back to the sea. There, warmed again by the sun, the whole journey begins once more.

Every glass of water you drink is part of this ancient, unbroken cycle, borrowed for a moment before it moves on.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What is the name of the process where the sun turns liquid water into vapour?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Name two forms in which water can fall back to Earth.", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the first paragraph that means 'a slow-moving mass of ice'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say water is 'never truly used up'? Explain using the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says water is 'borrowed for a moment before it moves on'. What effect does this idea have?", marks: 2 },
    ],
  },
  {
    id: "gutenberg",
    title: "The Machine That Changed Everything",
    genre: "Non-fiction — History",
    passage: `Before the middle of the fifteenth century, every book in Europe had to be copied out by hand. A single Bible might take a skilled writer years to complete, and because books were so slow to make, they were rare and expensive. Only the wealthy and the powerful could own them, and only a few people could read.

Then, in a German city, a craftsman named Johannes Gutenberg developed a new invention: the printing press. Using small metal letters that could be arranged, inked and pressed onto paper, he could print a whole page in moments and repeat it as many times as he wished. What had once taken years could now be done in days.

The results were extraordinary. Books became cheaper, more common and easier to own. Ideas that had once spread slowly by word of mouth could now race across countries in printed pages. More people learned to read, and knowledge that had been locked away began to reach ordinary lives.

Few single inventions have changed the world so completely. The printing press did not just make books; it opened doors.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "How were books made before the printing press?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "How did Gutenberg's press create a page?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'amazing' or 'remarkable'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why did more people learn to read after the printing press was invented?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says the press 'opened doors'. What does this metaphor mean here?", marks: 2 },
    ],
  },
  {
    id: "penguins",
    title: "Fathers of the Ice",
    genre: "Non-fiction — Science & Nature",
    passage: `Of all the creatures that endure the Antarctic winter, few face a harder task than the male emperor penguin. While most animals flee the coming cold, these birds walk many kilometres inland, away from the sea, to gather in vast breeding colonies on the open ice.

After the female lays a single precious egg, she passes it carefully to the male and returns to the ocean to feed. From that moment, the father becomes the egg's only protector. He balances it on top of his feet, tucked beneath a warm fold of skin, and there he stands for two long months through the darkest, coldest weather on Earth.

During this time he eats nothing at all. To survive the howling winds, the fathers huddle together in a great shuffling mass, each taking turns to stand at the freezing edge before moving into the warm centre. In this way, no single bird bears the worst of the cold for long.

When at last the chick hatches and the mother returns with food, the exhausted father has lost almost half his body weight, yet he has done what few animals could: he has kept the future alive.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What does the male emperor penguin do with the egg?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Why does the father lose almost half his body weight?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the first paragraph that means 'to survive something difficult'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why do the penguins take turns standing at the edge of the huddle?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says the father 'has kept the future alive'. What makes this a powerful ending?", marks: 2 },
    ],
  },
  {
    id: "firstday",
    title: "New Beginnings",
    genre: "Fiction — Narrative extract",
    passage: `Ava stood at the school gates and felt her stomach twist into a knot. Around her, hundreds of strangers streamed past in their crisp new uniforms, all of them seeming to know exactly where they were going. She did not know a single face.

She had moved to the town only three weeks earlier, and everything still felt wrong: the accent people spoke with, the unfamiliar streets, even the smell of the air. Back home she had been the girl with a hundred friends. Here she was nobody, and the thought made her want to turn and run all the way back to a house that no longer existed.

Taking a deep breath, she forced her feet to move. As she reached the doors, a girl with bright red trainers fell into step beside her. "You're new, aren't you?" the girl said, smiling. "I got lost every day for a week when I started. Come on, I'll show you where the tutor rooms are."

And just like that, without quite knowing how, Ava felt the knot in her stomach begin, very slightly, to loosen.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "How long ago had Ava moved to the town?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What does the girl with red trainers offer to do?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word or phrase in the first paragraph that shows Ava felt nervous.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does Ava feel like 'nobody' at her new school? Use the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer describes Ava's stomach as a 'knot' that begins to 'loosen'. How does this image track her feelings?", marks: 3 },
    ],
  },
  {
    id: "recycling",
    title: "A Second Life for Rubbish",
    genre: "Non-fiction — Environment",
    passage: `Every day, people throw away enormous amounts of rubbish, and much of it does not simply disappear. A plastic bottle dropped in a bin may take hundreds of years to break down, and if it reaches the sea, it can harm the creatures that live there. This is why recycling has become so important.

Recycling means taking materials we have finished with and turning them into something new. Glass bottles can be melted and reshaped again and again without losing quality. Old paper can be pulped and pressed into fresh sheets. Even aluminium cans can be reborn as new cans in a matter of weeks, using only a fraction of the energy needed to make them from scratch.

The benefits go beyond tidiness. Recycling saves precious raw materials, reduces the rubbish sent to landfill, and cuts the pollution released when new products are made. Small choices, repeated by millions of people, can add up to a real difference.

Not everything can be recycled, and reducing what we use in the first place matters most of all. But every item given a second life is one less burden on the planet.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Roughly how long can a plastic bottle take to break down?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Give two benefits of recycling mentioned in the passage.", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'a place where rubbish is buried'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say reducing what we use 'matters most of all'?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer talks about giving rubbish 'a second life'. Why is this phrase effective?", marks: 2 },
    ],
  },
  {
    id: "wright",
    title: "The Dream of Flight",
    genre: "Non-fiction — Biography",
    passage: `For as long as anyone could remember, people had gazed at birds and dreamed of flying. Many had tried and failed, some paying with their lives. Then, at the very start of the twentieth century, two brothers from America named Wilbur and Orville Wright decided to solve the problem for good.

The brothers ran a small bicycle shop, and they were not famous scientists. But they were patient, careful thinkers who tested their ideas again and again. They studied how birds balanced in the air, built their own wings, and even constructed a wind tunnel to see how air flowed around different shapes. Failure did not discourage them; it taught them.

On a cold December morning in 1903, on a windswept beach, their fragile flying machine lifted off the ground and stayed in the air for twelve whole seconds. It was a short flight, barely the length of a swimming pool, yet it changed history. Humans could fly.

Within a lifetime, their invention would carry people across oceans and, eventually, all the way to the Moon.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "What job did the Wright brothers do before they built their flying machine?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "How long did their first flight last?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'easily broken or delicate'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "What does the passage suggest was the reason for the brothers' success? Use the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says 'Failure did not discourage them; it taught them.' What does this tell us about the brothers?", marks: 2 },
    ],
  },
  {
    id: "sharks",
    title: "The Misunderstood Hunter",
    genre: "Non-fiction — Science & Nature",
    passage: `Few animals are as feared as the shark, yet much of that fear is built on myth. Films and stories often paint sharks as mindless killers hunting humans, but the truth is very different. Attacks on people are extremely rare, and in almost every case the shark, discovering its mistake, swims away.

Sharks have patrolled the oceans for more than four hundred million years, long before the first dinosaurs walked the Earth. In that time they have become superb hunters, equipped with senses far sharper than our own. A shark can detect a single drop of blood in a huge volume of water and can sense the faint electricity given off by a hidden fish.

Far from being villains, sharks are vital to the health of the sea. As top predators, they keep the numbers of other creatures in balance, removing the sick and the weak and keeping fish populations strong.

Sadly, it is sharks that should fear us. Millions are killed by humans every year, and many species are now in danger. The real story of the shark is not one of terror, but of survival.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "For roughly how long have sharks existed in the oceans?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "Give one example of a shark's remarkable senses.", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the third paragraph that means 'an animal that hunts others for food'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say 'it is sharks that should fear us'?", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "How does the writer try to change the reader's opinion of sharks across the passage?", marks: 3 },
    ],
  },
  {
    id: "forestpath",
    title: "The Path Through the Trees",
    genre: "Fiction — Narrative extract",
    passage: `Leo had been warned never to leave the marked trail, but the strange blue bird had darted between the trees so quickly, and he only meant to follow it a little way. Now, looking back, he could no longer see the path at all.

The forest had changed around him. The friendly, sunlit wood he had entered that morning was gone, replaced by something older and darker. The trees here grew close and tall, their branches locking overhead until only a green gloom filtered down. Somewhere, water was dripping. His own footsteps sounded far too loud.

He told himself not to panic. The sun had been on his left as he walked in, so if he kept it on his right now, he should find his way back. But the canopy was so thick he could no longer tell where the sun was at all.

A twig snapped behind him. Leo spun round, heart hammering, but there was nothing there — only the endless grey trunks, and the feeling, sudden and certain, that he was no longer alone.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Why did Leo leave the marked trail?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "What plan does Leo make to find his way back?", marks: 1 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the second paragraph that means 'partial darkness' or 'dimness'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "How does the writer show that Leo is becoming frightened? Give two details.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer says the wood was 'replaced by something older and darker'. What mood does this create?", marks: 3 },
    ],
  },
  {
    id: "internet",
    title: "The World in a Wire",
    genre: "Non-fiction — Technology",
    passage: `When you send a message to a friend on the other side of the world, it arrives in less than a second. It feels like magic, but behind that instant lies one of the greatest engineering achievements in history: the internet.

Most people imagine the internet floating invisibly in the air, yet the truth is far more surprising. The vast majority of the world's data travels through cables lying on the ocean floor, some thousands of kilometres long. Inside these cables, threads of glass thinner than a hair carry information as pulses of light, flickering on and off billions of times each second.

The internet was not built by a single person or country. It grew, piece by piece, as engineers around the world agreed on shared rules that let different computers talk to one another. Today it connects billions of devices, from phones and laptops to fridges and cars.

For all its power, the internet is only a tool. It can spread knowledge and bring people together, but it can also spread falsehoods. How we choose to use it is, in the end, up to us.`,
    questions: [
      { id: "q1", type: "Retrieval", prompt: "Where does most of the world's internet data actually travel?", marks: 1 },
      { id: "q2", type: "Retrieval", prompt: "How is information carried inside the glass cables?", marks: 2 },
      { id: "q3", type: "Vocabulary", prompt: "Find a word in the final paragraph that means 'untrue statements' or 'lies'.", marks: 1 },
      { id: "q4", type: "Inference", prompt: "Why does the writer say the internet 'grew' rather than being 'built'? Use the text.", marks: 2 },
      { id: "q5", type: "Language analysis", prompt: "The writer ends 'How we choose to use it is, in the end, up to us.' Why is this an effective way to close?", marks: 2 },
    ],
  },
];
