import { MenuLeft } from "../MenuLeft";
import { MenuTop } from "../MenuTop";
import * as C from "./styles";
import { motion } from "framer-motion";

export const Default = ({ children }) => {
  const fadeInUp = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,

        //   staggerChildren: 0.1
      },
    },
    exit: {
      y: -140,
      opacity: 0,
      transition: {
        duration: 0.9,
      },
    },
  };
  return (
    <C.Content>
      <div className="globalMenuTopManager">
        <MenuTop />
      </div>
      <div className="globalMenuLeftManager">
        <MenuLeft />
      </div>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <main className="globalMainManager">{children}</main>
      </motion.div>
      <footer className="globalFooterManager">Footer</footer>
    </C.Content>
  );
};
