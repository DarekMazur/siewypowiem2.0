import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { StyledHeroSection } from './HeroSection.styles';

interface IHeroProps {
  sectionHeight: number;
}

const HeroSection: FC<IHeroProps> = ({ sectionHeight }) => {
  const handleClick = () => {
    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;

    return window.scrollTo(0, headerHeight);
  };

  return (
    <StyledHeroSection $sectionHeight={sectionHeight}>
      <p>Dolor Sit Amet</p>
      <FontAwesomeIcon
        role='button'
        icon={['fas', 'chevron-down']}
        onClick={handleClick}
      />
    </StyledHeroSection>
  );
};

export default HeroSection;
