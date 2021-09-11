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
      <Navbar />
      <main className="h-full">{children}</main>
    </>
  );
};

export default Layout;
