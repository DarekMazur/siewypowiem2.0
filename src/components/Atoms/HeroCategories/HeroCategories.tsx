import Image from 'next/image';
import slugify from 'slugify';
import { ICategoryTypes } from '@/utils/data/types';
import icon from '../../../assets/icons/logo.svg';
import { StyledHeroCategories } from './HeroCategories.styles';
import { StyledLink } from '../Link/Link.styles';

const HeroCategories = ({
  categories,
}: {
  categories: Array<ICategoryTypes> | string;
}) => {
  const categoriesTitles: Array<string> = [];

  if (typeof categories !== 'string') {
    categories.forEach((category) =>
      categoriesTitles.push(category.attributes.title),
    );
  }

  return (
    <StyledHeroCategories>
      <Image
        height='30'
        priority
        src={icon}
        alt=''
        style={{ position: 'relative', bottom: '-0.7rem' }}
      />{' '}
      {categoriesTitles.length > 0
        ? categoriesTitles.map((category, index) => (
            <StyledLink
              key={category}
              href={`/categories/${slugify(category, { lower: true })}`}
              target='_blank'
              rel='noreferer'
              style={{ padding: '0 0.5rem' }}
            >
              {category}
              {index < categoriesTitles.length - 1 ? ',' : null}
            </StyledLink>
          ))
        : (categories as string)}
    </StyledHeroCategories>
  );
};

export default HeroCategories;
