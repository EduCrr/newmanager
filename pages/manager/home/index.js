import { Default } from "../../../components/Manager/Default";
import { Library } from "../../../components/Manager/Library";
import { Itens } from "../../../components/Manager/Itens";
import { Content } from "../../../components/Manager/Content";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <Default>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        <Library />
        <Itens />
        <Content />
      </motion.div>
    </Default>
  );
};

export default Home;
