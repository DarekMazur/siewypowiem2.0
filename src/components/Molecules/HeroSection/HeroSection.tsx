import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useGetLastArticleQuery } from '@/store';
import { dateFormat } from '@/utils/dateFormat';
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

  const { data: article, isLoading } = useGetLastArticleQuery();

  return (
    <StyledHeroSection $sectionHeight={sectionHeight}>
      {isLoading && !article ? (
        <p>loading</p>
      ) : article ? (
        <>
          <p>{article[0].attributes.title}</p>
          <p>by {article[0].attributes.author.username}</p>
          <p>{dateFormat(article[0].attributes.publishedAt)}</p>
        </>
      ) : (
        <p>Nothing to see...</p>
      )}
      <FontAwesomeIcon
        role='button'
        icon={['fas', 'chevron-down']}
        onClick={handleClick}
      />
    </StyledHeroSection>
  );
};

export default HeroSection;
