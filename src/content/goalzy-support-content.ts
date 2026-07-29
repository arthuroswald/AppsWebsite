import type { Localized } from "./content.types";
import type { GoalzySupportCopy } from "./goalzy-content.types";

export const supportEmail = "support@arthuroswald.fr";

export const goalzySupportContent = {
  en: {
    title: "Goalzy Support",
    description: "Get help with Goalzy or contact support.",
    eyebrow: "Goalzy Support",
    heading: "How can I help?",
    introduction: "If Goalzy is not behaving as expected, send an email and describe what happened. Your message will go directly to Goalzy support.",
    emailLabel: "Support email",
    emailAction: "Email Goalzy support",
    detailsHeading: "What to include",
    detailsIntroduction: "These details make an issue easier to reproduce:",
    details: ["Goalzy version", "Device model", "iOS or Android version", "Steps leading to the issue"],
    faqHeading: "Frequently asked questions",
    faq: [
      { title: "How many choices can I add?", description: "Goalzy supports between 2 and 8 filled choices for each decision." },
      { title: "Can I change an emoji or color?", description: "Yes. Tap a choice avatar to select another emoji, choose a Goalzy color, or create your own color." },
      { title: "How do I share a result?", description: "Tap the share button on a result, choose one of the three card backgrounds, then use your device’s share sheet." },
      { title: "Does Goalzy send my choices anywhere?", description: "No. Your choices and results stay on your device and are not sent to Goalzy’s developers or a server. They leave your device only when you choose to share a result through another app." },
      { title: "Where is my decision history stored?", description: "Completed decisions are stored only on your device. Open History to revisit, share, replay, delete one result, or clear the full history." },
      { title: "What happens when a timed match ends in a tie?", description: "Only the tied leaders remain, and the next goal decides the winner." },
      { title: "Can I turn off sound or vibrations?", description: "Yes. Sound and vibrations can be changed independently in Settings." },
      { title: "Which languages are available?", description: "Goalzy is fully available in English and French." },
    ],
  },
  fr: {
    title: "Assistance Goalzy",
    description: "Obtenez de l’aide sur Goalzy ou contactez l’assistance.",
    eyebrow: "Assistance Goalzy",
    heading: "Comment puis-je vous aider ?",
    introduction: "Si Goalzy ne se comporte pas comme prévu, envoyez un e-mail en décrivant le problème. Votre message sera directement adressé à l’assistance Goalzy.",
    emailLabel: "E-mail d’assistance",
    emailAction: "Écrire à l’assistance Goalzy",
    detailsHeading: "Informations utiles",
    detailsIntroduction: "Ces informations facilitent la reproduction du problème :",
    details: ["Version de Goalzy", "Modèle de l’appareil", "Version d’iOS ou d’Android", "Étapes menant au problème"],
    faqHeading: "Questions fréquentes",
    faq: [
      { title: "Combien de choix puis-je ajouter ?", description: "Goalzy accepte entre 2 et 8 choix remplis pour chaque décision." },
      { title: "Puis-je changer un emoji ou une couleur ?", description: "Oui. Touchez l’avatar d’un choix pour sélectionner un autre emoji, choisir une couleur Goalzy ou créer votre propre couleur." },
      { title: "Comment partager un résultat ?", description: "Touchez le bouton de partage sur un résultat, choisissez l’un des trois fonds de carte, puis utilisez le menu de partage de votre appareil." },
      { title: "Goalzy envoie-t-il mes choix quelque part ?", description: "Non. Vos choix et vos résultats restent sur votre appareil et ne sont envoyés ni aux développeurs de Goalzy ni à un serveur. Ils quittent votre appareil uniquement lorsque vous choisissez de partager un résultat avec une autre app." },
      { title: "Où mon historique est-il enregistré ?", description: "Les décisions terminées sont enregistrées uniquement sur votre appareil. Ouvrez l’historique pour consulter, partager, rejouer ou supprimer un résultat, ou pour effacer tout l’historique." },
      { title: "Que se passe-t-il en cas d’égalité ?", description: "Seuls les premiers à égalité restent en jeu et le prochain but désigne le gagnant." },
      { title: "Puis-je couper le son ou les vibrations ?", description: "Oui. Le son et les vibrations se règlent séparément dans les réglages." },
      { title: "Quelles langues sont disponibles ?", description: "Goalzy est entièrement disponible en français et en anglais." },
    ],
  },
} as const satisfies Localized<GoalzySupportCopy>;
