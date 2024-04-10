import HeroSection from '../HeroSection/HeroSection';
import MainNav from '../MainNav/MainNav';
import TitleWrapper from '../TitleWrapper/TitleWrapper';
import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <TitleWrapper />
      <MainNav />
      <HeroSection />
    </StyledHeader>
  );
};

export default Header;
