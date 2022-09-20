export const findSum = (array) => {
  const totalSum = array.reduce((acc, item) => {
    return acc + item.discountedPrice;
  }, 0);
  return totalSum;
};
