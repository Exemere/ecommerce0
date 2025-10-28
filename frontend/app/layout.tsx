import "./global.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export const metadata = {
  title: "Electro E-Commerce",
  description: "Next.js E-commerce platform based on Electro template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
