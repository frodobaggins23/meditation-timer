const countMeDown = initialTime => {
  console.log(initialTime);
  return setInterval(() => initialTime--, 1000);
};

export { countMeDown };
