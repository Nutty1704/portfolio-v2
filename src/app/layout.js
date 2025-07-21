import "./globals.css";


export const metadata = {
  title: "Abhjit Upadhyay",
  description: "Full stack enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
