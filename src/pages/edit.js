import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ArticleShape from "../components/ArticleShape";
import Editor from "../components/Editor";

export default function SimplepediaCreator({
  collection,
  setCollection,
  setCurrentArticle,
}) {
  const router = useRouter(); // initialize useRouter

  const handleComplete = (article) => {
    if (article) {
      setCollection(() => [...collection, article]); //  add the article to the collection
      setCurrentArticle(article); // make the new article the current article
      console.log(article);
    } else {
      router.back(); // if there is no article, go back
    }
  };
  return <Editor complete={handleComplete} />;
}

SimplepediaCreator.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCollection: PropTypes.func.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
};
