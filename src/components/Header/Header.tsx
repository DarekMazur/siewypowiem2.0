import HeroSection from '../HeroSection/HeroSection';
import MainNav from '../MainNav/MainNav';
import TitleWrapper from '../TitleWrapper/TitleWrapper';

const Header = () => {
  return (
    <header>
      <TitleWrapper />
      <MainNav />
      <HeroSection />
    </header>
  );
};

export default Header;
