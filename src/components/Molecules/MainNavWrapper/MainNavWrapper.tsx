import { forwardRef } from 'react';
import SocialMenu from '../SocialMenu/SocialMenu';
import { StyledMainNav } from './MainNav.styles';
import MainNavList from './MainNavList/MainNavList';

type Ref = HTMLElement;

const MainNavWrapper = forwardRef<Ref>((_, ref) => {
  return (
    <StyledMainNav ref={ref}>
      <MainNavList />
      <SocialMenu />
    </StyledMainNav>
  );
});

export default MainNavWrapper;
