import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ArticleShape from "../../../components/ArticleShape";
import Editor from "../../../components/Editor";

export default function SimplepediaEditor({
  collection,
  setCollection,
  setCurrentArticle,
  currentArticle,
}) {
  const router = useRouter(); // initialize useRouter

  const handleComplete = (updatedArticle) => {
    if (updatedArticle) {
      // Compute the updated collection before setting it
      const updatedCollection = collection.map((article) =>
        article.id === updatedArticle.id
          ? { ...article, ...updatedArticle }
          : article,
      );

      // Now call setCollection with the updated collection directly
      setCollection(updatedCollection);

      // Set the updated article as the current article
      setCurrentArticle(updatedArticle);
    } else {
      // If there is no article, go back
      router.back();
    }
  };
  return <Editor complete={handleComplete} currentArticle={currentArticle} />;
}

SimplepediaEditor.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCollection: PropTypes.func.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  currentArticle: ArticleShape.isRequired,
};
