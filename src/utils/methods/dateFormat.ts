export const dateFormat = (date: Date | string) => {
  const dateToConvert = typeof date === 'string' ? new Date(date) : date;

  const months: Array<string> = [
    'stycznia',
    'lutego',
    'marca',
    'kwietnia',
    'maja',
    'czerwca',
    'lipca',
    'sierpnia',
    'września',
    'października',
    'litopada',
    'grudnia',
  ];

  return `${dateToConvert.getDate()} ${months[dateToConvert.getMonth()]} ${dateToConvert.getFullYear()}`;
};
