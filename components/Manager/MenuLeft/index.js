import Link from "next/link";
import * as C from "./styles";
import { FaHome, FaEnvira, FaDiceD6 } from "react-icons/fa";

export const MenuLeft = () => {
  return (
    <C.Content>
      <div className="initial">
        <div className="online">
          <span></span> <p>Online</p>
        </div>
        <ul>
          <li>
            <Link scroll={false} href="/manager/home">
              <div className=" menu active">
                <FaHome />
                <a>Home</a>
              </div>
            </Link>
            <Link scroll={false} href="/manager/produto/adicionar">
              <div className=" menu ">
                <FaEnvira />
                <a>Categorias</a>
              </div>
            </Link>
            <Link scroll={false} href="/manager/produto/adicionar">
              <div className=" menu ">
                <FaDiceD6 />
                <a>Produto</a>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </C.Content>
  );
};
