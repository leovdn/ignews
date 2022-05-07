import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Maio de 2021</time>
            <strong>Creating a Blog Post with Prismic</strong>
            <p>
              In this guide, you'll learn how to integrate Prismic CMS blog
              posts
            </p>
          </a>

          <a href="#">
            <time>12 de Maio de 2021</time>
            <strong>Creating a Blog Post with Prismic</strong>
            <p>
              In this guide, you'll learn how to integrate Prismic CMS blog
              posts
            </p>
          </a>

          <a href="#">
            <time>12 de Maio de 2021</time>
            <strong>Creating a Blog Post with Prismic</strong>
            <p>
              In this guide, you'll learn how to integrate Prismic CMS blog
              posts
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    }
  );

  // console.log(response);

  return {
    props: {},
  };
};
