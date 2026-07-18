import type { PropsWithChildren } from "react";

import "../globals.css";

export default function GatewayLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

