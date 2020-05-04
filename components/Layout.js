// import Navbar from "../components/Navbar";
import Head from 'next/head'

import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title> NextJs </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <main>{children}</main>

      {/* <footer>Design by jack</footer> */}
    </div>
  );
}

export default Layout;
