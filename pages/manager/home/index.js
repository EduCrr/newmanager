import { Default } from "../../../components/Manager/Default";
import { Library } from "../../../components/Manager/Library";
import { Itens } from "../../../components/Manager/Itens";
import { Content } from "../../../components/Manager/Content";
import { motion } from "framer-motion";
import blogApi from "../../api/blogApi";

const Home = ({ posts }) => {
  return (
    <Default>
      <motion.div initial="hidden" animate="enter" exit="exit">
        <Library />
        <Itens posts={posts} />
        <Content />
      </motion.div>
    </Default>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const posts = await blogApi.getPosts();

  return {
    props: {
      posts,
    },
  };
};
