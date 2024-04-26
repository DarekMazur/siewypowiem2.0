import Image from 'next/image';
import icon from '../../../assets/icons/logo.svg';
import { StyledHeroCategories } from './HeroCategories.styles';
import { ICategoryTypes } from '@/utils/types';

const HeroCategories = ({
  categories,
}: {
  categories: Array<ICategoryTypes>;
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
