import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { StyledNavigationListItem } from './NavigationListItem.styles';

interface INavigationListItem {
  name: string;
  url: string;
  color?:
    | 'white'
    | 'grey'
    | 'transparentGrey'
    | 'orange'
    | 'black'
    | 'blue'
    | 'brown'
    | 'red'
    | 'glassBgr'
    | 'glassShadow';
}

const NavigationListItem: FC<INavigationListItem> = ({ name, url, color }) => {
  const pathname = usePathname();

  return (
    <StyledNavigationListItem $isCurrent={pathname === url} $color={color}>
      <Link href={url}>{name}</Link>
    </StyledNavigationListItem>
  );
};

export default NavigationListItem;
