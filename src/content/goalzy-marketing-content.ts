import type { Localized } from "./content.types";
import type { GoalzyMarketingCopy } from "./goalzy-content.types";

export const goalzyMarketingContent = {
  en: {
    title: "Goalzy — Turn choices into games",
    description: "Goalzy settles everyday choices through colorful, sports-inspired matches for 2 to 8 options.",
    eyebrow: "The game that decides for you",
    heading: "Some decisions need a match.",
    introduction: "Where should you eat? What should you watch? Who goes first? Goalzy turns everyday choices into lively sports-inspired games—and lets the action decide.",
    appStoreAction: "Download on the App Store",
    stepsHeading: "How it works",
    steps: [
      { title: "Add your choices", description: "Enter 2 to 8 options you want to settle." },
      { title: "Make them yours", description: "Choose a name, emoji, and any color for each option." },
      { title: "Pick a game mode", description: "Choose a quick goal, a target score, or a timed match." },
      { title: "Watch Goalzy decide", description: "Follow the arena and discover the winner." },
      { title: "Keep the result", description: "Share a colorful card or revisit the decision later in your history. Your choices stay on your device." },
    ],
    modesHeading: "Three ways to decide",
    modesIntroduction: "Every choice becomes a ball in the same playful rotating arena, with rules inspired by familiar sports.",
    modes: [
      { title: "Golden Goal", description: "The quickest option: the first choice to score wins." },
      { title: "Winning Score", description: "Race to 7 in tennis, 11 in table tennis, or 25 in volleyball." },
      { title: "Regulation Time", description: "Play basketball, handball, or football. A tie ends in Golden Goal." },
    ],
    sportsHeading: "Seven arena identities",
    sports: ["Golden Goal", "Football", "Basketball", "Handball", "Tennis", "Table tennis", "Volleyball"],
    benefits: ["Custom emojis and colors", "Shareable result cards", "Your decisions stay on your device", "No account required"],
    usefulLinksHeading: "Useful information",
  },
  fr: {
    title: "Goalzy — Le jeu qui décide pour vous",
    description: "Goalzy départage vos choix du quotidien dans des matchs sportifs hauts en couleur réunissant 2 à 8 options.",
    eyebrow: "Le jeu qui décide pour vous",
    heading: "Certains choix ont besoin d’un match.",
    introduction: "Où manger ? Que regarder ? Qui commence ? Goalzy transforme vos choix du quotidien en jeux sportifs animés et laisse le match trancher.",
    appStoreAction: "Télécharger dans l’App Store",
    stepsHeading: "Comment ça marche ?",
    steps: [
      { title: "Ajoutez vos choix", description: "Saisissez de 2 à 8 options à départager." },
      { title: "Personnalisez-les", description: "Choisissez le nom, l’emoji et la couleur de chaque option." },
      { title: "Choisissez un mode", description: "Optez pour un but rapide, un score cible ou un match chronométré." },
      { title: "Regardez Goalzy trancher", description: "Suivez l’arène et découvrez le gagnant." },
      { title: "Gardez le résultat", description: "Partagez une carte colorée ou retrouvez la décision plus tard dans votre historique. Vos choix restent sur votre appareil." },
    ],
    modesHeading: "Trois façons de décider",
    modesIntroduction: "Chaque choix devient une balle dans la même arène tournante et ludique, avec des règles inspirées de sports familiers.",
    modes: [
      { title: "But en or", description: "L’option la plus rapide : le premier choix qui marque gagne." },
      { title: "Score gagnant", description: "Atteignez 7 au tennis, 11 au ping-pong ou 25 au volley." },
      { title: "Temps réglementaire", description: "Jouez au basket, au handball ou au football. Une égalité se termine en but en or." },
    ],
    sportsHeading: "Sept identités d’arène",
    sports: ["But en or", "Football", "Basket", "Handball", "Tennis", "Ping-pong", "Volley"],
    benefits: ["Emojis et couleurs personnalisables", "Résultats prêts à partager", "Vos décisions restent sur votre appareil", "Aucun compte requis"],
    usefulLinksHeading: "Informations utiles",
  },
} as const satisfies Localized<GoalzyMarketingCopy>;
