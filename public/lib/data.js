const characters = [
  {
    name: "Nagato (Pain)",
    image: "/pain.webp",
    affiliation: "Akatsuki",
    affil_logo: "/akatsuki_logo.jpeg",
    wiki: "https://naruto.fandom.com/wiki/Nagato",
    quotes: [
      "Peace… I don't know how to get there… but… but someday I'll break the curse. If there's such a thing as peace, I will find it!",
      "We are both ordinary men, driven to seek vengeance in the name of justice. However, if there is justice in vengeance, then justice will breed only more vengeance. And trigger a cycle of hatred.",
      "Even a foolish child can grow up in a right way, when he learns what pain is. Knowing pain controls ones thoughts and decisions.",
      "To create short these periods of peace through pain that interrupt the endless cycle of hatred… that is my dream.",
    ],
    backstory: `Nagato grew up in Amegakure with his parents during the Second Shinobi World War. Unbeknownst to him, Madara Uchiha implanted the powerful Rinnegan in Nagato's eyes. During the war, his parents were killed by Konoha shinobi, triggering Nagato's first use of the Rinnegan to avenge them. Left orphaned, Nagato wandered until he met fellow orphans Yahiko and Konan, and together they survived by any means necessary, dreaming of a world without war.\nThe trio sought out training from Jiraiya, who initially hesitated but later agreed after recognizing the potential of Nagato's Rinnegan. Under Jiraiya's guidance, they honed their ninja skills and eventually founded the Akatsuki, with Yahiko as leader, advocating for peace. Their growing influence threatened Amegakure's leader, Hanzō, who ambushed them, leading to Yahiko's death. This event deeply scarred Nagato, leading him to adopt the name "Pain" and believe that only through suffering could the world achieve peace.\nNagato took control of Amegakure, eliminating Hanzō and his supporters. With the Six Paths of Pain — a technique using six reanimated bodies, including Yahiko's — Nagato transformed Akatsuki into a powerful mercenary organization, driven by his belief that true peace could only come through pain and devastation.`,
  },
  {
    name: "Gaara",
    image: "/gaara.jpg",
    affiliation: "Allied Shinobi Forces",
    affil_logo: "/allied_shinobi_forces.png",
    wiki: "https://naruto.fandom.com/wiki/Gaara",
    quotes: [
      "You have the same eyes as I do… the eyes, filled with hatred and death, that long for strength… just like mine… your eyes tell me how badly you wish to kill the one who put you through the hell called loneliness.",
      "I think of you as a friend. I used to think 'friend' was just another word… Nothing more, nothing less. But when I met you, I realised what was important was the word's meaning.",
      "There are no enemies here because we've all suffered at Akatsuki's hand! So there is no Suna, no Iwa, no Konoha, no Kiri, and no Kumo! There are only shinobi!",
    ],
    backstory:
      "Gaara was born in Sunagakure as the third child of the Fourth Kazekage, Rasa. Due to budget cuts and a need for power, Rasa had the tailed beast Shukaku sealed inside Gaara before his birth, hoping he would become the village's ultimate weapon. Gaara’s mother, Karura, died during his birth, which led to Gaara being raised in isolation. His father taught him ninjutsu, and his maternal uncle, Yashamaru, took care of him.\nThough Gaara tried to connect with the villagers, they feared him because he was a jinchūriki, and he unintentionally hurt or killed people with his sand. Seeking to understand pain and love, Gaara looked to Yashamaru for answers, only to later discover Yashamaru's betrayal when he was ordered to assassinate him by Rasa. Yashamaru’s final words, claiming he hated Gaara and blaming him for Karura’s death, shattered Gaara.\nDevastated, Gaara embraced his loneliness and decided to love only himself, etching the kanji for 'love' on his forehead. Over time, he mastered his powers and became the deadly weapon his father envisioned, surviving numerous assassination attempts. This harsh upbringing shaped Gaara into a cold and ruthless figure feared by all, living only for himself.",
  },
];

export const getName = (id) => {
  return characters[id].name;
};

export const getCharacterImg = (id) => {
  return characters[id].image;
};

export const getAffiliation = (id) => {
  return characters[id].affiliation;
};

export const getAffilLogo = (id) => {
  return characters[id].affil_logo;
};

export const getWikiURL = (id) => {
  return characters[id].wiki;
};

export const getQuote = (id, number = 1) => {
  return characters[id].quotes[number];
};

export const getQuotes = (id) => {
  return characters[id].quotes;
};

export const getBackstory = (id) => {
  return characters[id].backstory;
};
