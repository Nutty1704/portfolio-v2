import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: "Abhjit Upadhyay",
  description: "Full stack enthusiast",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
