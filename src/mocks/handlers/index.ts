/* eslint-disable @typescript-eslint/no-explicit-any */
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

  http.get('/api/users', async ({ request }) => {
    const url = await new URL(request.url);

    const pageSize = Number(url.searchParams.get('pagination[pageSize]')) || 25;
    const currentPage = Number(url.searchParams.get('pagination[page]')) || 1;

    const users = db.user.getAll();
    users.sort((a, b) => {
      const dateA = a.username as string;
      const dateB = b.username as string;

      if (dateA < dateB) {
        return -1;
      }

      if (dateA > dateB) {
        return 1;
      }

      return 0;
    });

    const responseModel: any = {
      data: [],
      meta: {
        pagination: {
          page: currentPage || 1,
          pageSize,
          pageCount: Math.ceil(db.user.count() / pageSize),
          total: db.user.count(),
        },
      },
    };

    users.forEach((user) => {
      const articles: Array<{ attributes: { title: string } }> = [];
      const comments: Array<{ id: number }> = [];

      if (user.articles && user.articles.length > 0) {
        user.articles.forEach((article) => {
          const mockArticle = {
            attributes: {
              title: article.attributes.title as string,
            },
          };
          articles.push(mockArticle);
        });
      }

      if (user.comments && user.comments.length > 0) {
        user.comments.forEach((comment) => {
          const mockComment = {
            id: comment.id as number,
          };
          comments.push(mockComment);
        });
      }

      responseModel.data.push({
        id: user.id,
        username: user.username,
        email: user.email,
        confirmed: user.confirmed,
        blocked: user.blocked,
        uuid: user.uuid,
        role: user.role,
        articles: [],
        comments: [],
        avatar: {
          name: user.avatar.name,
          url: user.avatar.url,
        },
      });
    });

    if (pageSize) {
      const res = {
        data: [
          ...responseModel.data.slice(
            ((currentPage || 1) - 1) * pageSize,
            (currentPage || 1) * pageSize,
          ),
        ],
        meta: { ...responseModel.meta },
      };
      return HttpResponse.json(res);
    }

    return HttpResponse.json(responseModel);
  }),

  http.get('/api/articles', async ({ request }) => {
    const url = await new URL(request.url);

    const pageSize = Number(url.searchParams.get('pagination[pageSize]')) || 25;
    const currentPage = Number(url.searchParams.get('pagination[page]')) || 1;
    const sort = url.searchParams.get('sort');
    const filter = url.searchParams.get('filters[isSticky][$eq]');

    const sortValue = sort?.split(':')[0];
    const sortDirection = sort?.split(':')[1];

    let articles = db.article.getAll();

    if (filter) {
      articles = [...articles.filter((article) => article.attributes.isSticky)];
    }

    articles.sort((a, b) => {
      let sortA: string | number | Date = '';
      let sortB: string | number | Date = '';

      if (sortValue === 'publishedAt') {
        sortA = a.attributes.publishedAt
          ? new Date(a.attributes.publishedAt).getTime()
          : 0;
        sortB = b.attributes.publishedAt
          ? new Date(b.attributes.publishedAt).getTime()
          : 0;
      }

      if (sortValue) {
        sortA = a.attributes.title || 0;
        sortB = b.attributes.title || 0;
      }

      if (sortA < sortB) {
        return sortDirection === 'desc' ? 1 : -1;
      }

      if (sortA > sortB) {
        return sortDirection === 'desc' ? -1 : 1;
      }

      return 0;
    });

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
      const categories: Array<{ attributes: { title: string }; id: number }> =
        [];

      if (
        article.attributes.categories &&
        article.attributes.categories.length > 0
      ) {
        article.attributes.categories.forEach((category) => {
          const mockCategory = {
            id: category.id,
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
            uuid: article.attributes.author?.uuid,
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
            ((currentPage || 1) - 1) * pageSize,
            (currentPage || 1) * pageSize,
          ),
        ],
        meta: { ...responseModel.meta },
      };
      return HttpResponse.json(res);
    }

    return HttpResponse.json(responseModel);
  }),

  http.get('/api/categories', async ({ request }) => {
    const url = await new URL(request.url);

    console.log('load!');

    const pageSize = Number(url.searchParams.get('pagination[pageSize]')) || 25;
    const currentPage = Number(url.searchParams.get('pagination[page]')) || 1;

    const categories = db.category.getAll();
    categories.sort((a, b) => {
      const dateA = a.attributes.title as string;
      const dateB = b.attributes.title as string;

      if (dateA < dateB) {
        return -1;
      }

      if (dateA > dateB) {
        return 1;
      }

      return 0;
    });

    const responseModel: any = {
      data: [],
      meta: {
        pagination: {
          page: currentPage || 1,
          pageSize,
          pageCount: Math.ceil(db.category.count() / pageSize),
          total: db.category.count(),
        },
      },
    };

    categories.forEach((category) => {
      const articles: Array<{ attributes: { title: string } }> = [];

      if (
        category.attributes.articles &&
        category.attributes.articles.length > 0
      ) {
        category.attributes.articles.forEach((article) => {
          const mockArticle = {
            attributes: {
              title: article.attributes.title as string,
            },
          };
          articles.push(mockArticle);
        });
      }

      responseModel.data.push({
        id: category.id,
        attributes: {
          title: category.attributes.title,
          uuid: category.attributes.uuid,
          description: category.attributes.description,
          articles,
        },
      });
    });

    if (pageSize) {
      const res = {
        data: [
          ...responseModel.data.slice(
            ((currentPage || 1) - 1) * pageSize,
            (currentPage || 1) * pageSize,
          ),
        ],
        meta: { ...responseModel.meta },
      };
      return HttpResponse.json(res);
    }

    return HttpResponse.json(responseModel);
  }),

  http.get('https://graph.instagram.com/6971679376294579/media', () => {
    const res = db.instagram.getAll();
    return HttpResponse.json({ data: [...res] });
  }),
];
