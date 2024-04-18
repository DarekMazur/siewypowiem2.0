/* eslint-disable import/no-extraneous-dependencies */
import { http, HttpResponse } from 'msw';
import { db } from '../db';

const capitalizeeFirstLetter = (string: string) => {
  const getFirstLetter = string.charAt(0).toUpperCase();
  const capitalizedString = getFirstLetter + string.slice(1);

  return capitalizedString;
};

export const handlers = [
  http.get('/api/comments', () => {
    return HttpResponse.json(db.comment.getAll());
  }),
  http.get('/api/users', () => {
    return HttpResponse.json(db.user.getAll());
  }),
  http.get('/api/articles', async ({ request }) => {
    const url = await new URL(request.url);

    const pageSize = Number(url.searchParams.get('pagination[pageSize]')) || 25;
    const currentPage = Number(url.searchParams.get('pagination[page]')) || 1;

    console.log(pageSize);

    const articles = db.article.getAll();
    articles.sort((a, b) => {
      const dateA = a.attributes.publishedAt
        ? new Date(a.attributes.publishedAt).getTime()
        : 0;
      const dateB = b.attributes.publishedAt
        ? new Date(b.attributes.publishedAt).getTime()
        : 0;
      return dateA - dateB;
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseModel: any = {
      data: [],
      meta: {
        pagination: {
          page: currentPage || 1,
          pageSize,
          pageCount: Math.ceil(db.article.count() / pageSize),
          total: db.article.count(),
        },
      },
    };

    articles.forEach((article) => {
      const categories: Array<{ attributes: { title: string } }> = [];

      if (
        article.attributes.categories &&
        article.attributes.categories.length > 0
      ) {
        article.attributes.categories.forEach((category) => {
          const mockCategory = {
            attributes: {
              title: capitalizeeFirstLetter(
                category.attributes.title as string,
              ),
            },
          };
          categories.push(mockCategory);
        });
      }

      responseModel.data.push({
        id: article.id,
        attributes: {
          uuid: article.attributes.uuid,
          createdAt: article.attributes.createdAt,
          updatedAt: article.attributes.updatedAt,
          publishedAt: article.attributes.publishedAt,
          isSticky: article.attributes.isSticky,
          title: article.attributes.title,
          description: article.attributes.description,
          likes: article.attributes.likes,
          tags: article.attributes.tags,
          body: article.attributes.body,
          cover: article.attributes.cover,
          categories,
          author: {
            id: article.attributes.author?.id,
            username: article.attributes.author?.username,
            email: article.attributes.author?.email,
            blocked: article.attributes.author?.blocked,
            avatar: {
              name: article.attributes.author?.avatar.name,
              url: article.attributes.author?.avatar.url,
            },
          },
        },
      });
    });

    if (pageSize) {
      const res = {
        data: [
          ...responseModel.data.slice(
            ((currentPage || 1) - 1) * pageSize + (currentPage === 1 ? 0 : 1),
            (currentPage || 1) * pageSize,
          ),
        ],
        meta: { ...responseModel.meta },
      };
      console.log(res);
      return HttpResponse.json(res);
    }

    return HttpResponse.json(responseModel);
  }),

  http.get('/api/categories', () => {
    return HttpResponse.json(db.category.getAll());
  }),

  http.get('/api/categories', () => {
    return HttpResponse.json(db.category.getAll());
  }),

  http.get('https://graph.instagram.com/6971679376294579/media', () => {
    const res = db.instagram.getAll();
    return HttpResponse.json({ data: [...res] });
  }),
];
