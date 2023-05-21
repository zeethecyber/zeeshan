import Head from "next/head";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { gsap } from "gsap";
function AppLayout({ children }: { children: ReactElement[] | ReactElement }) {
  const [showCursor, setShowCursor] = useState(false);
  const comp = useRef();
  const cursor = useRef(null);

  useEffect(() => {
    const isMobile = /Mobile/i.test(navigator.userAgent);

    if (!isMobile) {
      // console.log('This website is not running on a mobile device.');
      setShowCursor(true);
    }
  }, []);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let mouseX = 0;
      let mouseY = 0;

      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor.current, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      });

      window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    }, comp);

    return () => ctx.revert();
  }, [cursor]);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000" />
        <title>Zeeshan Asif</title>
      </Head>
      <Header></Header>

      {/* Custom cursor */}
      {showCursor && <div className="cursor" ref={cursor}></div>}

      {/* Glow */}
      <div className="glow-1 fixed top-0 right-0"></div>
      <div className="glow-2 fixed top-0 right-[100px]"></div>
      {children}
      {/* Footer */}
      <Footer></Footer>
    </>
  );
}

export default AppLayout;
