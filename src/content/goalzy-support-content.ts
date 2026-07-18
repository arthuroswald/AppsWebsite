import type { Localized } from "./content.types";
import type { GoalzySupportCopy } from "./goalzy-content.types";

export const supportEmail = "o6art7@gmail.com";

export const goalzySupportContent = {
  en: {
    title: "Goalzy Support",
    description: "Get help with Goalzy or contact its developer.",
    eyebrow: "Goalzy Support",
    heading: "How can I help?",
    introduction: "If Goalzy is not behaving as expected, send an email and describe what happened. You will contact the developer directly.",
    emailLabel: "Support email",
    emailAction: "Email Goalzy support",
    detailsHeading: "What to include",
    detailsIntroduction: "These details make an issue easier to reproduce:",
    details: ["Goalzy version", "Device model", "iOS or Android version", "Steps leading to the issue"],
    faqHeading: "Frequently asked questions",
    faq: [
      { title: "How many choices can I add?", description: "Goalzy supports between 2 and 8 filled choices for each decision." },
      { title: "Can I change an emoji?", description: "Yes. Tap the colored emoji circle next to a completed choice." },
      { title: "What happens when a timed match ends in a tie?", description: "Only the tied leaders remain, and the next goal decides the winner." },
      { title: "Can I turn off sound or vibrations?", description: "Yes. Sound and vibrations can be changed independently in Settings." },
      { title: "Which languages are available?", description: "Goalzy is fully available in English and French." },
    ],
  },
  fr: {
    title: "Assistance Goalzy",
    description: "Obtenez de l’aide sur Goalzy ou contactez son développeur.",
    eyebrow: "Assistance Goalzy",
    heading: "Comment puis-je vous aider ?",
    introduction: "Si Goalzy ne se comporte pas comme prévu, envoyez un e-mail en décrivant le problème. Vous contacterez directement le développeur.",
    emailLabel: "E-mail d’assistance",
    emailAction: "Écrire à l’assistance Goalzy",
    detailsHeading: "Informations utiles",
    detailsIntroduction: "Ces informations facilitent la reproduction du problème :",
    details: ["Version de Goalzy", "Modèle de l’appareil", "Version d’iOS ou d’Android", "Étapes menant au problème"],
    faqHeading: "Questions fréquentes",
    faq: [
      { title: "Combien de choix puis-je ajouter ?", description: "Goalzy accepte entre 2 et 8 choix remplis pour chaque décision." },
      { title: "Puis-je changer un emoji ?", description: "Oui. Touchez le cercle coloré avec l’emoji à côté d’un choix rempli." },
      { title: "Que se passe-t-il en cas d’égalité ?", description: "Seuls les premiers à égalité restent en jeu et le prochain but désigne le gagnant." },
      { title: "Puis-je couper le son ou les vibrations ?", description: "Oui. Le son et les vibrations se règlent séparément dans les réglages." },
      { title: "Quelles langues sont disponibles ?", description: "Goalzy est entièrement disponible en français et en anglais." },
    ],
  },
} as const satisfies Localized<GoalzySupportCopy>;

