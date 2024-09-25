import "./globals.css";

export const metadata = {
  title: "Startup ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
