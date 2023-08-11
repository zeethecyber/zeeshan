import Head from "next/head";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { gsap } from "gsap";
import SideLinks from "../components/side-links/SideLinks";
function AppLayout({ children }: { children: ReactElement[] | ReactElement }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000" />
        <title>Zeeshan Asif</title>
      </Head>
      <SideLinks />
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default AppLayout;
