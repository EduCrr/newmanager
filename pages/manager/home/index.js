import { Default } from "../../../components/Manager/Default";
import { Itens } from "../../../components/Manager/Itens";
import { Content } from "../../../components/Manager/Content";
import { motion } from "framer-motion";
import blogApi from "../../api/blogApi";
import dynamic from "next/dynamic";

const Home = ({ posts, page }) => {
  return (
    <Default>
      <motion.div initial="hidden" animate="enter" exit="exit">
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
