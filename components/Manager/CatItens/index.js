import Link from "next/link";
import * as C from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";

export const CatItens = () => {
  return (
    <C.Content>
      <div className="init">
        <h2>Categorias</h2>
        <Link href="/manager/categorias/adicionar">
          <a>Adicionar</a>
        </Link>
      </div>
      <div className="containerCategorys">
        <div className="id">#1</div>
        <div className="name">Tecido</div>
        <div className="btns">
          <button>
            <FaEdit />
          </button>
          <button>
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="containerCategorys">
        <div className="id">#1</div>
        <div className="name">Tecido teste</div>
        <div className="btns">
          <button>
            <FaEdit />
          </button>
          <button>
            <FaTrash />
          </button>
        </div>
      </div>
    </C.Content>
  );
};
