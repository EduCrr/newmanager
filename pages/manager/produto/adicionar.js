import { Default } from "../../../components/Manager/Default";
import * as C from "../../../components/Manager/Content/styles";
import { useState, useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import "quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import blogApi from "../../api/blogApi";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
const RichTextEditor = dynamic(import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const Adicionar = () => {
  const [imgFile, setImgFile] = useState();
  const [content, setContent] = useState("<h1>teste</h1>");
  const [category, setCategory] = useState("1");
  const [title, setTitle] = useState("");
  let fotoField = useRef();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImgFile(URL.createObjectURL(file));
    } else {
      setImgFile();
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const json = await blogApi.addPost(title, content, category, fotoField);
    if (json.error === "") {
      alert("cadastrado com sucesso!");
      return;
    } else {
      alert("erro!");
      return;
    }
  };

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://127.0.0.1:8000/api/postimage", requestOptions)
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
          <form className="globalForm" onSubmit={handleForm}>
            <input
              placeholder="title"
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
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

            <input
              type="file"
              id="file"
              ref={fotoField}
              onChange={onImageChange}
              style={{ display: "none" }}
            />

            <div className="inputImage">
              <label htmlFor="file">
                <div className="container">
                  <img
                    alt=""
                    className="selected"
                    src={
                      imgFile ??
                      "https://indexiscdn.nyc3.cdn.digitaloceanspaces.com/sites/sucessonocampo.com.br/uploads/2021/04/09145900/y9DpT-21777.jpg"
                    }
                  />
                  <div className="middle">
                    <div htmlFor="file" className="text">
                      <FaFileAlt />
                    </div>
                  </div>
                </div>
              </label>
            </div>

            <button type="submit">Adicionar Produto</button>
          </form>
        </motion.div>
      </C.Content>
    </Default>
  );
};

export default Adicionar;

//https://github.com/mkhstar/suneditor-react/issues/128
