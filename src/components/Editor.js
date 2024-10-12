/*
  Editor.js

  This provides a basic editor with space for entering a title and a body.

  The interface has two buttons. If "Cancel" is clicked, the `complete` callback
  is called with no arguments. If the "Save" button is clicked, the `complete` callback
  is called with a new article object with `title`, `contents`, and `date`. 

  If the optional `article` prop is set, the `title` and `contents` fields of the component
  are pre-loaded with the values. In addition, all other properties of the object are 
  included in the returned article object. 

  props:
    currentArticle - object with `title` and `contents` properties at minimum
    complete - function to call on completion (required)
*/
import { useState } from "react";
import PropTypes from "prop-types";
import ArticleShape from "./ArticleShape";
import styles from "../styles/Editor.module.css";

export default function Editor({ currentArticle, complete }) {
  const [title, setTitle] = useState(
    currentArticle ? currentArticle.title : "",
  );
  const [contents, setContents] = useState(
    currentArticle ? currentArticle.contents : "",
  );

  // handler for the save button
  const handleSave = () => {
    const newArticle = {
      ...currentArticle, // Copy the existing fields from the current article,
      title, // update the title field
      contents, // update the content field
      edited: new Date().toISOString(),
    };
    complete(newArticle);
  };

  return (
    <div className={styles.editor} key={currentArticle?.id}>
      <input
        type="text"
        placeholder={title}
        className="input-field"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder={contents}
        className="textarea-field"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <div>
        <button type="button" onClick={handleSave} disabled={!title}>
          Save
        </button>
        <button type="button" onClick={() => complete()}>
          Cancel
        </button>
      </div>
    </div>
  );
}

Editor.propTypes = {
  currentArticle: ArticleShape,
  complete: PropTypes.func.isRequired,
};
