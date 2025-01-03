/*
  Article.js

  The Article displays the contents of an article.

  props:
    currentArticle - The article to render
*/
import styles from "../styles/Article.module.css";
import ArticleShape from "./ArticleShape";

export default function Article({ currentArticle }) {
  return currentArticle ? (
    <div className={styles.Article}>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.contents}</p>
      <p className={styles.timestamp}>
        {new Date(currentArticle.edited).toLocaleString()}
      </p>
    </div>
  ) : (
    ""
  );
}
Article.propTypes = {
  currentArticle: ArticleShape,
};
