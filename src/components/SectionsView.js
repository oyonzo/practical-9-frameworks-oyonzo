/*
  SectionsView.js

  This module displays the sections and reports when a user clicks on one.

  props:
    sections - an array of section names
    setCurrentSection - a callback that expects a section as an argument

*/
import PropTypes from "prop-types";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function SectionsView({
  sections,
  setCurrentSection,
  currentSection,
}) {
  const sortedSections = [...sections].sort();

  const handleChange = (event, newSection) => {
    setCurrentSection(newSection);
  };

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        exclusive
        onChange={handleChange}
        value={currentSection}
        size="small"
      >
        {sortedSections.map((section) => (
          <ToggleButton key={section} data-testid="section" value={section}>
            {section}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

SectionsView.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentSection: PropTypes.func.isRequired,
  currentSection: PropTypes.string,
};
