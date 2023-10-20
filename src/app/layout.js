import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stixor Technologies",
  description: "Developed by Khizar Wakeel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-[#7810e9] via-[#4e1daa] to-[#7810e9]`}
      >
        <div className="max-w-[82rem] mx-auto">
          <div className="fixed">
            <Sidebar />
          </div>
          {children}
        </div>
        <div>
        <Footer />
        </div>
      </body>
    </html>
  );
}