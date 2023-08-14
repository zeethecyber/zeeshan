import Head from "next/head";
import React, { ReactElement, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideLinks from "../components/side-links/SideLinks";
import { useDispatch } from "react-redux";
import { setProjects } from "../store/reducers/projectSlice";
import { PROJECTS } from "../data/projects";
function AppLayout({ children }: { children: ReactElement[] | ReactElement }) {
  const dispatch = useDispatch();

  // Store project on app load
  useEffect(() => {
    dispatch(setProjects(PROJECTS));
  }, []);

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
