import { Default } from "../../../components/Manager/Default";
import * as C from "../../../styles/Manager/editar";
import { useState, useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import blogApi from "../../api/blogApi";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { FaTrash } from "react-icons/fa";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const Editar = () => {
  const [imgFile, setImgFile] = useState();
  const [content, setContent] = useState("<h1>teste</h1>");
  const [category, setCategory] = useState("1");
  const [title, setTitle] = useState("");

  const onImageChange = (e) => {
    setImgFile(e.target.files.length);
  };

  let fotoField = useRef();

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("https://fmcomunicacao.com.br/api/postimage", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let response = {
          result: [
            {
              url: data.location,
            },
          ],
        };
        uploadHandler(response);
      });
  };

  const opitons = {
    mode: "classic",
    rtl: false,
    katex: "window.katex",
    videoFileInput: true,
    tabDisable: false,
    buttonList: [
      [
        "undo",
        "redo",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
        "bold",
        "underline",
        "italic",
        "strike",
        "fontColor",
        "hiliteColor",
        "textStyle",
        "removeFormat",
        "outdent",
        "indent",
        "align",
        "list",
        "lineHeight",
        "link",
        "image",
        "video",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
      ],
    ],
  };
  function handleChange(content) {
    setContent(content);
  }

  return (
    <Default>
      <C.Content>
        <motion.div initial="hidden" animate="enter" exit="exit">
          <h2>Produto teste</h2>
          <form className="globalForm">
            <input placeholder="Titulo" />
            <select>
              <option value="1">Jogos</option>
              <option value="2">Tecnologia</option>
            </select>
            <SunEditor
              setOptions={opitons}
              onChange={handleChange}
              value={content}
              placeholder="Escreva aqui..."
              onImageUploadBefore={handleImageUploadBefore}
            />
            <button type="submit">Salvar</button>
          </form>
          <form className="globalForm">
            <div className="addImg">
              <h3>Imagens</h3>
              <input
                type="file"
                id="file"
                multiple
                onChange={onImageChange}
                style={{ display: "none" }}
              />
              {imgFile === 1 && <p>{imgFile} imagem selecionada</p>}
              {imgFile > 1 && <p>{imgFile} imagens selecionadas</p>}
              <label htmlFor="file">
                <div className="bt" htmlFor="file">
                  Adicionar
                </div>
              </label>
            </div>
            <div className="containerImgs">
              <div className="contentImgs">
                <div className="photo">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
                <div className="btns">
                  <button>
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="contentImgs">
                <div className="photo">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
                <div className="btns">
                  <button>
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="contentImgs">
                <div className="photo">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
                <div className="btns">
                  <button>
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </motion.div>
      </C.Content>
    </Default>
  );
};

export default Editar;
