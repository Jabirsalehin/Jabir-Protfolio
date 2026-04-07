import "./globals.css";

export const metadata = {
  title: "Jabir Salehin",
  description: "Premium Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
