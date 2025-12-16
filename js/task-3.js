function getElementWidth(content, padding, border) {
  const border_box = (content * 10 + padding * 2 * 10 + border * 2 * 10) / 10;
  return `border-box=${border_box}`;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
