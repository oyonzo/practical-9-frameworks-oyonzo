/*
  TitleList.js

  This module displays a list of titles and reports when a user clicks on one.

  props:
    articles - an array of objects with title and id properties
    setCurrentArticle - a callback that expects an article as an argument

*/
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import ArticleShape from "./ArticleShape";

const NoBulletList = styled("ul")(() => ({
  listStyle: "none",
  paddingLeft: 0,
}));

export default function TitlesView({ articles, setCurrentArticle }) {
  const sortedArticles = [...articles].sort((a, b) =>
    a.title.localeCompare(b.title),
  );
  return (
    <div>
      <NoBulletList>
        {
          // sort by article titles
          sortedArticles.map((article) => (
            <li
              data-testid="title"
              key={article.id}
              onClick={() => setCurrentArticle(article)}
            >
              {article.title}
            </li>
          ))
        }
      </NoBulletList>
    </div>
  );
}

TitlesView.propTypes = {
  articles: PropTypes.arrayOf(ArticleShape).isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
};
