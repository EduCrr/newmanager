import * as C from "./styles";
import { FaEdit, FaTrash, FaCheck, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Itens = ({ posts }) => {
  console.log(posts);
  let path = posts.path;

  const [listCategories, setListCategories] = useState([
    { name: "Todos", active: true, slug: "todos" },
    { name: "Jogos", active: false, slug: "jogos" },
    { name: "Tecnologia", active: false, slug: "tecnologia" },
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
      <div className="add">
        <Link href="/manager/produto/adicionar">
          <button>Adicionar</button>
        </Link>
      </div>
      <div className="container">
        {posts.posts.map((item, k) => (
          <div className="item" key={k}>
            <div className="globalSpace">
              <div className="active">
                <button>
                  <FaCheck size={15} />
                </button>
              </div>
              <img alt="" src={`${path}/${item.photos[0].url}`} />
              <div className="btnsItem">
                <p>{item.title}</p>
                <div>
                  <Link href={`/manager/produto/editar/${item.id}`}>
                    <a>
                      <button>
                        <FaEdit size={15} />
                      </button>
                    </a>
                  </Link>
                  <button>
                    <FaTrash size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </C.Content>
  );
};
