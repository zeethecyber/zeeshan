import { AnimatePresence, motion } from "framer-motion";
import AppLayout from "../src/layout/AppLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../src/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <AppLayout>
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                opacity: 0,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </AppLayout>
    </Provider>
  );
}
