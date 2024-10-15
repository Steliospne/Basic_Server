const characters = [
  {
    name: "Nagato (Pain)",
    image: "/pain.webp",
    affiliation: "Akatsuki",
    quotes: [
      "Peace… I don't know how to get there… but… but someday I'll break the curse. If there's such a thing as peace, I will find it!",
      "We are both ordinary men, driven to seek vengeance in the name of justice. However, if there is justice in vengeance, then justice will breed only more vengeance. And trigger a cycle of hatred.",
      "Even a foolish child can grow up in a right way, when he learns what pain is. Knowing pain controls ones thoughts and decisions.",
      "To create short these periods of peace through pain that interrupt the endless cycle of hatred… that is my dream.",
    ],
    backstory: `Nagato grew up in Amegakure with his parents during the Second Shinobi World War. Unbeknownst to him, Madara Uchiha implanted the powerful Rinnegan in Nagato's eyes. During the war, his parents were killed by Konoha shinobi, triggering Nagato's first use of the Rinnegan to avenge them. Left orphaned, Nagato wandered until he met fellow orphans Yahiko and Konan, and together they survived by any means necessary, dreaming of a world without war.

                The trio sought out training from Jiraiya, who initially hesitated but later agreed after recognizing the potential of Nagato's Rinnegan. Under Jiraiya's guidance, they honed their ninja skills and eventually founded the Akatsuki, with Yahiko as leader, advocating for peace. Their growing influence threatened Amegakure's leader, Hanzō, who ambushed them, leading to Yahiko's death. This event deeply scarred Nagato, leading him to adopt the name "Pain" and believe that only through suffering could the world achieve peace.

                Nagato took control of Amegakure, eliminating Hanzō and his supporters. With the Six Paths of Pain — a technique using six reanimated bodies, including Yahiko's — Nagato transformed Akatsuki into a powerful mercenary organization, driven by his belief that true peace could only come through pain and devastation.`,
  },
];

export const getName = (id) => {
  return characters[id].name;
};

export const getCharacterImg = (id) => {
  return characters[id].image;
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
