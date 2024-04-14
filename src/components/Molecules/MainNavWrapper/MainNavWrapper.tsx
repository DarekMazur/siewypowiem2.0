import { forwardRef } from 'react';
import SocialMenu from '../SocialMenu/SocialMenu';
import NavigationList from '../NavigationList/NavigationList';
import { StyledNavigation } from '../Navigation/Navigation.styles';

type Ref = HTMLElement;

const MainNavWrapper = forwardRef<Ref>((_, ref) => {
  return (
    <StyledNavigation ref={ref}>
      <NavigationList />
      <SocialMenu />
    </StyledNavigation>
  );
});

export default MainNavWrapper;
