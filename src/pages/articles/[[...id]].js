import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import IndexBar from "../../components/IndexBar";
import ArticleShape from "../../components/ArticleShape";
import Article from "../../components/Article";
import ButtonBar from "../../components/ButtonBar";

export default function Simplepedia({
  collection,
  currentArticle,
  setCurrentArticle,
}) {
  const router = useRouter();
  const handleClick = (command) => {
    if (command === "add") {
      router.push("/../edit");
    } else if (command === "edit") {
      router.push(`../articles/${currentArticle.id}/edit`);
    }
  };

  const [allowEdit, setAllowEdit] = useState(false);

  // Effect to manage the visibility of the Edit button
  useEffect(() => {
    setAllowEdit(!!currentArticle); // Set to true if there is a current article
  }, [currentArticle]);

  return (
    <>
      <div>
        <ButtonBar handleClick={handleClick} allowEdit={allowEdit} />
      </div>
      <div>
        <IndexBar
          collection={collection}
          setCurrentArticle={setCurrentArticle}
          currentArticle={currentArticle}
        >
          <Article currentArticle={currentArticle} />
        </IndexBar>
      </div>
    </>
  );
}

Simplepedia.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  currentArticle: ArticleShape, // Include this prop type for currentArticle
  setCurrentArticle: PropTypes.func.isRequired, // Include this prop type for setCurrentArticle
};
