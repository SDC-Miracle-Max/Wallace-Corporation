import React from 'react';
import StyleButtons from './StyleButtons';

const AllStylesForProduct = (props) => {
  // Map over all possible styles and place in a button
  // Keep the hardcoded "Style: ", but will need text update next to it depending on style selected
  // Make a checkmark overlay to indicate which button/style is currently selected
  // Ensure button is disabled after the first click and re-enables if another button is clicked
  // Ensure only one button can be selected at a time
  // Ensure a default style is selected on page load
  const { stylesArr } = props;

  // console.log('stylesArr in OverviewStyles: ', stylesArr);

  // has default? with one set to true and the rest to false
  // has name: for name of style
  // has photos array for thumbnail urls used to populate the thumbnails overlay
  // has a style_id number

  return (
    <>
      {stylesArr.map((styleName, index) => <StyleButtons styleName={styleName} />)}
    </>
  );
};

export default AllStylesForProduct;
