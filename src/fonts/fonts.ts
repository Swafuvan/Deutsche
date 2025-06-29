// app/fonts.ts (or src/fonts.ts)
import { Volkhov, Poppins } from 'next/font/google'

export const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-volkhov',
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})
