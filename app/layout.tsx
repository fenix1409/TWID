import { Inter } from "next/font/google"
import "./globals.css"
import ReactQueryProvider from "@/query/QueryProvider"
import Header from "@/components/sections/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], // Inter 400 va 700
})

/* Metal 400-ni qo‘lda yuklaymiz (agar u Google Fonts-da mavjud bo‘lmasa) */
const metalFont = {
  variable: "--font-metal",
  style: `
    @font-face {
      font-family: 'Metal';
      src: url('/fonts/Metal.woff2') format('woff2'),
           url('/fonts/Metal.woff') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
  `,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Metal fontini qo‘lda qo‘shish */}
        <style dangerouslySetInnerHTML={{ __html: metalFont.style }} />
      </head>
      <body className={`${inter.variable} ${metalFont.variable}`}>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}