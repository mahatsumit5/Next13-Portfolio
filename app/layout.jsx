"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux"; //for redux-toolkot
import { store } from "@/store/useMenuStore";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";
import Toast from "@/components/toast/Toast";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "600"],
});

// export const metadata = {
//   title: "Sumit Mahat Portfolio",
//   description: "Full stack software developer Portfolio website",
// };

export default function RootLayout({ children }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [state]);

  return (
    <html lang="en">
      <body className={`${poppins.className} active-modal  `}>
        <Provider store={store}>
          <ThemeProvider attribute="class">
            <main className="flex flex-row dark:bg-slate-900">
              <SideMenu />
              <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
                <TopMenu setState={setState} /> {children}
                <Footer />
              </section>
              <Toast />
            </main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
