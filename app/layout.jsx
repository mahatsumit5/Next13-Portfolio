"use client";
import SideMenu from "@/components/SideMenu";
import "./globals.css";
import { Poppins } from "next/font/google";
import TopMenu from "@/components/TopMenu";
import { Provider } from "react-redux"; //for redux-toolkot
import { store } from "@/store/useMenuStore";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800"],
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
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
