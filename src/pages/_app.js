/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";

import data from "../../data/seed.json";
import styles from "../styles/Simplepedia.module.css";
import ArticleShape from "../components/ArticleShape";

function MainApp({ Component, pageProps }) {
  const router = useRouter();
  const [collection, setCollection] = useState(data);
  const { id } = router.query;
  const currentArticle = id
    ? data.find((article) => article.id === +id)
    : undefined; // + to convert string to number

  // eslint-disable-next-line no-console
  console.log("ID from URL", { id });

  const setCurrentArticle = (article) => {
    if (article) {
      router.push(`/articles/${article.id}`);
    } else {
      router.push("/articles");
    }
  };

  const props = {
    ...pageProps,
    collection,
    setCollection,
    currentArticle,
    setCurrentArticle,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Simplepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Simplepedia</h1>
        <Component {...props} />
        <div>Article Id: {id}</div>
      </main>

      <footer>CS 312 Assignment 3</footer>
    </div>
  );
}

MainApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
  currentArticle: ArticleShape, // Moved here
  setCurrentArticle: PropTypes.func, // Moved here
};

export default MainApp;
