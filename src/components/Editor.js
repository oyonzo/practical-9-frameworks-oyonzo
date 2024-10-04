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

import ArticleShape from "./ArticleShape";
import styles from "../styles/Editor.module.css";
import PropTypes from "prop-types";

export default function Editor({ currentArticle, complete }) {
  return (<div>
    <input type="text" placeholder="Title must be set"/>
    <textarea type="text" placeholder="Contents"/>
    <button type="button">Save</button>
    <button type="button">Cancel</button>
    </div>)
}

Editor.propTypes = {
  currentArticle: ArticleShape,
  complete: PropTypes.func.isRequired
}

