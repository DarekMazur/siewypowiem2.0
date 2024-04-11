import SocialMenu from '../SocialMenu/SocialMenu';
import { StyledMainNav } from './MainNav.styles';
import MainNavList from './MainNavList/MainNavList';

const MainNav = () => {
  return (
    <StyledMainNav>
      <MainNavList />
      <SocialMenu />
    </StyledMainNav>
  );
};

export default MainNav;
