import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styled from 'styled-components';

interface IHeroProps {
  sectionHeight: number;
}

const HeroSection: FC<IHeroProps> = ({ sectionHeight }) => {
  const handleClick = () => {
    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;

    return window.scrollTo(0, headerHeight);
  };

  const StyledHeroSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${sectionHeight}px;
    z-index: 1;

    svg {
      position: absolute;
      bottom: 4rem;
      transition: transform 100ms ease-in-out;
      color: ${({ theme }) => theme.colors.orange};
      font-size: ${({ theme }) => theme.fontSize.xl};

      &:hover {
        transform: scale(1.3);
      }
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      background: linear-gradient(
        180deg,
        rgba(252, 252, 255, 0) 50%,
        rgba(252, 252, 255, 1) 95%,
        rgba(252, 252, 255, 1) 100%
      );
      z-index: -1;
    }
  `;

  return (
    <StyledHeroSection>
      <p style={{ margin: '0' }}>Dolor Sit Amet</p>
      <FontAwesomeIcon
        role='button'
        icon={['fas', 'chevron-down']}
        onClick={handleClick}
      />
    </StyledHeroSection>
  );
};

export default HeroSection;
