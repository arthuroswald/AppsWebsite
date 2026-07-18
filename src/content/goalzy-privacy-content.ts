import type { Localized } from "./content.types";
import type { GoalzyPrivacyCopy } from "./goalzy-content.types";
import { supportEmail } from "./goalzy-support-content";

export const goalzyPrivacyContent = {
  en: {
    title: "Goalzy Privacy Policy",
    description: "Learn how Goalzy handles choices, preferences, and personal data.",
    eyebrow: "Goalzy Privacy",
    heading: "Your choices stay yours.",
    introduction: "Goalzy is designed to work without an account, advertising, analytics, or personal-data collection.",
    updatedLabel: "Last updated",
    updatedDate: "July 18, 2026",
    sections: [
      {
        title: "Information Goalzy collects",
        paragraphs: [
          "Goalzy does not collect, sell, share, or transmit personal data. It does not use analytics, advertising, tracking technologies, or third-party accounts.",
          "The names and emojis you enter are used only to run the current decision on your device. They are not sent to the developer or to an external service.",
        ],
      },
      {
        title: "Information stored on your device",
        paragraphs: [
          "Goalzy stores your selected language and your sound and vibration preferences locally on your device. This functional storage lets the app remember your settings.",
          "Your latest choices may remain available while the app is running so you can start a new decision. Goalzy provides a reset action to clear them.",
        ],
      },
      {
        title: "Permissions and device features",
        paragraphs: ["Goalzy may use audio output and supported haptic features to provide match feedback. It does not request microphone access and does not use these features to collect information."],
      },
      {
        title: "This website",
        paragraphs: [
          "This website does not use analytics, advertising cookies, or a contact form. It stores only a functional language preference when you choose a language.",
          "The hosting provider may process limited technical request information, such as an IP address or browser details, as necessary to deliver and secure the website under its own terms.",
        ],
      },
      {
        title: "Children’s privacy",
        paragraphs: ["Goalzy does not knowingly collect personal information from children or any other users because it does not collect personal information through the app."],
      },
      {
        title: "Changes and contact",
        paragraphs: [`This policy may be updated if Goalzy’s data practices change. For questions, contact ${supportEmail}. Goalzy is published by Arthur Oswald.`],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité de Goalzy",
    description: "Découvrez comment Goalzy traite vos choix, préférences et données personnelles.",
    eyebrow: "Confidentialité Goalzy",
    heading: "Vos choix restent les vôtres.",
    introduction: "Goalzy est conçu pour fonctionner sans compte, publicité, analyse d’audience ni collecte de données personnelles.",
    updatedLabel: "Dernière mise à jour",
    updatedDate: "18 juillet 2026",
    sections: [
      {
        title: "Informations collectées par Goalzy",
        paragraphs: [
          "Goalzy ne collecte, ne vend, ne partage et ne transmet aucune donnée personnelle. L’app n’utilise ni analyse d’audience, ni publicité, ni technologie de suivi, ni compte tiers.",
          "Les noms et emojis saisis servent uniquement à exécuter la décision en cours sur votre appareil. Ils ne sont envoyés ni au développeur ni à un service externe.",
        ],
      },
      {
        title: "Informations stockées sur votre appareil",
        paragraphs: [
          "Goalzy enregistre localement la langue sélectionnée ainsi que les préférences de son et de vibrations. Ce stockage fonctionnel permet à l’app de mémoriser vos réglages.",
          "Vos derniers choix peuvent rester disponibles tant que l’app fonctionne afin de lancer une nouvelle décision. Une action de réinitialisation permet de les effacer.",
        ],
      },
      {
        title: "Autorisations et fonctions de l’appareil",
        paragraphs: ["Goalzy peut utiliser la sortie audio et les fonctions haptiques compatibles pour accompagner les matchs. L’app ne demande pas l’accès au microphone et n’utilise pas ces fonctions pour collecter des informations."],
      },
      {
        title: "Ce site internet",
        paragraphs: [
          "Ce site n’utilise ni analyse d’audience, ni cookie publicitaire, ni formulaire de contact. Il stocke uniquement une préférence fonctionnelle lorsque vous choisissez une langue.",
          "L’hébergeur peut traiter des informations techniques limitées, comme une adresse IP ou des détails sur le navigateur, lorsque cela est nécessaire pour fournir et sécuriser le site selon ses propres conditions.",
        ],
      },
      {
        title: "Confidentialité des enfants",
        paragraphs: ["Goalzy ne collecte sciemment aucune information personnelle concernant des enfants ou d’autres utilisateurs, car aucune information personnelle n’est collectée dans l’app."],
      },
      {
        title: "Modifications et contact",
        paragraphs: [`Cette politique pourra être mise à jour si les pratiques de Goalzy évoluent. Pour toute question, contactez ${supportEmail}. Goalzy est édité par Arthur Oswald.`],
      },
    ],
  },
} as const satisfies Localized<GoalzyPrivacyCopy>;
