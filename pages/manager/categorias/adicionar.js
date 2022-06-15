import Link from "next/link";
import { Default } from "../../../components/Manager/Default";
import * as C from "../../../styles/Manager/categorias";
import blogApi from "../../api/blogApi";
import { useState } from "react";
import { useRouter } from "next/router";

const Adicionar = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (title !== "") {
      let json = await blogApi.createCat(title);
      if (json.error === "") {
        alert("foi");
        setTitle("");
      } else {
        alert("Erro");
      }
    } else {
      alert("preencha o campo");
    }
  };

  const handleTitle = (name) => {
    setTitle(name);
    console.log(title);
  };
  return (
    <Default>
      <C.Content>
        <h4>Adicionar Categoria</h4>
        <div className="formCat">
          <form className="globalForm" onSubmit={handleForm}>
            <input
              required
              placeholder="Nome"
              value={title}
              onChange={(e) => handleTitle(e.target.value)}
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </C.Content>
    </Default>
  );
};

export default Adicionar;
