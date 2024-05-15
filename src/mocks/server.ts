/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import { faker } from '@faker-js/faker';
import {
  IArticleTypes,
  ICategoryTypes,
  ICommentTypes,
  IUserTypes,
} from '@/utils/data/types';
import { handlers } from './handlers';
import { db } from './db';

export const server = setupServer(...handlers);

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});

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

const comments = db.comment.getAll();
const users = db.user.getAll();
const categories = db.category.getAll();
const articles = db.article.getAll();

const getID = (model: 'user' | 'article' | 'comment' | 'category') => {
  const length = db[model].count();

  const element = db[model].getAll()[Math.floor(Math.random() * length)];

  return element.id;
};

const updateComments = () => {
  comments.forEach((comment) => {
    const author = db.user.findFirst({
      where: {
        id: {
          equals: getID('user'),
        },
      },
    });

    const commentedArticle = db.article.findFirst({
      where: {
        id: {
          equals: getID('article'),
        },
      },
    });

    db.comment.update({
      where: {
        id: {
          equals: comment.id,
        },
      },
      data: {
        attributes: {
          author: author as any | IUserTypes, // eslint-disable-line @typescript-eslint/no-explicit-any
          article: commentedArticle as any | IArticleTypes, // eslint-disable-line @typescript-eslint/no-explicit-any
        },
      },
    });
  });
};

const updateArticles = () => {
  articles.forEach((article) => {
    const articleCategories = [];
    const articleComments = db.comment.findMany({
      where: {
        attributes: {
          article: {
            id: {
              equals: article.id,
            },
          },
        },
      },
    });

    for (
      let i = 0;
      i < Math.floor(Math.random() * db.category.count());
      i += 1
    ) {
      const randomCategoryID = Math.floor(
        Math.random() * (db.category.count() + 1),
      );
      if (categories[randomCategoryID]) {
        articleCategories.push(categories[randomCategoryID]);
      }
    }

    const author = db.user.findFirst({
      where: {
        id: {
          equals: getID('user'),
        },
      },
    });

    db.article.update({
      where: {
        id: {
          equals: article.id,
        },
      },
      data: {
        attributes: {
          author: author as any | IUserTypes, // eslint-disable-line @typescript-eslint/no-explicit-any
          categories: articleCategories as any | Array<ICategoryTypes>, // eslint-disable-line @typescript-eslint/no-explicit-any
          comments: articleComments || ([] as any | Array<ICommentTypes>), // eslint-disable-line @typescript-eslint/no-explicit-any
        },
      },
    });
  });
};

const updateCategories = () => {
  db.article.getAll().forEach((article) => {
    const categoriesList: Array<number> = [];

    if (
      article.attributes.categories &&
      article.attributes.categories.length > 0
    ) {
      article.attributes.categories.forEach((category) => {
        categoriesList.push(category.id);
      });
    }
    db.category.updateMany({
      where: {
        id: {
          in: categoriesList,
        },
      },
      data: {
        attributes: {
          articles: (prevList) => [...prevList, article],
        },
      },
    });
  });
};

const updateUsers = () => {
  users.forEach((author) => {
    const articlesList = db.article.findMany({
      where: {
        attributes: {
          author: {
            id: {
              equals: author.id,
            },
          },
        },
      },
    });

    const commetsList = db.comment.findMany({
      where: {
        attributes: {
          author: {
            id: {
              equals: author.id,
            },
          },
        },
      },
    });

    db.user.update({
      where: {
        id: {
          equals: author.id,
        },
      },
      data: {
        articles: articlesList || [],
        comments: commetsList || [],
      },
    });
  });
};

updateComments();
updateArticles();
updateCategories();
updateUsers();
