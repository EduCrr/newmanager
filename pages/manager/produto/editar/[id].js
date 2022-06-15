import { Default } from "../../../../components/Manager/Default";
import * as C from "../../../../styles/Manager/editar";
import { useState, useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import blogApi from "../../../api/blogApi";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Modal } from "../../../../components/Manager/Modal";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const Editar = ({ post }) => {
  const [imgFile, setImgFile] = useState([]);
  const [content, setContent] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [produto, setProduto] = useState(post.post);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [idImgDel, setIdImgDel] = useState(null);
  const [activeCategory, setActiveCategory] = useState(post.post.category.id);
  let id = post.post.id;
  const router = useRouter();

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

  let fotoField = useRef();

  useEffect(() => {
    const categories = async () => {
      let json = await blogApi.getCategories();
      if (json.error !== "") {
        console(json.error);
      } else {
        setCategorys(json.categories);
      }
    };
    categories();
  }, []);

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

  const handleChange = (texto) => {
    setContent(texto);
  };

  const handlePhotos = async (e) => {
    e.preventDefault();
    setLoading(true);
    let json = await blogApi.updateImage(fotoField, id);
    if (json.error !== "") {
      alert("erro");
      setImgFile([]);
      setLoading(false);
    } else {
      console.log("foi");
      setLoading(false);
      setTimeout(function () {
        router.reload(window.location.pathname);
      }, 300);
    }
  };

  const handleDeleteImg = async (id) => {
    setModal(!modal);
    setIdImgDel(id);
  };

  return (
    <Default>
      <C.Content>
        <motion.div initial="hidden" animate="enter" exit="exit">
          <h2>Produto teste</h2>
          <form className="globalForm">
            <input placeholder="Titulo" value={produto.title} />
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categorys.map((item, k) => (
                <option key={k} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <SunEditor
              setOptions={opitons}
              value={produto.content}
              defaultValue={produto.content}
              onChange={handleChange}
              placeholder="Escreva aqui..."
              onImageUploadBefore={handleImageUploadBefore}
            />
            <button type="submit">Salvar</button>
          </form>
          <form className="globalForm" onSubmit={handlePhotos}>
            <div className="addImg">
              <h3>Imagens</h3>
              <input
                type="file"
                id="file"
                multiple
                ref={fotoField}
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

            {loading === true ? "Carregando" : ""}
            <div className="containerImgs">
              {produto.photos.map((item, k) => (
                <div className="contentImgs" key={k}>
                  <div className="photo">
                    <img alt="" src={`${item.url}`} />
                  </div>
                  <div className="btns">
                    <div
                      className="delPhoto"
                      onClick={() => handleDeleteImg(item.id)}
                    >
                      <FaTrash size={14} />
                    </div>
                  </div>
                </div>
              ))}
              {imgFile !== "" &&
                imgFile.map((item, k) => (
                  <div
                    className="contentImgs"
                    key={k}
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="photo">
                      <img alt="" src={item} />
                    </div>
                    <div className="btns">
                      <button>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <button
                style={{
                  marginLeft: "auto",
                  marginRight: "0",
                  display: "block",
                }}
                type="submit"
              >
                Salvar
              </button>
            </div>
          </form>
          <AnimatePresence exitBeforeEnter>
            {modal && <Modal setModal={setModal} id={idImgDel} type="images" />}
          </AnimatePresence>
        </motion.div>
      </C.Content>
    </Default>
  );
};

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  const post = await blogApi.getSinglePost(id);
  return {
    props: {
      post,
    },
  };
};

export default Editar;
