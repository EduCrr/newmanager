import * as C from "./styles";
import { useState, useEffect } from "react";
import { FaFileAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

// import parse from "html-react-parser";

const RichTextEditor = dynamic(import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

export const Content = () => {
  const [imgFile, setImgFile] = useState();
  const [value, setValue] = useState("");

  const onImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImgFile(URL.createObjectURL(file));
    } else {
      setImgFile();
    }
  };

  return (
    <C.Content>
      <div className="headerContent">Content</div>
      <form className="globalForm">
        <input placeholder="Title" />
        <RichTextEditor
          placeholder="Conteúdo"
          controls={[
            ["bold", "clean", "italic", "underline", "link", "image", "video"],
            ["h1", "h2", "h3", "h4"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
          value={value}
          onChange={setValue}
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
