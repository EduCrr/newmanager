import Link from "next/link";
import * as C from "../../../styles/Manager/slide";
import { Default } from "../../../components/Manager/Default";
import { FaHome, FaEnvira, FaDiceD6 } from "react-icons/fa";
import { motion } from "framer-motion";
import { Slides } from "../../../components/Manager/slides";

const Slide = () => {
  return (
    <Default>
      <C.Content>
        <motion.div initial="hidden" animate="enter" exit="exit">
          <Slides />
        </motion.div>
      </C.Content>
    </Default>
  );
};

export default Slide;
