import Image from 'next/image';
import { ICategoryType } from '@/mocks/types';
import icon from '../../../assets/icons/logo.svg';
import { StyledHeroCategories } from './HeroCategories.styles';

const HeroCategories = ({
  categories,
}: {
  categories: Array<ICategoryType>;
}) => {
  const categoriesTitles: Array<string> = [];

  categories.forEach((category) =>
    categoriesTitles.push(category.attributes.title),
  );

  return (
    <StyledHeroCategories>
      <Image
        height='30'
        priority
        src={icon}
        alt=''
        style={{ position: 'relative', bottom: '-0.7rem' }}
      />{' '}
      {categoriesTitles.join(', ')}
    </StyledHeroCategories>
  );
};

export default HeroCategories;
