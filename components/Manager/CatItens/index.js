import Link from "next/link";
import * as C from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import blogApi from "../../../pages/api/blogApi";
import { Modal } from "../Modal";
import { AnimatePresence } from "framer-motion";

export const CatItens = () => {
  const [cats, setCats] = useState([]);
  const [modal, setModal] = useState(false);
  const [idCat, setIdCat] = useState(null);

  const getCat = async () => {
    let json = await blogApi.getCategories();
    if (json.error === "") {
      console.log(json);
      setCats(json.categories);
    } else {
      alert("sem categorias");
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  const handleDelete = async (id) => {
    setModal(!modal);
    setIdCat(id);
  };

  return (
    <C.Content>
      <div className="init">
        <h2>Categorias</h2>
        <Link href="/manager/categorias/adicionar">
          <a>Adicionar</a>
        </Link>
      </div>
      {cats.map((item, k) => (
        <div className="containerCategorys" key={k}>
          <div className="id">#{item.id}</div>
          <div className="name">{item.name}</div>
          <div className="btns">
            <button>
              <FaEdit />
            </button>
            <button onClick={() => handleDelete(item.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <AnimatePresence exitBeforeEnter>
        {modal && <Modal setModal={setModal} id={idCat} type="category" />}
      </AnimatePresence>
    </C.Content>
  );
};
