import MainNavListItem from './MainNavLIstItem/MainNavListItem';
import { StyledMainNavList } from './MainNavList.styles';

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

const MainNavList = () => {
  return (
    <StyledMainNavList>
      {navList.map((item) => (
        <MainNavListItem key={item.name} name={item.name} url={item.url} />
      ))}
    </StyledMainNavList>
  );
};

export default MainNavList;
