import { forwardRef } from 'react';
import SocialMenu from '../SocialMenu/SocialMenu';
import MainNavList from './MainNavList/MainNavList';
import { StyledNavigation } from '../Navigatio/Navigatio.styles';

type Ref = HTMLElement;

const MainNavWrapper = forwardRef<Ref>((_, ref) => {
  return (
    <StyledNavigation ref={ref}>
      <MainNavList />
      <SocialMenu />
    </StyledNavigation>
  );
});

export default MainNavWrapper;
