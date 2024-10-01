import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Stream Widgets | Home",
  description: "Stream Widgets",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark bg-background">{children}</body>
    </html>
  );
}
