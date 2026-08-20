import Link from "next/link";
import "./globals.css";
import {Albert_Sans,Montserrat_Alternates} from "next/font/google"

const albertSans= Albert_Sans({
  subsets: ["latin"],
  display: "swap",
})
const monsterratAlternates= Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight:["100","200","300","400","500","600","700","800","900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${albertSans.className} ${monsterratAlternates.variable}`}>
        <header>
          <nav className="navbar">
            <div>
              <Link className="anchor" href="/"><h2>3D-MASTER</h2></Link>
            </div>
            <div className="link">
              <Link className="anchor" href="/models">3D MODELS</Link>
              <Link className="anchor" href="/about">ABOUT</Link>
            </div>
          </nav>
        </header>
        {children}

        <footer>
          Footer content here
        </footer>
      </body>
    </html>
  );
}
