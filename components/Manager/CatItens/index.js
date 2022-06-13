import Link from "next/link";
import * as C from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import blogApi from "../../../pages/api/blogApi";

export const CatItens = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      let json = await blogApi.getCategories();
      if (json.error === "") {
        console.log(json);
        setCats(json.categories);
      } else {
        alert("sem categorias");
      }
    };

    getCat();
  }, []);

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
            <button>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </C.Content>
  );
};
