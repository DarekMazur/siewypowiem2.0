import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { StyledNavigationListItem } from './NavigationListItem.styles';

interface INavigationListItem {
  name: string;
  url: string;
}

const NavigationListItem: FC<INavigationListItem> = ({ name, url }) => {
  const pathname = usePathname();

  return (
    <StyledNavigationListItem $isCurrent={pathname === url}>
      <Link href={url}>{name}</Link>
    </StyledNavigationListItem>
  );
};

export default NavigationListItem;
