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
          </li>
          <li>
            <Link scroll={false} href="/manager/slide">
              <div
                className={
                  router.pathname === "/manager/slide" ? "menu active " : "menu"
                }
              >
                <FaHome />
                <a>Slides</a>
              </div>
            </Link>
          </li>
          <li>
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
          </li>
          <li>
            <Link scroll={false} href="/manager/produto">
              <div
                className={
                  router.pathname === "/manager/produto"
                    ? "menu active "
                    : "menu"
                }
              >
                <FaDiceD6 />
                <a>Produtos</a>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </C.Content>
  );
};
