import NavigationListItem from './NavigationListItem/NavigationListItem';
import { StyledNavigationList } from './NavigationList.styles';

const navList = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Item',
    url: '/item',
  },
];

const NavigationList = () => {
  return (
    <StyledNavigationList>
      {navList.map((item) => (
        <NavigationListItem key={item.name} name={item.name} url={item.url} />
      ))}
    </StyledNavigationList>
  );
};

export default NavigationList;
