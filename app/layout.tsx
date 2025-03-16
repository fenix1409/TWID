import { Inter } from "next/font/google"
import "./globals.css"
import ReactQueryProvider from "@/query/QueryProvider"
import Header from "@/components/sections/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], // Inter 400 and 700
})

/* Manually load Metal 400 (if not available on Google Fonts) */
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description" />
        <title>TWID</title>
        {/* Manually add Metal font */}
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