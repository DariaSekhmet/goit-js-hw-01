function getElementWidth(content, padding, border) {
  const overallWidth =
    parseFloat(content) + parseFloat(border) * 2 + parseFloat(padding) * 2;
  console.log(overallWidth);
  return overallWidth;
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
