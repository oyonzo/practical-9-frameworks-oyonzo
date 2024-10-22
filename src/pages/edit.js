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

  const highestId = collection.reduce(
    (
      max,
      article, // find the highest id in the collection
    ) => (article.id > max ? article.id : max),
    0,
  );

  const handleComplete = (article) => {
    if (article) {
      const newArticle = {
        ...article,
        id: highestId + 1,
      };
      setCollection(() => [...collection, newArticle]); //  add the article to the collection
      setCurrentArticle(newArticle); // make the new article the current article
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
