import { Default } from "../../../components/Manager/Default";
import * as C from "../../../components/Manager/Content/styles";
import { useState, useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import "quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import blogApi from "../../api/blogApi";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const Adicionar = () => {
  const [imgFile, setImgFile] = useState();
  const [content, setContent] = useState();
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

  const handleImageUpload = async (file) => {
    const json = await blogApi.addText(file);
    const reader = new FileReader();

    reader.readAsDataURL(json.location);
  };

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
            <RichTextEditor
              onImageUpload={handleImageUpload}
              onIma
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
              value={content}
              onChange={setContent}
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

//https://www.youtube.com/watch?v=nL2KVcKa5ug&ab_channel=DEV_PIE
