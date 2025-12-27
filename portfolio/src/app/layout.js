import "./globals.css";
import { Inter, Great_Vibes } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-signature" });

export const metadata = {
  title: "fabiansportfolio",
  description: "Fabian Garcia's Portfolio Website",
  author: "Fabian Garcia",
  charSet: "utf-8",
  HandheldFriendly: "true",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
