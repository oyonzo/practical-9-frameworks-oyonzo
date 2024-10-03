import PropTypes from "prop-types";
import IndexBar from "../../components/IndexBar";
import ArticleShape from "../../components/ArticleShape";
import Article from "../../components/Article";

export default function Simplepedia({
  collection,
  currentArticle,
  setCurrentArticle,
}) {
  return (
    <>
      <div>
        <IndexBar
          collection={collection}
          setCurrentArticle={setCurrentArticle}
        />
      </div>
      <div>
        <Article currentArticle={currentArticle} />
      </div>
    </>
  );
}

Simplepedia.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  currentArticle: ArticleShape, // Include this prop type for currentArticle
  setCurrentArticle: PropTypes.func.isRequired, // Include this prop type for setCurrentArticle
};
