const capitalize = word => {
  if (word) {
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
};

module.exports = capitalize;
