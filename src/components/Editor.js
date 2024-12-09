import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Stack } from "@mui/material";
import ArticleShape from "./ArticleShape";
import styles from "../styles/Editor.module.css";

export default function Editor({ currentArticle, complete }) {
  const [title, setTitle] = useState(
    currentArticle ? currentArticle.title : "",
  );
  const [contents, setContents] = useState(
    currentArticle ? currentArticle.contents : "",
  );

  // Handler for the save button
  const handleSave = () => {
    const newArticle = {
      ...currentArticle, // Copy the existing fields from the current article
      title, // Update the title field
      contents, // Update the content field
      edited: new Date().toISOString(),
    };
    complete(newArticle);
  };

  return (
    <div className={styles.editor} key={currentArticle?.id}>
      {/* Title field using Material UI TextField */}
      <TextField
        required
        fullWidth
        margin="normal"
        id="title"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={!title}
        helperText={!title ? "Title can't be blank" : " "}
      />

      {/* Contents field using Material UI TextField with multiline */}
      <TextField
        fullWidth
        multiline
        rows={10}
        margin="normal"
        id="contents"
        label="Contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        sx={{
          "& .MuiInputBase-root": {
            paddingTop: 0, // Remove extra padding at the top
          },
        }}
      />

      {/* Buttons wrapped in a Stack for horizontal layout */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={!title}
        >
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={() => complete()}>
          Cancel
        </Button>
      </Stack>
    </div>
  );
}

Editor.propTypes = {
  currentArticle: ArticleShape,
  complete: PropTypes.func.isRequired,
};
