"use client";
import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";
import TopMenu from "@/components/TopMenu";
import { Provider } from "react-redux"; //for redux-toolkot
import { store } from "@/store/useMenuStore";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

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
      <body className={`${poppins.className} `}>
        <Provider store={store}>
          <main className="flex flex-row">
            <SideMenu />
            <AnimatePresence>
              <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
                <TopMenu /> {children}
                <Footer />
              </section>
            </AnimatePresence>
          </main>
        </Provider>
      </body>
    </html>
  );
}
