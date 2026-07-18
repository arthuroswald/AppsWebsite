import type { Metadata } from "next";

import { LanguageGatewayScreen } from "@/screens/language-gateway/language-gateway-screen";

export const metadata: Metadata = {
  title: "Apps",
  description: "Choose English or French to discover the available apps.",
  robots: { index: false, follow: true },
};

export default function LanguageGatewayPage() {
  return <LanguageGatewayScreen />;
}
