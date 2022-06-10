import * as C from "../Itens/styles";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
export const Slides = () => {
  const [imgFile, setImgFile] = useState([]);

  const onImageChange = (e) => {
    const imgs = e.target.files;
    setImgFile([]);
    if (imgs) {
      for (let files of imgs) {
        setImgFile((oldArray) => [...oldArray, URL.createObjectURL(files)]);
      }
      console.log(imgFile);
    } else {
      setImgFile();
    }
  };
  return (
    <C.Content>
      <form>
        <div className="addSlides">
          <h2>Slides</h2>
          <input
            type="file"
            id="file"
            multiple
            onChange={onImageChange}
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <div className="bt" htmlFor="file">
              Adicionar
            </div>
          </label>
        </div>
        <div className="container">
          <div className="item">
            <div className="globalSpace">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1654704089490-2ed8dc3285cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div className="slide">
                <div>
                  <button style={{}}>
                    <FaTrash size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {imgFile !== "" &&
            imgFile.map((item, k) => (
              <div
                className="item"
                style={{ opacity: "0.3", pointerEvents: "none" }}
              >
                <div className="globalSpace">
                  <img alt="" src={item} />
                  <div className="slide">
                    <div>
                      <button style={{}}>
                        <FaTrash size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button className="btnSave">Salvar</button>
      </form>
    </C.Content>
  );
};
