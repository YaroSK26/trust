

let questions = [
  {
    question: "Where was Jesus born?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "Bethlehem", correct: true },
      { text: "Nazareth", correct: false },
      { text: "Athens", correct: false },
    ],
    explanation:
      '"Now when Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, \
        there came wise men from the east to Jerusalem." - Matthew 2:1-2.',
  },
  {
    question:
      "What was the first miracle that Jesus perform during His ministry?",
    answers: [
      { text: "He healed a blind man", correct: false },
      { text: "He resurrected Lazarus", correct: false },
      { text: "He turned water into wine", correct: true },
      { text: "He walked on water", correct: false },
    ],
    explanation:
      '"This was Jesus\' first miracle, and he did it in the village of Cana in Galilee. There Jesus showed \
        his glory, and his disciples put their faith in him." - John 2:11.',
  },
  {
    question: "How many days did it take God to create everything?",
    answers: [
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "1", correct: false },
      { text: "6", correct: true },
    ],
    explanation:
      '"By the seventh day God completed His work which He had done, and He rested on the seventh \
        day from all His work which He had done." - Genesis 2:2.',
  },
  {
    question:
      "Why did the people during the days of Noah get caught in the flood?",
    answers: [
      { text: "A giant fish ate and left no crumbs", correct: false },
      { text: "They were short", correct: false },
      {
        text: "They did not care about God and didn't want to repent of their evil acts",
        correct: true,
      },
      {
        text: "They didn't have the tools to build the Ark in time",
        correct: false,
      },
    ],
    explanation:
      "God saw the wickedness and unrighteousness the world had become, \
        so he told Noah to build an Ark to save his family and himself, as he said to him, 'I am going \
        to bring floodwaaters on the earth to destroy all life under the heavens, every creature that has the breath \
        of life in it. Everything on earth will perish,' from Genesis 6:17.",
  },
  {
    question: "What is the Jewish sacred text called?",
    answers: [
      { text: "The Tanakh", correct: true },
      { text: "The Corinth", correct: false },
      { text: "The Abrahamic Law", correct: false },
      { text: "The Quran", correct: false },
    ],
    explanation: "The Tanakh is essentially the Hebrew Bible.",
  },
  {
    question: "Who wrote most of the New Testament?",
    answers: [
      { text: "Paul", correct: false },
      { text: "Luke", correct: true },
      { text: "David", correct: false },
      { text: "John", correct: false },
    ],
    explanation:
      "This is a tricky question. Luke wrote the Gospel of Luke and Acts, \
        the two of the longest books in the New Testament, with a total of 37,932 words, while Paul contributed to \
        the 12 books in the New Testament, with a total of 32,408 words (OverviewBible, 2014). Note that the question \
        is asking about who wrote the most (by volume), not who wrote the most books.",
  },
  {
    question: "Which of Jesus' disciples is known as the 'beloved'?",
    answers: [
      { text: "Luke", correct: false },
      { text: "Peter", correct: false },
      { text: "John", correct: true },
      { text: "James", correct: false },
    ],
    explanation:
      "Throughout the Gospel of John, there are various mentions of the 'disciple whom He loved', \
        referring to John. This name is attributed to John because of the numerous mentions (e.g., \"So she ran and came to \
        Simon Peter and to the other disciple whom Jesus loved, and said to them, 'They have taken away the Lord out of the tomb, \
        and we do not know where they have laid Him.'\" - John 20:2).",
  },
  {
    question: "Which ONE of these is part of the Ten Commandments?",
    answers: [
      { text: "Collect taxes to build churches", correct: false },
      {
        text: "You have the right to stone whoever is caught in adultery",
        correct: false,
      },
      {
        text: "You shall honor your parents, unless they don't love you",
        correct: false,
      },
      {
        text: "Keep the Sabbath day to worship, remember creation, and rest",
        correct: true,
      },
    ],
    explanation:
      'Read the previous answers carefully and you\'ll find the faults. \
        "Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, \
        but the seventh day is a Sabbath to the Lord your God. On it you shall not do any work, you, or \
        your son, or your daughter, your male servant, or your female servant, or your livestock, or the sojourner, \
        who is within your gates." - Exodus 20:8-10.',
  },
  {
    question: "Who cut Samson's hair?",
    answers: [
      { text: "Samson", correct: false },
      { text: "Delilah", correct: false },
      { text: "A Philistine", correct: true },
      { text: "His donkey", correct: false },
    ],
    explanation:
      '"After putting him to sleep on [Delilah\'s] lap, she called for someone to shave off \
        the seven braids of his hair, and so began to subdue him. And his strength left him." - Judges 16:18. \
        The person Delilah called was a Philistine, possibly a servant.',
  },
  {
    question:
      "Who persecuted and killed Christians but then became a Christian?",
    answers: [
      { text: "Judas", correct: false },
      { text: "Samson", correct: false },
      { text: "Solomon", correct: false },
      { text: "Saul", correct: true },
    ],
    explanation:
      'Saul fell to the ground and heard Jesus tell him, "Saul, Saul, why are you persecuting me?" \
        Saul was persecuting the body of Christ, consisting of Christians and the church.',
  },
  {
    question: "I am the ____, you are the ____.",
    answers: [
      { text: "branches, vine", correct: false },
      { text: "vine, branches", correct: true },
      { text: "vineyard, fruits", correct: false },
      { text: "wine, grapes", correct: false },
    ],
    explanation:
      '"I am the vine, you are the branches. If you remain in me and I in you, you will bear much fruit; \
        apart from me you can do nothing." - John 15:5.',
  },
  {
    question: "Who wrote Proverbs?",
    answers: [
      { text: "David", correct: false },
      { text: "Moses", correct: false },
      { text: "Solomon", correct: true },
      { text: "Unknown", correct: false },
    ],
    explanation:
      'In the beginning of the book of Proverbs, it already tells you who wrote it, as it says,"The proverbs of \
        Solomon son of David, king of Israel:" - Proverbs 1:1.',
  },
  {
    question: "In which book of the Bible do we read about Mordecai?",
    answers: [
      { text: "Esther", correct: true },
      { text: "Ruth", correct: false },
      { text: "Mordecai", correct: false },
      { text: "Exodus", correct: false },
    ],
    explanation:
      "Mordecai is Esther's uncle, and he took good care of Esther until she became \
        a queen and married King Xerxes (or also called King Ahasuerus). Also, if you clicked on Mordecai, \
        there's no book called \"Mordecai\" in the Bible, so I suggest you read it carefully.",
  },
  {
    question:
      "Who was the god/goddess or idol that Ephesians worshipped the most?",
    answers: [
      { text: "Zeus", correct: false },
      { text: "Poseidon", correct: false },
      { text: "Artemis", correct: true },
      { text: "Athena", correct: false },
    ],
    explanation:
      "\"There is danger not only that our business will fall into disrepute, but also that \
        the temple of the great goddess Artemis will be discredited and her majesty deposed - she who is worshipped by all \
        the province of Asia and the whole world. When the men heard this, they were enraged and began shouting, 'Great is Artemis \
        of the Ephesians!'\" - Acts 19:27-28.",
  },
  {
    question: "Which one of these is NOT a prophet?",
    answers: [
      { text: "Ruth", correct: true },
      { text: "Deborah", correct: false },
      { text: "Moses", correct: false },
      { text: "Elijah", correct: false },
    ],
    explanation:
      "Ruth was a Moabite woman who married to Boaz, and is the lineage of David, which leads to Jesus Christ at one point. \
        She is known for her loyalty, kindness, and devotion to her mother-in-law, Naomi, after her first husband died. Deborah is considered a prophet in Judaism, \
        and the rest are well known prophets.",
  },
  {
    question: "Where was Jesus born?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "Bethlehem", correct: true },
      { text: "Nazareth", correct: false },
      { text: "Athens", correct: false },
    ],
    explanation:
      '"Now when Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, there came wise men from the east to Jerusalem." - Matthew 2:1-2.',
  },
  {
    question: "How many days did it take God to create everything?",
    answers: [
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "1", correct: false },
      { text: "6", correct: true },
    ],
    explanation:
      '"By the seventh day God completed His work which He had done, and He rested on the seventh day from all His work which He had done." - Genesis 2:2.',
  },
  {
    question:
      "Why did the people during the days of Noah get caught in the flood?",
    answers: [
      { text: "A giant fish ate and left no crumbs", correct: false },
      { text: "They were short", correct: false },
      {
        text: "They did not care about God and didn't want to repent of their evil acts",
        correct: true,
      },
      {
        text: "They didn't have the tools to build the Ark in time",
        correct: false,
      },
    ],
    explanation:
      "God saw the wickedness and unrighteousness the world had become, so he told Noah to build an Ark to save his family and himself, as he said to him, 'I am going to bring floodwaters on the earth to destroy all life under the heavens, every creature that has the breath of life in it. Everything on earth will perish,' from Genesis 6:17.",
  },
  {
    question: "What is the Jewish sacred text called?",
    answers: [
      { text: "The Tanakh", correct: true },
      { text: "The Corinth", correct: false },
      { text: "The Abrahamic Law", correct: false },
      { text: "The Quran", correct: false },
    ],
    explanation: "The Tanakh is essentially the Hebrew Bible.",
  },
  {
    question: "Who wrote most of the New Testament?",
    answers: [
      { text: "Paul", correct: false },
      { text: "Luke", correct: true },
      { text: "David", correct: false },
      { text: "John", correct: false },
    ],
    explanation:
      "This is a tricky question. Luke wrote the Gospel of Luke and Acts, the two of the longest books in the New Testament, with a total of 37,932 words, while Paul contributed to the 12 books in the New Testament, with a total of 32,408 words (OverviewBible, 2014). Note that the question is asking about who wrote the most (by volume), not who wrote the most books.",
  },
  {
    question: "In which book of the Bible do we read about Mordecai?",
    answers: [
      { text: "Esther", correct: true },
      { text: "Ruth", correct: false },
      { text: "Mordecai", correct: false },
      { text: "Exodus", correct: false },
    ],
    explanation:
      "Mordecai is Esther's uncle, and he took good care of Esther until she became a queen and married King Xerxes (or also called King Ahasuerus). Also, if you clicked on Mordecai, there's no book called \"Mordecai\" in the Bible, so I suggest you read it carefully.",
  },
  {
    question:
      "Who was the god/goddess or idol that Ephesians worshipped the most?",
    answers: [
      { text: "Zeus", correct: false },
      { text: "Poseidon", correct: false },
      { text: "Artemis", correct: true },
      { text: "Athena", correct: false },
    ],
    explanation:
      '"There is danger not only that our business will fall into disrepute, but also that the temple of the great goddess.',
  },
  {
    question:
      "What was the name of the tree that Adam and Eve ate the forbidden fruit from?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Fig", correct: false },
      { text: "Pomegranate", correct: false },
      { text: "Tree of Knowledge", correct: true },
    ],
    explanation:
      "The Bible does not explicitly state the type of tree the forbidden fruit came from, but it is often called the 'Tree of Knowledge of Good and Evil'.",
  },
  {
    question:
      "What are the names of the two angels who visited Abraham and informed him that his wife Sarah would bear a son?",
    answers: [
      { text: "Michael and Gabriel", correct: false },
      { text: "Raphael and Gabriel", correct: false },
      { text: "Gabriel and Michael", correct: true },
      { text: "Raphael and Michael", correct: false },
    ],
    explanation:
      "In Genesis 18, Abraham is visited by two angels, one of whom is explicitly identified as Gabriel. The other angel is not named, but is often assumed to be Michael.",
  },
  {
    question:
      "What was the name of the giant who Goliath fought and was defeated by David?",
    answers: [
      { text: "Goliath", correct: true },
      { text: "Philistine", correct: false },
      { text: "Saul", correct: false },
      { text: "Og", correct: false },
    ],
    explanation:
      "Goliath was the Philistine champion whom David famously defeated with a slingshot.",
  },
  {
    question:
      "What was the name of the king of Israel who was known for his wisdom?",
    answers: [
      { text: "Solomon", correct: true },
      { text: "David", correct: false },
      { text: "Moses", correct: false },
      { text: "Abraham", correct: false },
    ],
    explanation:
      "King Solomon is renowned for his wisdom, which is often attributed to a divine gift from God.",
  },
  {
    question: "What was the name of the prophet who was swallowed by a whale?",
    answers: [
      { text: "Jonah", correct: true },
      { text: "Noah", correct: false },
      { text: "Moses", correct: false },
      { text: "Elijah", correct: false },
    ],
    explanation:
      "The prophet Jonah is famously known for being swallowed by a whale and later being rescued after three days.",
  },
  {
    question: "What was the name of the place where Jesus was crucified?",
    answers: [
      { text: "Golgotha", correct: true },
      { text: "Gethsemane", correct: false },
      { text: "Nazareth", correct: false },
      { text: "Bethlehem", correct: false },
    ],
    explanation:
      "Golgotha, also known as Calvary, is the site where Jesus was crucified.",
  },
  {
    question: "What was the name of the apostle who betrayed Jesus?",
    answers: [
      { text: "Judas Iscariot", correct: true },
      { text: "Peter", correct: false },
      { text: "John", correct: false },
      { text: "Paul", correct: false },
    ],
    explanation:
      "Judas Iscariot is the apostle who betrayed Jesus for 30 pieces of silver.",
  },
  {
    question: "What was the name of the first book of the New Testament?",
    answers: [
      { text: "Matthew", correct: true },
      { text: "Mark", correct: false },
      { text: "Luke", correct: false },
      { text: "John", correct: false },
    ],
    explanation:
      "The Gospel of Matthew is the first book of the New Testament.",
  },
  {
    question: "What was the name of the first woman created by God?",
    answers: [
      { text: "Eve", correct: true },
      { text: "Sarah", correct: false },
      { text: "Ruth", correct: false },
      { text: "Mary", correct: false },
    ],
    explanation: "Eve was the first woman created by God.",
  },
  {
    question:
      "What was the name of the river that Moses parted to lead the Israelites out of Egypt?",
    answers: [
      { text: "Nile", correct: true },
      { text: "Tigris", correct: false },
      { text: "Euphrates", correct: false },
      { text: "Jordan", correct: false },
    ],
    explanation:
      "The Israelites crossed the Red Sea, which is a branch of the Nile River, to escape from Egypt. Exodus 14:21-22 states, 'Then Moses stretched out his hand over the sea, and the Lord caused the sea to go back by a strong east wind all night, and made the dry land appear; and the waters were divided.'",
  },
  {
    question: "What was the name of the city where Jesus was born?",
    answers: [
      { text: "Bethlehem", correct: true },
      { text: "Nazareth", correct: false },
      { text: "Jerusalem", correct: false },
      { text: "Capernaum", correct: false },
    ],
    explanation:
      "Jesus was born in Bethlehem, a small town in Judea. Micah 5:2 states, 'But you, Bethlehem Ephrathah, though you are small among the thousands of Judah, from you shall come forth for me one who will rule in Israel, whose origins are from of old, from ancient times.'",
  },
  {
    question:
      "What was the name of the woman who anointed Jesus with oil before his crucifixion?",
    answers: [
      { text: "Mary Magdalene", correct: true },
      { text: "Martha", correct: false },
      { text: "Mary, the mother of Jesus", correct: false },
      { text: "Salome", correct: false },
    ],
    explanation:
      "Mary Magdalene anointed Jesus' feet with oil and wiped them with her hair just days before his crucifixion. Mark 14:3 states, 'And while he was in Bethany at the house of Simon the leper, as he was reclining at the table, a woman came in with an alabaster flask of very expensive perfume of nard, and she poured it on his head.'",
  },
  {
    question:
      "What was the name of the apostle who was known for his missionary journeys and letters to early churches?",
    answers: [
      { text: "Paul", correct: true },
      { text: "Peter", correct: false },
      { text: "John", correct: false },
      { text: "James", correct: false },
    ],
    explanation:
      "Paul, also known as Saul of Tarsus, was a prolific writer and missionary who played a crucial role in spreading Christianity throughout the Roman Empire. Acts 9:15 states, 'But the Lord said to him, 'Go, for I will send you far off to the Gentiles.'",
  },
  {
    question:
      "What was the name of the mountain where Moses received the Ten Commandments?",
    answers: [
      { text: "Mount Sinai", correct: true },
      { text: "Mount Tabor", correct: false },
      { text: "Mount Carmel", correct: false },
      { text: "Mount Hermon", correct: false },
    ],
    explanation:
      "Moses ascended Mount Sinai, also known as Mount Horeb, to receive the Ten Commandments from God. Exodus 19:20 states, 'Then Moses went up on the mountain to meet with God, and the Lord called to him from the top of the mountain, saying, 'Thus you shall say to the house of Jacob, and tell the people of Israel: 'You have seen what I have done to Egypt, and how I have carried you on eagles' wings and brought you to myself.'",
  },
  {
    question: "What was the name of the language that Jesus spoke?",
    answers: [
      { text: "Aramaic", correct: true },
      { text: "Hebrew", correct: false },
      { text: "Greek", correct: false },
      { text: "Latin", correct: false },
    ],
    explanation:
      "Aramaic was the common language spoken in Galilee and Judea during Jesus' time, and it is believed that he primarily spoke Aramaic.",
  },
  {
    question:
      "What was the name of the high priest who refused to let the apostles leave prison?",
    answers: [
      { text: "Caiaphas", correct: true },
      { text: "Annas", correct: false },
      { text: "Pilate", correct: false },
      { text: "Herod", correct: false },
    ],
    explanation:
      "Caiaphas was the Jewish high priest at the time of Jesus' arrest and crucifixion, and he played a key role in the prosecution of Jesus. Acts 5:17-18 states, 'Then the high priest rose up, and with him all who were of the council of the Pharisees, and filled with jealousy, they arrested the apostles and put them in public custody.'",
  },
  {
    question:
      "What was the name of the disciple who denied Jesus three times before the rooster crowed?",
    answers: [
      { text: "Peter", correct: true },
      { text: "James", correct: false },
      { text: "John", correct: false },
      { text: "Judas", correct: false },
    ],
    explanation:
      "Peter, one of Jesus' closest disciples, denied knowing Jesus three times before a rooster crowed, as Jesus had predicted. Mark 14:72 states, 'And immediately a rooster crowed. And Peter remembered the word that Jesus had said to him: 'Before the rooster crows twice, you will deny me three times.' And he broke down and wept.'",
  },
  {
    question: "What was the name of the first person to be healed by Jesus?",
    answers: [
      { text: "Peter's mother-in-law", correct: true },
      { text: "The man with leprosy", correct: false },
      { text: "The paralytic man lowered through the roof", correct: false },
      { text: "The blind man who could see", correct: false },
    ],
    explanation:
      "Jesus' first recorded miracle was healing Peter's mother-in-law, who was sick with a fever. Luke 4:38-39 states, 'When Jesus left the synagogue, he went to Simon's house. And Simon's mother-in-law was ill with a fever, and they urged him to speak to her. And he stood over her and rebuked the fever, and it left her, and immediately she rose and began to serve them.'",
  },
  {
    question: "What was the name of the city where Jesus was resurrected?",
    answers: [
      { text: "Jerusalem", correct: true },
      { text: "Bethlehem", correct: false },
      { text: "Nazareth", correct: false },
      { text: "Capernaum", correct: false },
    ],
    explanation:
      "According to the Gospels, Jesus rose from the dead in Jerusalem, where he had been crucified just a few days earlier. Matthew 28:6 states, 'The angel said to the women, 'Do not be afraid, for he is risen. As he said, he is alive. Come, see the place where the Lord lay.'",
  },
  {
    question:
      "What was the name of the book of the Bible that tells the story of creation?",
    answers: [
      { text: "Genesis", correct: true },
      { text: "Exodus", correct: false },
      { text: "Leviticus", correct: false },
      { text: "Numbers", correct: false },
    ],
    explanation:
      "The book of Genesis is the first book of the Old Testament and the Bible, and it recounts the story of creation, the fall of man, and the early history of humanity. Genesis 1:1 states, 'In the beginning, God created the heavens and the earth.'",
  },
  {
    question:
      "What was the name of the language that the New Testament was written in?",
    answers: [
      { text: "Greek", correct: true },
      { text: "Aramaic", correct: false },
      { text: "Hebrew", correct: false },
      { text: "Latin", correct: false },
    ],
    explanation:
      "The New Testament was originally written in Koine Greek, a common dialect of Greek spoken throughout the Mediterranean region during the time of the early.",
  },
  {
    question: "What are the four horsemen of the Apocalypse known for?",
    answers: [
      { text: "Representing conquest, war, famine, and death", correct: true },
      {
        text: "Spreading the gospel to the four corners of the earth",
        correct: false,
      },
      {
        text: "Being the four evangelists who wrote the gospels",
        correct: false,
      },
      {
        text: "Being angels who guard the four corners of heaven",
        correct: false,
      },
    ],
    explanation:
      "The four horsemen of the Apocalypse, described in Revelation 6:1-8, symbolize different forms of judgment or tribulation. The first horseman rides a white horse and conquers with a bow; the second rides a red horse and brings war; the third rides a black horse and signifies famine; and the fourth rides a pale horse and represents death.",
  },
  {
    question:
      "What is the name of the fruit that Samson lost his strength after Delilah shaved his head?",
    answers: [
      { text: "Grape", correct: false },
      { text: "Fig", correct: false },
      { text: "Pomegranate", correct: true },
    ],
    explanation:
      "Judges 16:17 tells us that Samson's strength came from his hair, a vow made by his parents to God. After Delilah convinces him to reveal the secret of his strength, she has him shave his head, rendering him powerless.",
  },
  {
    question:
      "What is the name of the disciple who replaced Judas Iscariot after his betrayal?",
    answers: [
      { text: "Matthias", correct: true },
      { text: "John", correct: false },
      { text: "Peter", correct: false },
      { text: "Matthew", correct: false },
    ],
    explanation:
      "Acts 1:15-26 describes the apostles praying to choose a replacement for Judas. Matthias is chosen by drawing lots.",
  },
  {
    question:
      "What is the name of the city where Saul was converted to Christianity and became known as Paul?",
    answers: [
      { text: "Damascus", correct: true },
      { text: "Jerusalem", correct: false },
      { text: "Caesarea", correct: false },
      { text: "Antioch", correct: false },
    ],
    explanation:
      "Acts 9:1-20 recounts Saul's journey to Damascus to persecute Christians. On the road, he encounters a blinding light and the voice of Jesus, leading to his conversion and the start of his ministry as Paul.",
  },
  {
    question:
      "What is the name of the proverb that says, 'A soft answer turns away wrath, but a harsh word stirs up anger'?",
    answers: [
      { text: "Proverbs 15:1", correct: true },
      { text: "Psalms 23:1", correct: false },
      { text: "Ecclesiastes 3:1", correct: false },
      { text: "Matthew 7:1", correct: false },
    ],
    explanation:
      "Proverbs 15:1 is one of many verses in the book of Proverbs offering wisdom for living. Here, it highlights the power of gentle words to de-escalate conflict.",
  },
  {
    question:
      "'Love your enemies and pray for those who persecute you.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Matthew 5:44", correct: true },
      { text: "Mark 12:31", correct: false },
      { text: "Luke 6:27", correct: false },
      { text: "1 John 4:8", correct: false },
    ],
    explanation:
      "This verse is found in the Sermon on the Mount, a famous teaching by Jesus in Matthew 5-7. It emphasizes the importance of love and forgiveness, even towards those who treat us poorly.",
  },
  {
    question:
      "'Come to me, all who labor and are heavy laden, and I will give you rest.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Matthew 11:28", correct: true },
      { text: "Mark 6:31", correct: false },
      { text: "Luke 9:11", correct: false },
      { text: "John 14:6", correct: false },
    ],
    explanation:
      "This invitation to find rest in Jesus is often used as a message of hope and comfort for those facing burdens and struggles.",
  },
  {
    question:
      "'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "John 3:16", correct: true },
      { text: "Romans 8:28", correct: false },
      { text: "1 Corinthians 13:4-7", correct: false },
      { text: "Ephesians 2:8-9", correct: false },
    ],
    explanation:
      "This verse, often referred to as the 'Gospel in a nutshell,' summarizes the core message of Christianity: God's love for humanity and the path to salvation through faith in Jesus Christ.",
  },
  {
    question:
      "'You shall love the Lord your God with all your heart and with all your soul and with all your mind.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Matthew 22:37", correct: true },
      { text: "Mark 12:30", correct: false },
      { text: "Luke 10:27", correct: false },
      { text: "1 John 4:21", correct: false },
    ],
    explanation:
      "This verse, known as the 'Shema' is considered one of the most important commandments in Judaism and Christianity, emphasizing the centrality of loving God.",
  },
  {
    question:
      "'Do not worry about your life, what you will eat or what you will wear. For life is more than food, and the body more than clothing.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Matthew 6:25", correct: true },
      { text: "Luke 12:22", correct: false },
      { text: "Philippians 4:6-7", correct: false },
      { text: "1 Peter 5:7", correct: false },
    ],
    explanation:
      "This verse from Jesus' Sermon on the Mount encourages us to trust in God's provision and not let anxiety about material needs consume us.",
  },
  {
    question:
      "'The Lord is my shepherd, I shall not want.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Psalm 23:1", correct: true },
      { text: "Isaiah 40:11", correct: false },
      { text: "John 10:11", correct: false },
      { text: "Hebrews 13:5-6", correct: false },
    ],
    explanation:
      "This beloved psalm expresses trust in God's care and provision, often used as a source of comfort and peace.",
  },
  {
    question:
      "'All things work together for the good of those who love God, who have been called according to his purpose.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Romans 8:28", correct: true },
      { text: "1 Corinthians 13:4-7", correct: false },
      { text: "Ephesians 2:8-9", correct: false },
      { text: "James 1:2-4", correct: false },
    ],
    explanation:
      "This verse from Paul's letter to the Romans offers encouragement and hope in the midst of trials, emphasizing God's ultimate plan for his people.",
  },
  {
    question:
      "'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Romans 1:16", correct: true },
      { text: "Galatians 3:28", correct: false },
      { text: "Ephesians 2:8-9", correct: false },
      { text: "Colossians 1:20", correct: false },
    ],
    explanation:
      "Paul boldly proclaims the power of the gospel to save in this verse from Romans, emphasizing its universal reach and transformative impact.",
  },
  {
    question:
      "'Let no one boast in himself. Thus says the Lord: 'Let not the wise man boast in his wisdom, let not the mighty man boast in his might, let not the rich man boast in his riches.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Jeremiah 9:23-24", correct: true },
      { text: "1 Corinthians 1:29-31", correct: false },
      { text: "James 4:6", correct: false },
      { text: "1 Peter 5:5", correct: false },
    ],
    explanation:
      "This passage from Jeremiah reminds us that true wisdom, strength, and wealth come from God, not from human accomplishments.",
  },
  {
    question:
      "'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, gentleness, self-control.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Galatians 5:22-23", correct: true },
      { text: "Ephesians 4:2-3", correct: false },
      { text: "Philippians 4:8", correct: false },
      { text: "1 Timothy 3:12", correct: false },
    ],
    explanation:
      "This verse from Paul's letter to the Galatians highlights the positive attributes that the Holy Spirit produces in believers.",
  },
  {
    question:
      "'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Matthew 7:7", correct: true },
      { text: "Mark 11:24", correct: false },
      { text: "Luke 11:9", correct: false },
      { text: "John 14:14", correct: false },
    ],
    explanation:
      "This verse, part of the Sermon on the Mount, encourages us to persistently ask God for our needs and to actively seek his will.",
  },
  {
    question:
      "'Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has no one to lift him up.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Ecclesiastes 4:9-10", correct: true },
      { text: "Proverbs 13:20", correct: false },
      { text: "Proverbs 18:24", correct: false },
      { text: "Proverbs 27:17", correct: false },
    ],
    explanation:
      "Ecclesiastes emphasizes the value of community and companionship in this passage.",
  },
  {
    question:
      "'There is a time for everything, and a season for every activity under the heavens:' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Ecclesiastes 3:1", correct: true },
      { text: "Job 1:14", correct: false },
      { text: "Psalms 37:1", correct: false },
      { text: "Isaiah 40:8", correct: false },
    ],
    explanation:
      "This verse introduces the book of Ecclesiastes, which explores themes of life's fleeting nature and the importance of finding meaning within its cycles.",
  },
  {
    question:
      "'Whoever trusts in his riches will fall, but the righteous will flourish like a green leaf.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Proverbs 11:28", correct: true },
      { text: "Job 31:24-25", correct: false },
      { text: "Psalm 37:25", correct: false },
      { text: "Matthew 6:19-21", correct: false },
    ],
    explanation:
      "Proverbs 11:28 warns against trusting in wealth, emphasizing the importance of righteousness before God.",
  },
  {
    question:
      "'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Romans 6:23", correct: true },
      { text: "John 3:16", correct: false },
      { text: "1 Corinthians 15:55", correct: false },
      { text: "Revelation 20:14", correct: false },
    ],
    explanation:
      "Romans 6:23 presents the consequence of sin (death) alongside the hope of eternal life offered through Christ.",
  },
  {
    question:
      "'For where two or three gather in my name, there am I with them.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Matthew 18:20", correct: true },
      { text: "Mark 4:20", correct: false },
      { text: "Luke 10:8", correct: false },
      { text: "Acts 2:44", correct: false },
    ],
    explanation:
      "This verse from Matthew emphasizes the importance of Christian community and Jesus' presence when believers gather in his name.",
  },
  {
    question:
      "'Blessed are the meek, for they will inherit the earth.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Matthew 5:5", correct: true },
      { text: "Luke 6:20", correct: false },
      { text: "James 1:20", correct: false },
      { text: "1 Peter 3:4", correct: false },
    ],
    explanation:
      "This Beatitude from the Sermon on the Mount highlights the value of humility and meekness before God.",
  },
  {
    question:
      "'He who dwells in the shelter of the Most High will rest in the shadow of the Almighty.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Psalm 91:1", correct: true },
      { text: "Deuteronomy 33:27", correct: false },
      { text: "Isaiah 40:28", correct: false },
      { text: "Revelation 21:3", correct: false },
    ],
    explanation:
      "This comforting psalm describes the protection and security found in God's presence.",
  },
  {
    question:
      "'Trust in the Lord with all your heart, and do not lean on your own understanding.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Proverbs 3:5", correct: true },
      { text: "Job 42:5", correct: false },
      { text: "Jeremiah 17:7", correct: false },
      { text: "Hebrews 11:6", correct: false },
    ],
    explanation:
      "Proverbs 3:5 encourages us to rely on God's wisdom and guidance rather than our own limited understanding.",
  },
  {
    question:
      "'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.' - What is the book, chapter, and verse of this verse?",
    answers: [
      { text: "Jeremiah 29:11", correct: true },
      { text: "Isaiah 55:8-9", correct: false },
      { text: "Romans 8:28", correct: false },
      { text: "Revelation 21:5", correct: false },
    ],
    explanation:
      "This verse from Jeremiah offers a message of hope and God's good plans for his people.",
  },
  {
    question:
      "'The Lord is my shepherd, I shall not want.' - What book of the Bible is this verse from?",
    answers: [
      { text: "Psalms", correct: true },
      { text: "Proverbs", correct: false },
      { text: "Isaiah", correct: false },
      { text: "John", correct: false },
    ],
    explanation:
      "Psalm 23 is a beloved psalm expressing trust in God's care and provision.",
  },
  {
    question:
      "'A new commandment I give to you: Love one another. As I have loved you, so you must love one another.' - What Gospel book is this verse from?",
    answers: [
      { text: "John", correct: true },
      { text: "Matthew", correct: false },
      { text: "Luke", correct: false },
      { text: "Mark", correct: false },
    ],
    explanation:
      "John 13:34 is a central teaching of Jesus about love within the Christian community.",
  },
  {
    question:
      "'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.' - What letter of the Apostle Paul is this verse from?",
    answers: [
      { text: "Romans", correct: true },
      { text: " Corinthians", correct: false },
      { text: "Ephesians", correct: false },
      { text: "Hebrews", correct: false },
    ],
    explanation:
      "Romans 6:23 presents the consequence of sin (death) alongside the hope of eternal life offered through Christ.",
  },
  {
    question:
      "'Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these.' - What Gospel book is this verse from?",
    answers: [
      { text: "Mark", correct: true },
      { text: "Matthew", correct: false },
      { text: "Luke", correct: false },
      { text: "John", correct: false },
    ],
    explanation:
      "Mark 10:14 (or parallels in Matthew and Luke) emphasizes Jesus' welcome of children.",
  },
  {
    question:
      "'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.' - What book of wisdom literature is this verse from?",
    answers: [
      { text: "Proverbs", correct: true },
      { text: "Job", correct: false },
      { text: "Ecclesiastes", correct: false },
      { text: "Song of Solomon", correct: false },
    ],
    explanation:
      "Proverbs 1:7 highlights the importance of reverence for God as the foundation of knowledge.",
  },
  {
    question:
      "'No one has ever seen God, but the only begotten Son, who is in the bosom of the Father, he has made him known.' - What book of the New Testament is this verse from?",
    answers: [
      { text: "John", correct: true },
      { text: "Romans", correct: false },
      { text: "Hebrews", correct: false },
      { text: "1 John", correct: false },
    ],
    explanation:
      "John 1:18 emphasizes Jesus' unique role in revealing God to humanity.",
  },
  {
    question:
      "'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' - What Gospel book is this verse from?",
    answers: [
      { text: "John", correct: true },
      { text: "Matthew", correct: false },
      { text: "Luke", correct: false },
      { text: "Mark", correct: false },
    ],
    explanation:
      "John 3:16, often called the 'Gospel in a nutshell,' summarizes God's love and the path to salvation through Jesus.",
  },
  {
    question:
      "'Faith is the assurance of things hoped for, the conviction of things not seen.' - What letter of the Apostle Paul is this verse from?",
    answers: [
      { text: "Hebrews", correct: true },
      { text: "Romans", correct: false },
      { text: "Ephesians", correct: false },
      { text: "Philippians", correct: false },
    ],
    explanation:
      "Hebrews 11:1 defines faith as a core concept in the Christian life.",
  },
  {
    question:
      "'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.' - What Gospel book is this verse from?",
    answers: [
      { text: "Matthew", correct: true },
      { text: "Mark", correct: false },
      { text: "Luke", correct: false },
      { text: "John", correct: false },
    ],
    explanation:
      "Matthew 28:19-20, also known as the Great Commission, is Jesus' final command to his disciples before his ascension.",
  },
  {
    question:
      "'I have fought the good fight, I have finished the race, I have kept the faith.' - What letter of the Apostle Paul is this verse from?",
    answers: [
      { text: "2 Timothy", correct: true },
      { text: "1 Corinthians", correct: false },
      { text: "Philippians", correct: false },
      { text: "Titus", correct: false },
    ],
    explanation:
      "2 Timothy 4:7 expresses Paul's reflection on his life and ministry.",
  },
  {
    question:
      "'Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has no one to lift him up.' - What Old Testament book is this verse from?",
    answers: [
      { text: "Ecclesiastes", correct: true },
      { text: "Proverbs", correct: false },
      { text: "Job", correct: false },
      { text: "Genesis", correct: false },
    ],
    explanation:
      "Ecclesiastes 4:9-10 emphasizes the value of companionship and working together.",
  },
  {
    question:
      "'The heart is deceitful above all things and desperately wicked; who can understand it?' - What prophetic book is this verse from?",
    answers: [
      { text: "Jeremiah", correct: true },
      { text: "Isaiah", correct: false },
      { text: "Ezekiel", correct: false },
      { text: "Daniel", correct: false },
    ],
    explanation:
      "Jeremiah 17:9 describes the complexity and sinfulness of the human heart.",
  },
  {
    question:
      "'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.' - In which Gospel does Jesus describe these acts of compassion?",
    answers: [
      { text: "Matthew", correct: true },
      { text: "Mark", correct: false },
      { text: "Luke", correct: false },
      { text: "John", correct: false },
    ],
    explanation:
      "Matthew 25:35-36 depicts Jesus identifying himself with those in need.",
  },
  {
    question:
      "'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor the other, it does not seek its own, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.' - What letter of the Apostle Paul describes these characteristics of love?",
    answers: [
      { text: "1 Corinthians", correct: true },
      { text: "Ephesians", correct: false },
      { text: "Philippians", correct: false },
      { text: "1 Thessalonians", correct: false },
    ],
    explanation:
      "1 Corinthians 13:4-7 is a beloved passage known as the 'Love Chapter.'",
  },
  {
    question:
      "'Vanity of vanities, says the Preacher, vanity of vanities. All is vanity.' - What book of the Old Testament opens with this famous statement about the fleeting nature of life?",
    answers: [
      { text: "Ecclesiastes", correct: true },
      { text: "Psalms", correct: false },
      { text: "Proverbs", correct: false },
      { text: "Job", correct: false },
    ],
    explanation:
      "Ecclesiastes 1:2 introduces the book's theme of searching for meaning in a seemingly meaningless world.",
  },
  {
    question:
      "'Whoever digs a pit will fall into it; whoever removes a stone will be struck by it.' - What book of wisdom literature warns of the dangers of evil actions?",
    answers: [
      { text: "Proverbs", correct: true },
      { text: "Job", correct: false },
      { text: "Ecclesiastes", correct: false },
      { text: "Song of Solomon", correct: false },
    ],
    explanation:
      "Proverbs 26:27 highlights the principle that negative actions can have negative consequences for the one who performs them.",
  },
  {
    question:
      "'The Lord is my light and my salvation; whom shall I fear? The Lord is the strength of my life; of whom shall I be afraid?' - What book of Psalms expresses this declaration of trust in God?",
    answers: [
      { text: "Psalms", correct: true },
      { text: "Isaiah", correct: false },
      { text: "Jeremiah", correct: false },
      { text: "Daniel", correct: false },
    ],
    explanation:
      "Psalm 27:1 is a powerful declaration of faith and dependence on God's protection.",
  },
  {
    question:
      "'For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and spirit, of joints and marrow, and discerning the thoughts and intentions of the heart.' - What letter of the Apostle Paul emphasizes the power of God's word?",
    answers: [
      { text: "Hebrews", correct: true },
      { text: "Romans", correct: false },
      { text: "Ephesians", correct: false },
      { text: "1 Corinthians", correct: false },
    ],
    explanation:
      "Hebrews 4:12 describes the Bible's power to penetrate hearts and reveal our true thoughts and motives.",
  },
  {
    question:
      "'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.' - What is the name for Jesus' final command to his disciples before his ascension?",
    answers: [
      { text: "The Great Commission", correct: true },
      { text: "The Farewell Discourse", correct: false },
      { text: "The Sermon on the Mount", correct: false },
      { text: "The Parable of the Good Samaritan", correct: false },
    ],
    explanation:
      "Matthew 28:19-20, known as the Great Commission, is Jesus' final instruction to his disciples to spread his teachings.",
  },
  {
    question:
      "'There is a time for everything, and a season for every activity under the heavens:' - What book of the Old Testament explores themes of life's fleeting nature and the importance of finding meaning?",
    answers: [
      { text: "Ecclesiastes", correct: true },
      { text: "Psalms", correct: false },
      { text: "Proverbs", correct: false },
      { text: "Job", correct: false },
    ],
    explanation:
      "Ecclesiastes 3:1 introduces the book's central theme of impermanence and the search for significance within the cycles of life.",
  },
  {
    question:
      "'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.' - What book of wisdom literature emphasizes the importance of reverence for God?",
    answers: [
      { text: "Proverbs", correct: true },
      { text: "Job", correct: false },
      { text: "Ecclesiastes", correct: false },
      { text: "Song of Solomon", correct: false },
    ],
    explanation:
      "Proverbs 1:7 highlights the importance of reverence for God as the foundation of knowledge.",
  },
  {
    question:
      "'For by grace you have been saved through faith, and that not of yourselves, it is the gift of God, not of works, so that no one can boast.' - What letter of the Apostle Paul emphasizes salvation by grace through faith?",
    answers: [
      { text: "Ephesians", correct: true },
      { text: "Romans", correct: false },
      { text: "Philippians", correct: false },
      { text: "1 Thessalonians", correct: false },
    ],
    explanation:
      "Ephesians 2:8-9 emphasizes that salvation is a gift from God received through faith, not by our own efforts.",
  },
  {
    question:
      "'She opens her mouth with wisdom, and on her tongue is the teaching of kindness.' - What book of wisdom literature praises the virtuous woman?",
    answers: [
      { text: "Proverbs", correct: true },
      { text: "Job", correct: false },
      { text: "Ruth", correct: false },
      { text: "Song of Solomon", correct: false },
    ],
    explanation: "Proverbs 31:26 describes the ideal woman as wise and kind.",
  },
  {
    question:
      "'Love the Lord your God with all your heart and with all your soul and with all your mind.' - What is the first and greatest commandment according to Jesus?",
    answers: [
      { text: "The Great Commandment", correct: true },
      { text: "The Golden Rule", correct: false },
      { text: "The Beatitudes", correct: false },
      { text: "The Lord's Prayer", correct: false },
    ],
    explanation:
      "Deuteronomy 6:5, quoted by Jesus in Mark 12:30, identifies loving God as the most important commandment.",
  },
  {
    question:
      "'He who walks with the wise becomes wise, but the companion of fools will suffer harm.' - What book of wisdom literature emphasizes the importance of choosing good companions?",
    answers: [
      { text: "Proverbs", correct: true },
      { text: "Ecclesiastes", correct: false },
      { text: "Psalms", correct: false },

      { text: "Job", correct: false },
    ],
    explanation:
      "Proverbs 13:20 highlights the influence of our companions on our own character.",
  },
  {
    question:
      "'No one has ever seen God; but if we love one another, God lives in us, and his love is perfected in us.' - What letter of the Apostle John emphasizes the connection between love for God and love for others?",
    answers: [
      { text: "1 John", correct: true },
      { text: "John", correct: false },
      { text: "Romans", correct: false },
      { text: "Hebrews", correct: false },
    ],
    explanation:
      "1 John 4:12 emphasizes that love for God is demonstrated through love for others.",
  },
  {
    question:
      "'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.' - What letter of the Apostle Paul highlights the consequence of sin and the hope of salvation?",
    answers: [
      { text: "Romans", correct: true },
      { text: " Corinthians", correct: false },
      { text: "Ephesians", correct: false },
      { text: "Hebrews", correct: false },
    ],
    explanation:
      "Romans 6:23 presents the consequence of sin (death) alongside the hope of eternal life offered through Christ.",
  },
];
export default questions;