import { AboutUs } from "@/components/AboutUs";
import { ContentCarousel } from "@/components/ContentCarousel";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El porvenir",
  description: "Generate hardware software the porvenir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ContentCarousel />
        <Products />
        <Services />
        <AboutUs />
        <Form />
        <Footer />
      </body>
    </html>
  );
}
