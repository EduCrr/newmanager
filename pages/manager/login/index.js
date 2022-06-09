import Link from "next/link";
import * as C from "../../../styles/Manager/login";
const Login = () => {
  return (
    <C.Content>
      <div className="modal">
        <div className="login">
          <div className="loginContent">
            <h2>Autentifique</h2>
            <div className="log">
              <form className="globalForm">
                <input required placeholder="Email" />
                <input required placeholder="Senha" />
                <input type="submit" value="Login" />
              </form>
            </div>
          </div>
          <div className="footer">
            <span> Desenvolvido por:</span>
            <Link href="produto/adicionar">
              <a>
                <img src="/8poroito.png" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </C.Content>
  );
};

export default Login;
