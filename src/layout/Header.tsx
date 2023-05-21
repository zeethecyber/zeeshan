import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, motionValue } from "framer-motion";
import { useRouter } from "next/router";
function Header() {
  const [rendered, setRendered] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [date, setDate] = useState(new Date());
  const { scrollYProgress } = useScroll();
  const menuRef: any = useRef(null);
  const router = useRouter();

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    setRendered(true);
    const timerId = setInterval(refreshClock, 1000);
    console.log("========MENU REF=========", menuRef.current);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if (menuRef.current) {
        menuRef.current.checked = false;
        setShowNav(false);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const handleClick = () => {
    setShowNav((prevstate) => !prevstate);
  };

  return (
    <>
      <header className={`w-full z-20 top-0 left-0 fixed z-50`}>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-1 w-full bg-primary fixed left-0 top-0"
        ></motion.div>
        <div className="max-w-7xl m-auto py-6 px-12 flex justify-between items-center relative">
          <div>
            <h6 className="text-white text-xs md:text-base font-medium tracking-[0.6rem]">
              ZEESHAN ASIF
            </h6>
          </div>
          <div className="md:absolute left-1/2 top-1/2 md:translate-y-[-50%] md:translate-x-[-50%]">
            <div className="menu-icon" onClick={handleClick}>
              <input
                className="menu-icon__cheeckbox"
                type="checkbox"
                ref={menuRef}
              />
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="gap-2 hidden md:flex md:gap-6 items-center">
            <h6 className="text-white font-semibold">
              {rendered && date.getHours()} : {rendered && date.getMinutes()}
            </h6>
            <span className="p-1 rounded-full bg-white inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </span>
          </div>
        </div>
      </header>

      {/* Top Navigation */}
      <AnimatePresence>{showNav && <NavigationComponent />}</AnimatePresence>
    </>
  );
}

export default Header;

function NavigationComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
      className="h-screen w-full bg-black/75 backdrop-blur-lg pb-28 pt-32 top-0 left-0 fixed z-10"
    >
      <div className="flex flex-col justify-between h-full max-w-7xl m-auto px-4">
        <ul className="flex flex-col items-center gap-6 font-medium text-4xl md:text-5xl text-gray-1">
          <li>
            <Link
              className={
                `!font-clash` +
                (window.location.pathname == "/" ? " text-primary" : "")
              }
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                `!font-clash` +
                (window.location.pathname == "/about" ? " text-primary" : "")
              }
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link className="!font-clash" href={"/works"}>
              Works
            </Link>
          </li>
        </ul>
        <div className="text-gray-1">
          <h5 className="font-medium text-6xl text-primary">Let&apos;s Talk</h5>
          <div className="flex justify-between items-center mt-12">
            <a href="#" className="flex gap-2 items-center">
              <h6 className="text-lg lg:text-2xl">Contact by mail</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 lg:w-6 h-4 lg:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>

            <div className="flex gap-6">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 lg:w-10 w-7 lg:h-10"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 lg:w-10 w-7 lg:h-10"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 lg:w-10 w-7 lg:h-10"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
