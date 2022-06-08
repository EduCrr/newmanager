import * as C from "./styles";
import { useState, useEffect } from "react";
import { FaFileAlt } from "react-icons/fa";
import blogApi from "../../../pages/api/blogApi";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export const Content = () => {
  const [imgFile, setImgFile] = useState();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const onImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImgFile(URL.createObjectURL(file));
    } else {
      setImgFile();
    }
  };

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => {
        alert("informe uma imagem válida");
        setLoading(false);
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
        "fullScreen",
        "codeView",
        "preview",
      ],
    ],
  };
  function handleChange(content) {
    setContent(content);
  }

  return (
    <C.Content>
      <div className="headerContent">Content</div>
      <form className="globalForm">
        <input placeholder="Title" />
        {loading ? "carragando " : ""}
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
        <button type="submit">Atualizar</button>
      </form>
    </C.Content>
  );
};

//https://mantine.dev/others/rte/
