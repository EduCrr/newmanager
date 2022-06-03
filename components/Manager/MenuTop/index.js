import Link from "next/link";
import * as C from "./styles";
import { FaPowerOff, FaMoon } from "react-icons/fa";
import { Theme } from "../Theme/Theme";
export const MenuTop = () => {
  return (
    <C.Content>
      <div className="user">
        <div className="loggedUser">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_p_TOIEqMsaP4yTN9mJPWCIcZEmOABtDB_gXOCaDuKBw6K-iTbTctOZZSorgNf8J2OoU&usqp=CAU"
          />
          <span>8poroito</span>
        </div>
        <div className="btnsTop">
          <Theme />
        </div>
      </div>
    </C.Content>
  );
};
