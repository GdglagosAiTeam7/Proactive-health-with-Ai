import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Proactive Health With AI",
  description:
    "A web app that detects and advices on skin related issues using Gemini API",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
