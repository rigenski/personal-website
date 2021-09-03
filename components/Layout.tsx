import React, { ReactNode } from "react";
import Head from "next/head";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="h-100 bg-gray-50 ">{children}</main>
    </>
  );
};

export default Layout;
