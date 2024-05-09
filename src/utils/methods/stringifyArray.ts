import { ICategoryTypes } from '../data/types';

export const stringityArray = (list: Array<ICategoryTypes>) => {
  const stringify: Array<string> = [];

  list.forEach((listItem) => stringify.push(listItem.attributes.title));

  return stringify.join(', ');
};
