import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ArticleShape from "../../../components/ArticleShape";
import Editor from "../../../components/Editor";

export default function SimplepediaEditor({
  setCollection,
  setCurrentArticle,
  currentArticle,
}) {
  const router = useRouter(); // initialize useRouter

  const handleComplete = (updatedArticle) => {
    if (updatedArticle) {
      // Update the existing article in the collection
      setCollection((prevCollection) =>
        prevCollection.map((article) =>
          article.id === updatedArticle.id
            ? { ...article, ...updatedArticle }
            : article,
        ),
      );

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
  setCollection: PropTypes.func.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  currentArticle: ArticleShape.isRequired,
};
