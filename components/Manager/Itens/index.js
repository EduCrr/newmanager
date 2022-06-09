import * as C from "./styles";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
export const Itens = ({ posts }) => {
  console.log(posts);
  let path = posts.path;
  return (
    <C.Content>
      <div className="add">
        <Link href="/manager/produto/adicionar">
          <button>Adicionar</button>
        </Link>
      </div>
      <div className="container">
        {posts.posts.map((item, k) => (
          <div className="item" key={k}>
            <div className="globalSpace">
              <div className="active">
                <button>
                  <FaCheck size={15} />
                </button>
              </div>
              <img alt="" src={`${path}/${item.photos[0].url}`} />
              <div className="btnsItem">
                <p>{item.title}</p>
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
        ))}
      </div>
    </C.Content>
  );
};
