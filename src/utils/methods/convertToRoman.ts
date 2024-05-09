/* eslint-disable consistent-return */
export const convertToRoman = (num: number | string) => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let result = '';
  let number = 0;

  if (typeof num === 'string') {
    if (!Number.isNaN(parseInt(num, 10))) {
      number = parseInt(num, 10);
    } else {
      return;
    }
  } else {
    number = num;
  }

  for (let i = 0; i < values.length; i += 1) {
    while (number >= values[i]) {
      result += symbols[i];
      number -= values[i];
    }
  }

  return result;
};
