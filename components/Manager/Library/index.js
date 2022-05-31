import { useState } from "react";
import * as C from "./styles";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export const Library = () => {
  const [listCategories, setListCategories] = useState([
    { name: "Todos", active: true, slug: "todos" },
    { name: "Tecidos", active: false, slug: "tecidos" },
    { name: "Ambientes", active: false, slug: "ambientes" },
  ]);
  const handleCategory = (slug, k) => {
    setListCategories((prevItems) =>
      prevItems.map((e, i) => ({ ...e, active: i === k }))
    );
  };

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        //   staggerChildren: 0.1
      },
    },
    exit: {
      y: -140,
      opacity: 0,
      transition: {
        duration: 0.9,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <C.Content>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mediaTop"
      >
        <div className="title">Produtos</div>
        <div className="btnsGallery">
          <div className="categoryLibrary">
            {listCategories.map((item, k) => (
              <button
                onClick={() => handleCategory(item.slug, k)}
                className={item.active ? "active" : ""}
                key={k}
              >
                {item.name}
              </button>
            ))}
          </div>
          <form className="globalSearchInput">
            <input placeholder="Procurar" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </motion.div>
    </C.Content>
  );
};
