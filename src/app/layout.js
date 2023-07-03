import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tic Tac Toe by AndyPendragon",
  description:
    "My first react (next.js) app - AndyPendragon (Andy Nekena RATOETRARIVO)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
