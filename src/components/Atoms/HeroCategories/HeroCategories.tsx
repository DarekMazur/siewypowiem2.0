import Image from 'next/image';
import slugify from 'slugify';
import { ICategoryTypes } from '@/utils/types';
import icon from '../../../assets/icons/logo.svg';
import { StyledHeroCategories } from './HeroCategories.styles';
import { StyledLink } from '../Link/Link.styles';

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
      {categoriesTitles.map((category, index) => (
        <StyledLink
          href={`/categories/${slugify(category, { lower: true })}`}
          target='_blank'
          rel='noreferer'
          style={{ padding: '0 0.5rem' }}
        >
          {category}
          {index < categoriesTitles.length - 1 ? ',' : null}
        </StyledLink>
      ))}
    </StyledHeroCategories>
  );
};

export default HeroCategories;
