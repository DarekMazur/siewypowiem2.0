import Link from 'next/link';
import Image from 'next/image';
import slugify from 'slugify';
import ArticleCategories from '@/components/Atoms/ArticleCategories/ArticleCategories';
import { stringityArray } from '@/utils/methods/stringifyArray';
import { IArticleTypes } from '@/utils/data/types';
import { RelatedThumb, StyledRelatedArticle } from './RelatedArticle.styles';

const RelatedArticle = ({ realted }: { realted: IArticleTypes }) => {
  return (
    <StyledRelatedArticle>
      <RelatedThumb>
        <Image
          src={realted.attributes.cover.data.attributes.url}
          alt={realted.attributes.title}
          fill
        />
      </RelatedThumb>
      <div>
        <h4>
          <Link href={slugify(realted.attributes.title, { lower: true })}>
            {realted.attributes.title}
          </Link>
        </h4>
        <ArticleCategories
          categories={stringityArray(realted.attributes.categories.data)}
        />
      </div>
    </StyledRelatedArticle>
  );
};

export default RelatedArticle;
