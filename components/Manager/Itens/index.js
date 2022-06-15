import * as C from "./styles";
import { FaEdit, FaTrash, FaCheck, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const Itens = ({ posts, page }) => {
  const [cat, setCat] = useState("");
  console.log(posts);
  let path = posts.path;
  const { pathname } = useRouter();
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
            <form className="globalForm">
              <select value={cat} onChange={(e) => setCat(e.target.value)}>
                <option value="">Todos</option>
                <option value="jogos">Jogos</option>
                <option value="tecnologia">Tecnologia</option>
              </select>
            </form>
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
      {cat === "" && (
        <>
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
        </>
      )}
      {cat !== "" && (
        <div className="container">
          {posts.posts
            .filter((item) => item.category.slug === cat)
            .map((item, k) => (
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
      )}
    </C.Content>
  );
};
