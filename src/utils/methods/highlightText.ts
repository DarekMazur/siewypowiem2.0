export const highlightText = (string: string) => {
  let splitWords = string.split(' ');
  const highlitedPart = [];

  if (splitWords.length > 3) {
    highlitedPart.push(splitWords[0], splitWords[1]);
    splitWords = splitWords.slice(2);
  } else if (splitWords.length > 1) {
    highlitedPart.push(splitWords[0]);
    splitWords = splitWords.slice(1);
  }

  return [highlitedPart.join(' '), splitWords.join(' ')];
};
