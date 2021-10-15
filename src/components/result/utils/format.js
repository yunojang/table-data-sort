export const formatResult = (number) => {
  const string = String(number);
  const fractionalPart = string.split(".")[1];

  if (fractionalPart.length > 5) {
    return number.toFixed(5);
  }

  return number;
};
