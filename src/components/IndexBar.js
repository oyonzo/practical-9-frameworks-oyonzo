/*
  IndexBar.js

  This component provides the section and title display that allows the user to 
  browse the available articles and select one for display. 

   props:
    collection - Array of articles in encyclopedia
    setCurrentArticle - Function to call set current article displayed
    currentArticle - The article to render
*/
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import SectionsView from "./SectionsView";
import TitlesView from "./TitlesView";
import ArticleShape from "./ArticleShape";

function IndexBar({ collection, setCurrentArticle, currentArticle, children }) {
  const [currentSection, setCurrentSection] = useState(null);

  // make sections from collection
  const sections = Array.from(
    new Set(collection.map((article) => article.title[0].toUpperCase())),
  );

  useEffect(() => {
    if (currentArticle) {
      setCurrentSection(currentArticle.title[0].toUpperCase());
    }
  }, [currentArticle]);

  // handler for when a section is selected
  const selectSection = (section) => {
    setCurrentSection(section);
    // unset the current article so that it does not persist into a new section
    setCurrentArticle(undefined);
  };

  // set the list of articles for the current section
  const articlesInCurrentSection = currentSection
    ? collection.filter(
        (article) => article.title[0].toUpperCase() === currentSection,
      )
    : // if there is no current section i.e. before anything is selected, set the articles to an empty array
      [];

  return (
    <Grid container spacing={2} xs={12}>
      <Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <SectionsView
            sections={sections}
            setCurrentSection={selectSection}
            currentSection={currentSection}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TitlesView
          articles={articlesInCurrentSection}
          setCurrentArticle={setCurrentArticle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
        {children}{" "}
        {/* Render children here, allowing IndexBar to wrap around the Article component */}
      </Grid>
    </Grid>
  );
}

IndexBar.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  currentArticle: ArticleShape,
  children: PropTypes.node,
};

export default IndexBar;
