"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux"; //for redux-toolkot
import { store } from "@/store/useMenuStore";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";
import { ThemeProvider } from "next-themes";
import TopMenu from "@/components/TopMenu";
import Toast from "@/components/toast/Toast";
import { useState } from "react";

const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "600"],
});

// export const metadata = {
//   title: "Sumit Mahat Portfolio",
//   description: "Full stack software developer Portfolio website",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          <main className="flex flex-row">
            <SideMenu />
            <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
              <TopMenu /> {children}
              <Footer />
            </section>
            <Toast />
          </main>
        </Provider>
      </body>
    </html>
  );
}
