import { slogan } from '@/utils/data/data';
import { ICategoryTypes, IUserTypes } from '@/utils/data/types';
import { usePathname } from 'next/navigation';

// eslint-disable-next-line consistent-return
export const useSlogan = (data?: ICategoryTypes | IUserTypes) => {
  const pathname = usePathname();

  if (pathname === '/blog') {
    return slogan.blog;
  }

  if (pathname === '/about') {
    return slogan.about;
  }

  const dynamic = pathname.split('/').slice(1);
  const dynamicSlogan = {
    title: '',
    slogan:
      data && (data as ICategoryTypes).attributes && dynamic[0] === 'categories'
        ? (data as ICategoryTypes).attributes.description
        : '',
  };

  switch (dynamic[0]) {
    case 'categories':
      dynamicSlogan.title = `Category ${(data && (data as ICategoryTypes).attributes && (data as ICategoryTypes).attributes.title) || ''}`;
      return dynamicSlogan;
    case 'authors':
      dynamicSlogan.title = `${(data && (data as IUserTypes).username) || ''}'s articles`;
      return dynamicSlogan;
    default:
      break;
  }
};
