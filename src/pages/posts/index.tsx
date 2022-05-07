import Head from "next/head";
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
