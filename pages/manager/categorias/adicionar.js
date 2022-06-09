import Link from "next/link";
import { Default } from "../../../components/Manager/Default";
import * as C from "../../../styles/Manager/categorias";
const Adicionar = () => {
  return (
    <Default>
      <C.Content>
        <h4>Adicionar Categoria</h4>
        <div className="formCat">
          <form className="globalForm">
            <input placeholder="Nome" />
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </C.Content>
    </Default>
  );
};

export default Adicionar;
