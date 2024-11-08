/* eslint-disable react/jsx-props-no-spreading */
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "../styles/globals.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import theme from "../material/theme";

import data from "../../data/seed.json";
import ArticleShape from "../components/ArticleShape";

function MainApp(appProps) {
  const { Component, pageProps } = appProps;
  const router = useRouter();
  const [collection, setCollection] = useState(data);
  const { id } = router.query;
  const currentArticle = id
    ? collection.find((article) => article.id === +id)
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

  // We need an alternate name for theme since it is used above
  const Footer = styled("footer")(({ theme: styledTheme }) => ({
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: styledTheme.spacing(5),
    paddingTop: styledTheme.spacing(2),
  }));

  return (
    <AppCacheProvider {...appProps}>
      <Head>
        <title>Simplepedia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <main>
          <Container>
            <Typography variant="h2" align="center">
              Simplepedia
            </Typography>
            <Component {...props} />
          </Container>
        </main>

        <Footer>CS 312 Practical: CSS Frameworks</Footer>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

MainApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
  currentArticle: ArticleShape, // Moved here
  setCurrentArticle: PropTypes.func, // Moved here
};

export default MainApp;
