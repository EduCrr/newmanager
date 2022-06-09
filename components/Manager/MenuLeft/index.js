import Link from "next/link";
import { useRouter } from "next/router";
import * as C from "./styles";
import { FaHome, FaEnvira, FaDiceD6 } from "react-icons/fa";

export const MenuLeft = () => {
  const router = useRouter();
  return (
    <C.Content>
      <div className="initial">
        <div className="online">
          <span></span> <p>Online</p>
        </div>
        <ul>
          <li>
            <Link scroll={false} href="/manager/home">
              <div
                className={
                  router.pathname === "/manager/home" ? "menu active " : "menu"
                }
              >
                <FaHome />
                <a>Home</a>
              </div>
            </Link>
            <Link scroll={false} href="/manager/categorias">
              <div
                className={
                  router.pathname === "/manager/categorias"
                    ? "menu active "
                    : "menu"
                }
              >
                <FaEnvira />
                <a>Categorias</a>
              </div>
            </Link>
            <Link scroll={false} href="/manager/produto/adicionar">
              <div
                className={
                  router.pathname === "/manager/produtos"
                    ? "menu active "
                    : "menu"
                }
              >
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
