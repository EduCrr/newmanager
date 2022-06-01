import { Default } from "../../../components/Manager/Default";
import { Library } from "../../../components/Manager/Library";
import { Itens } from "../../../components/Manager/Itens";
import { Content } from "../../../components/Manager/Content";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Default>
      <motion.div initial="hidden" animate="enter" exit="exit">
        <Library />
        <Itens />
        <Content />
      </motion.div>
    </Default>
  );
};

export default Home;
