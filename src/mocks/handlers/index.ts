/* eslint-disable import/no-extraneous-dependencies */
import { http, HttpResponse } from 'msw';
import { db } from '../db';

export const handlers = [
  http.get('/api/comments', () => {
    return HttpResponse.json(db.comment.getAll());
  }),
  http.get('/api/users', () => {
    return HttpResponse.json(db.user.getAll());
  }),
  http.get('/api/articles', async ({ request }) => {
    const url = await new URL(request.url);

    const pageSize = url.searchParams.get('pagination[pageSize]');
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
    const responseModel: any = { data: [] };

    articles.forEach((article) =>
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
      }),
    );

    if (pageSize) {
      const res = { data: [...responseModel.data.slice(0, Number(pageSize))] };
      return HttpResponse.json(res);
    }

    return HttpResponse.json(responseModel);
  }),
  http.get('/api/categories', () => {
    return HttpResponse.json(db.category.getAll());
  }),
];
