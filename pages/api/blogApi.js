import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export default {
  getPosts: async () => {
    let { data: json } = await api.get(`/posts`);
    return json;
  },

  getSinglePost: async (id) => {
    let { data: json } = await api.get(`post/${id}`);
    return json;
  },

  getCategories: async () => {
    let { data: json } = await api.get(`categories`);
    return json;
  },

  getSingleCategory: async (cat) => {
    let { data: json } = await api.get(`categorie/${cat}`);
    return json;
  },

  addPost: async (title, content, category, fotoField) => {
    let body = new FormData();
    body.append("title", title);
    body.append("content", content);
    body.append("category", category);

    if (fotoField.current.files.length > 0) {
      for (let i = 0; i < fotoField.current.files.length; i++) {
        body.append("images[]", fotoField.current.files[i]);
      }
    }
    let { data: json } = await api.post(`/posts`, body);
    return json;
  },

  addText: async (file) => {
    let body = new FormData();
    body.append("file", file);

    let { data: json } = await api.post(`/postimage`, body);
    return json;
  },
};
