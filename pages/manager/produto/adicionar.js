import { Default } from "../../../components/Manager/Default";
import * as C from "../../../components/Manager/Content/styles";
import { useState, useEffect } from "react";
import { FaFileAlt } from "react-icons/fa";
import "quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const Adicionar = () => {
  const [imgFile, setImgFile] = useState();
  const [value, setValue] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImgFile(URL.createObjectURL(file));
    } else {
      setImgFile();
    }
  };

  return (
    <Default>
      <C.Content>
        <motion.div initial="hidden" animate="enter" exit="exit">
          <form className="globalForm">
            <input placeholder="Title" />
            <select>
              <option selected disabled>
                Selecione uma categoria
              </option>
              <option>teste</option>
              <option>teste</option>
            </select>
            <RichTextEditor
              placeholder="Conteúdo"
              controls={[
                [
                  "bold",
                  "clean",
                  "italic",
                  "underline",
                  "link",
                  "image",
                  "video",
                ],
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

            <button type="submit">Adicionar</button>
          </form>
        </motion.div>
      </C.Content>
    </Default>
  );
};

export default Adicionar;
