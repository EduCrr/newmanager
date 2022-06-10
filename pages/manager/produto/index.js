import Link from "next/link";
import { Default } from "../../../components/Manager/Default";
import { Itens } from "../../../components/Manager/Itens";
import blogApi from "../../api/blogApi";

const Produto = ({ posts }) => {
  return (
    <Default>
      <Itens posts={posts} />
    </Default>
  );
};

export default Produto;

export const getServerSideProps = async () => {
  const posts = await blogApi.getPosts();
  return {
    props: {
      posts,
    },
  };
};
