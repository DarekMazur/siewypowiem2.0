import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import HeroTitle from '@/components/Atoms/HeroTitle/HeroTitle';
import { useSlogan } from '@/hooks/useSlogan';
import { StyledHeroArticle } from '../HeroArticle/HeroArticle.styles';

const HeroSlogan = () => {
  const slogan = useSlogan();

  return (
    <StyledHeroArticle>
      {slogan ? (
        <>
          <HeroTitle title={slogan.title} />
          <Handwritting>{slogan.slogan}</Handwritting>
        </>
      ) : null}
    </StyledHeroArticle>
  );
};

export default HeroSlogan;
