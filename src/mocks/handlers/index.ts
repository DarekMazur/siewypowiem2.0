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
  http.get('/api/articles', () => {
    return HttpResponse.json(db.article.getAll());
  }),
  http.get('/api/categories', () => {
    return HttpResponse.json(db.category.getAll());
  }),
];
