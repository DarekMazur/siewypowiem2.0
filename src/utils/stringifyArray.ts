import { ICategoryType } from '@/mocks/types';

export const stringityArray = (list: Array<ICategoryType>) => {
  const stringify: Array<string> = [];

  list.forEach((listItem) => stringify.push(listItem.attributes.title));

  return stringify.join(', ');
};
