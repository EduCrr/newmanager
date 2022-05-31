import * as C from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";
export const Itens = () => {
  return (
    <C.Content>
      <div className="add">
        <button>Adicionar</button>
      </div>
      <div className="container">
        <div className="item">
          <div className="globalSpace">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
            />

            <div className="btnsItem">
              <p>Title</p>
              <div>
                <button>
                  <FaEdit size={15} />
                </button>
                <button>
                  <FaTrash size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="globalSpace">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1609942571926-f3fe26feab26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
            />

            <div className="btnsItem">
              <p>Title</p>
              <div>
                <button>
                  <FaEdit size={15} />
                </button>
                <button>
                  <FaTrash size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="globalSpace">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            />

            <div className="btnsItem">
              <p>Title</p>
              <div>
                <button>
                  <FaEdit size={15} />
                </button>
                <button>
                  <FaTrash size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </C.Content>
  );
};
