const procentCalculator = (words) => {
  let counter = 0;
  words.map((item) => {
    if (item.isLearned === true) {
      counter++;
      return item;
    } else {
      return item;
    }
  });
  return Math.round((counter / words.length) * 100);
};

export default procentCalculator;
