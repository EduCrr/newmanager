import Head from "next/head";
import Image from "next/image";
import * as C from "../styles/Site/index";
import { motion } from "framer-motion";
import Link from "next/link";
import blogApi from "./api/blogApi";
import { useState, useEffect } from "react";

export default function Home({ posts, categories }) {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const path = posts.path;
  const [postList, setPostList] = useState(posts.posts);

  const fadeInUp = {
    initial: {
      y: 160,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <C.Content>
      {postList.map((item, k) => (
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          className="item"
          key={k}
        >
          <Link scroll={false} href={`/post/${item.id}`}>
            <a>
              <img alt="" src={`${path}/${item.photos[0].url}`} />
              <h3>{item.title}</h3>
            </a>
          </Link>
        </motion.div>
      ))}
    </C.Content>
  );
}

export const getStaticProps = async () => {
  const posts = await blogApi.getPosts();
  const { categories } = await blogApi.getCategories();
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 300,
  };
};
