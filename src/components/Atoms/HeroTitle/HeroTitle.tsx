import { highlightText } from '@/utils/highlightText';
import { Highlighted } from '../Highlighted/Highlighted.styles';
import { StyledHeroTitle } from './HeroTitle.styles';

const HeroTitle = ({ title }: { title: string }) => {
  return (
    <StyledHeroTitle role='link'>
      <Highlighted>{highlightText(title)[0]}</Highlighted>{' '}
      {highlightText(title)[1]}
    </StyledHeroTitle>
  );
};

export default HeroTitle;
