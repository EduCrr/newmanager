import axios from "axios";

const api = axios.create({
  baseURL: "https://fmcomunicacao.com.br/api",
});

export default {
  getUser: async () => {
    let { data: json } = await api.get(`/user`);
    return json;
  },

  getPosts: async (offset = 0) => {
    let { data: json } = await api.get(`/posts?offset=${offset}`);
    return json;
  },

  getSinglePost: async (id) => {
    let { data: json } = await api.get(`/post/${id}`);
    return json;
  },

  getSearch: async (q) => {
    let { data: json } = await api.get(`/search?q=${q}`);
    return json;
  },

  getCategories: async () => {
    let { data: json } = await api.get(`/categories`);
    return json;
  },

  getSingleCategory: async (cat) => {
    let { data: json } = await api.get(`/categorie/${cat}`);
    return json;
  },

  createUser: async (name, password, email) => {
    let { data: json } = await api.post(`/user`, {
      name,
      password,
      email,
    });
    return json;
  },

  createCat: async (name) => {
    let { data: json } = await api.post(`/categories`, {
      name,
    });
    return json;
  },

  loginUser: async (password, email) => {
    let { data: json } = await api.post(`/auth/login`, {
      password,
      email,
    });
    return json;
  },

  updateUserName: async (name) => {
    let { data: json } = await api.put(`/user`, {
      name,
    });
    return json;
  },
  updateUserEmail: async (email) => {
    let { data: json } = await api.put(`/user`, {
      email,
    });
    return json;
  },

  updateUserPassword: async (password, password_confirm) => {
    let { data: json } = await api.put(`/user`, {
      password,
      password_confirm,
    });
    return json;
  },

  updateAvatar: async (avatar) => {
    let body = new FormData();
    if (avatar) {
      body.append("avatar", avatar);
    }
    let { data: json } = await api.post(`/user/avatar`, body);
    return json;
  },

  getMyPosts: async () => {
    let { data: json } = await api.get(`/myposts`);

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

  deletePost: async (id) => {
    let { data: json } = await api.delete(`/post/${id}`);
    return json;
  },

  updateTitle: async (title, content, category, id) => {
    let { data: json } = await api.put(`/post/${id}`, {
      title,
      content,
      category,
    });
    return json;
  },

  deleteImage: async (id) => {
    let { data: json } = await api.delete(`/post/images/${id}`);
    return json;
  },

  updateImage: async (fotoField, id) => {
    let body = new FormData();

    if (fotoField.current.files.length > 0) {
      for (let i = 0; i < fotoField.current.files.length; i++) {
        body.append("images[]", fotoField.current.files[i]);
      }
    }

    let { data: json } = await api.post(`/post/images/${id}`, body);
    return json;
  },

  getFavorites: async () => {
    let { data: json } = await api.get(`/user/favorites`);
    return json;
  },

  toogleFavorite: async (id) => {
    let { data: json } = await api.post(`/user/favorite`, {
      id,
    });
    return json;
  },

  sendEmail: async (email, name, fotoField) => {
    let body = new FormData();
    body.append("email", email);
    body.append("name", name);

    if (fotoField.current.files.length > 0) {
      for (let i = 0; i < fotoField.current.files.length; i++) {
        body.append("att[]", fotoField.current.files[i]);
      }
    }

    let { data: json } = await api.post(`/teste`, body);
    return json;
  },

  deleteCat: async (id) => {
    let { data: json } = await api.delete(`/categorie/delete/${id}`);
    return json;
  },

  addText: async (file) => {
    let body = new FormData();
    body.append("file", file);

    let { data: json } = await api.post(`/postimage`, body);
    return json;
  },
};
