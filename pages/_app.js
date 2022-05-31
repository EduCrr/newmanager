import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component
        {...pageProps}
        key={router.pathname}
        onExitComplete={() => window.scrollTo(0, 0)}
      />
    </AnimatePresence>
  );
}

export default MyApp;
