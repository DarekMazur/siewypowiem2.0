import { useGetArticlesQuery } from '@/store';
import { IArticleTypes } from '@/utils/types';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import slugify from 'slugify';

export const useArticleInfo = () => {
  const pathname = usePathname();
  const { data: articles } = useGetArticlesQuery({ pageSize: 9999 });
  const [current, setCurrent] = useState<IArticleTypes>();

  useEffect(() => {
    if (articles) {
      setCurrent(
        articles.data.filter(
          (article) =>
            slugify(article.attributes.title, { lower: true }) ===
            pathname.split('/').slice(1)[1],
        )[0],
      );
    }
  }, [articles, pathname]);

  const cover = current?.attributes.cover.data.attributes.url;
  const uuid = current?.attributes.uuid;

  return { cover, uuid };
};
