import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio-Dilshan",
  description: "Generated by create next app",
  icons: {
    icon: '/fav.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="icon" 
          href="https://w7.pngwing.com/pngs/829/850/png-transparent-d-contemporary-art-museum-logo-exhibition-d-logo-text-trademark-art-exhibition-thumbnail.png" 
          type="image/png"
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}