import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { db } from './db.ts';
import { faker } from '@faker-js/faker';

declare global {
  interface Window {
    mocks: unknown;
  }
}

export const worker = setupWorker(...handlers);

let counter = 5;

const createCategories = () => {
  for (let i = 0; i < faker.number.int({ min: 3, max: 6 }); i += 1) {
    db.category.create({ id: counter });
    counter += 1;
  }
};

const createComments = () => {
  for (let i = 0; i < faker.number.int({ min: 30, max: 300 }); i += 1) {
    db.comment.create({ id: counter });
    counter += 1;
  }
};

const createArticles = () => {
  for (let i = 0; i < faker.number.int({ min: 50, max: 500 }); i += 1) {
    db.article.create({ id: counter });
    counter += 1;
  }
};

const createUsers = () => {
  for (let i = 0; i < faker.number.int({ min: 5, max: 30 }); i += 1) {
    db.user.create({ id: counter });
    counter += 1;
  }
};

createComments();
createCategories();
createUsers();
createArticles();

window.mocks = {
  createCategories,
  createUsers,
  createComments,
  createArticles,
  getUsers: () => db.user.getAll(),
  getArticles: () => db.article.getAll(),
  getComments: () => db.comment.getAll(),
  getCategories: () => db.category.getAll(),
};
