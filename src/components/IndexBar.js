/*
  IndexBar.js

  This component provides the section and title display that allows the user to 
  browse the available articles and select one for display. 

   props:
    collection - Array of articles in encyclopedia
    setCurrentArticle - Function to call set current article displayed
    currentArticle - The article to render
*/
import { useState } from "react";
import PropTypes from "prop-types";
import SectionsView from "./SectionsView";
import TitlesView from "./TitlesView";
import ArticleShape from "./ArticleShape";

function IndexBar({ collection, setCurrentArticle }) {
  const [currentSection, setCurrentSection] = useState(null);

  // make sections from collection
  const sections = Array.from(
    new Set(collection.map((article) => article.title[0].toUpperCase())),
  );

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
    <div>
      {/* SectionsView Component */}
      <SectionsView sections={sections} setCurrentSection={selectSection} />

      {/* TitlesView */}
      {currentSection ? (
        <TitlesView
          articles={articlesInCurrentSection}
          setCurrentArticle={setCurrentArticle}
        />
      ) : (
        // If no section is selected:
        <p>Select a section</p>
      )}
    </div>
  );
}

IndexBar.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
};

export default IndexBar;
