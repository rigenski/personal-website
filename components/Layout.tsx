import { ReactNode } from "react";
import Head from "next/head";
import "devicon";
import Navbar from "./nav/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Rigen Maulana</title>
      </Head>
      {/* <div className="z-50 fixed w-full top-0 left-0">
        <div className="overflow-hidden h-1 w-1/2 rounded bg-black dark:bg-white"></div>
      </div> */}
      <Navbar />
      <main className="h-full">{children}</main>
    </>
  );
};

export default Layout;
