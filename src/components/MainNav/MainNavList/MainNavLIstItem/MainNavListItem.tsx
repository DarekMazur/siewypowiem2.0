import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { StyledMainNavListItem } from './MainNavListItem.styles';

interface IMainNavListItem {
  name: string;
  url: string;
}

const MainNavListItem: FC<IMainNavListItem> = ({ name, url }) => {
  const pathname = usePathname();

  return (
    <StyledMainNavListItem $isCurrent={pathname === url}>
      <Link href={url}>{name}</Link>
    </StyledMainNavListItem>
  );
};

export default MainNavListItem;
