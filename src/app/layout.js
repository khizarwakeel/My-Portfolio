import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/components/footer/footer";
import AnimatedCursor from "@/components/animatedCursor/animatedCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stixor Technologies",
  description: "Developed by Khizar Wakeel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} cursorDesign bg-gradient-to-r from-[#7810e9] via-[#4e1daa] to-[#7810e9]`}
      >
        <div className="w-[95%] mx-auto">
          <div className="fixed pl-2">
            <AnimatedCursor />
            <Sidebar />
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}