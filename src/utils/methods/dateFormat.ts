export const dateFormat = (date: Date | string) => {
  const dateToConvert = typeof date === 'string' ? new Date(date) : date;

  const months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${dateToConvert.getDate()} ${months[dateToConvert.getMonth()]} ${dateToConvert.getFullYear()}`;
};
