import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata ={
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
