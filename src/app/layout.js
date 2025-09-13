import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Millenium Investment LLC",
  description: "Millenium Investment LLC",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/icon1.png" },
    { rel: "icon", url: "/icon1.png", type: "image/png" }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <Header />
        <Toaster />
        {children}
        <Footer />
        <Logo />
      </body>
    </html>
  );
}
