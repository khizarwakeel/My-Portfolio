import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menusection/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stixor",
  description: "Developed by Khizar Wakeel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-[#7810e9] via-[#7911ea] to-[#7810e9]`}
      >
        <div className="max-w-7xl mx-auto">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}