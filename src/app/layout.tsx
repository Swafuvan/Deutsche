import type { Metadata } from "next";
import { Geist, Geist_Mono, Volkhov, Poppins } from "next/font/google";
import "./globals.css";

const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-volkhov',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Jadoo - Travel, enjoy and live a new and full life",
  description:
    "Book your trip in minute, get full control for much longer. Discover the best destinations around the world.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${volkhov.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
