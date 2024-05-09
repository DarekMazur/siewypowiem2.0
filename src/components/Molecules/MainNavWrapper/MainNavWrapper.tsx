import { forwardRef, useState } from 'react';
import Hamburger from '@/components/Atoms/Hamburger/Hamburger';
import SocialMenu from '../SocialMenu/SocialMenu';
import NavigationList from '../NavigationList/NavigationList';
import { StyledNavigation } from '../Navigation/Navigation.styles';

type Ref = HTMLElement;

const MainNavWrapper = forwardRef<Ref>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Hamburger handleClick={handleOpenMenu} isOpen={isOpen} />
      <StyledNavigation ref={ref} $isOpen={isOpen}>
        <NavigationList />
        <SocialMenu />
      </StyledNavigation>
    </>
  );
});

export default MainNavWrapper;
