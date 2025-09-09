function titleCase(str) {
  return str
    .split(" ")
    .reduce((titled, currStr) => {
      titled.push(currStr.slice(0, 1).toUpperCase() + currStr.slice(1));
      return titled;
    }, [])
    .join(" ");
}

module.exports = titleCase;
