import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useGetLastArticleQuery } from '@/store';
import { StyledHeroSection } from './HeroSection.styles';
import Loader from '../Loader/Loader';
import HeroArticle from '../HeroArticle/HeroArticle';

interface IHeroProps {
  sectionHeight: number;
}

const HeroSection: FC<IHeroProps> = ({ sectionHeight }) => {
  const handleClick = () => {
    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;

    return window.scrollTo(0, headerHeight);
  };

  const { data: article, isLoading, error } = useGetLastArticleQuery();

  return (
    <StyledHeroSection $sectionHeight={sectionHeight}>
      <Loader isLoading={isLoading} isError={!!error} isReady={!!article} />
      <HeroArticle />
      <FontAwesomeIcon
        role='button'
        icon={['fas', 'chevron-down']}
        onClick={handleClick}
      />
    </StyledHeroSection>
  );
};

export default HeroSection;
