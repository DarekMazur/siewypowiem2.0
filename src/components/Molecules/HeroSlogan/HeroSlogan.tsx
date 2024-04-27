import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import HeroTitle from '@/components/Atoms/HeroTitle/HeroTitle';
import { useSlogan } from '@/hooks/useSlogan';
import { usePathname } from 'next/navigation';
import { useGetCategoriesQuery, useGetUsersQuery } from '@/store';
import slugify from 'slugify';
import { ICategoryTypes, IUserTypes } from '@/utils/types';
import { StyledHeroArticle } from '../HeroArticle/HeroArticle.styles';

const HeroSlogan = () => {
  const pathname = usePathname();
  const { data: categories } = useGetCategoriesQuery({ pageSize: 25, page: 1 });
  const { data: users } = useGetUsersQuery({ pageSize: 25, page: 1 });

  let sloganData: IUserTypes | ICategoryTypes | undefined;

  if (pathname.includes('categories') && categories) {
    sloganData = {
      ...categories.data.filter(
        (category) =>
          slugify(category.attributes.title, { lower: true }) ===
          pathname.split('/').slice(1)[1],
      )[0],
    };
  } else if (pathname.includes('authors') && users) {
    sloganData = {
      ...users.filter(
        (user) =>
          slugify(user.username, { lower: true }) ===
          pathname.split('/').slice(1)[1],
      )[0],
    };
  }

  const slogan = useSlogan(sloganData);

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
