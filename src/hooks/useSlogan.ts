import { slogan } from '@/utils/data';
import { usePathname } from 'next/navigation';

// eslint-disable-next-line consistent-return
export const useSlogan = () => {
  const pathname = usePathname();

  switch (pathname) {
    case '/blog':
      return slogan.blog;
    default:
      break;
  }
};
