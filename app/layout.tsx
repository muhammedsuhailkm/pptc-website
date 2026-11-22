import type { Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Next.js adds the width=device-width viewport meta tag automatically;
// this just tints the mobile browser UI to match the navy header.
export const viewport: Viewport = {
  themeColor: "#0b1d36",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@360;420;520;600&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
