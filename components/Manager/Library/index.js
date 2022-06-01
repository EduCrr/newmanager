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

  return (
    <C.Content>
      <motion.div
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
