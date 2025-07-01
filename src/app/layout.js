import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})
export const metadata = {
  title: "Dr. Serena Blake, PsyD",
  description: "Licensed Clinical Psychologist in Los Angeles, CA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
