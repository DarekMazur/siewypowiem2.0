import { createRef, useEffect, useState } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import MainNav from '../MainNav/MainNav';
import TitleWrapper from '../TitleWrapper/TitleWrapper';
import { StyledHeader } from './Header.styles';

const Header = () => {
  const titleRef = createRef<HTMLDivElement>();
  const navRef = createRef<HTMLElement>();

  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    if (titleRef.current && navRef.current) {
      setHeaderTop(
        (titleRef.current as HTMLElement).offsetHeight +
          (navRef.current as HTMLElement).offsetHeight,
      );
    }
  }, [titleRef, navRef]);

  return (
    <StyledHeader>
      <TitleWrapper ref={titleRef} />
      <MainNav ref={navRef} />
      <HeroSection sectionHeight={window.innerHeight - headerTop} />
    </StyledHeader>
  );
};

export default Header;
