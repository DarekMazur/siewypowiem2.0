import { slogan } from '@/utils/data';
import { ICategoryTypes, IUserTypes } from '@/utils/types';
import { usePathname } from 'next/navigation';

// eslint-disable-next-line consistent-return
export const useSlogan = (data?: ICategoryTypes | IUserTypes) => {
  const pathname = usePathname();

  if (pathname === '/blog') {
    return slogan.blog;
  }

  const dynamic = pathname.split('/').slice(1);
  const dynamicSlogan = {
    title: '',
    slogan:
      data && data.attributes && dynamic[0] === 'categories'
        ? data.attributes.description
        : '',
  };

  switch (dynamic[0]) {
    case 'categories':
      dynamicSlogan.title = `Category ${(data && data.attributes && data.attributes.title) || ''}`;
      return dynamicSlogan;
    case 'authors':
      dynamicSlogan.title = `About ${(data && data.username) || ''}`;
      return dynamicSlogan;
    default:
      break;
  }
};
