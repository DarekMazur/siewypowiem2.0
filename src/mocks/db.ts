/* eslint-disable import/no-extraneous-dependencies */
import { faker } from '@faker-js/faker';
import { factory, oneOf, manyOf, primaryKey, nullable } from '@mswjs/data';

faker.seed(123);

export const roles = [
  {
    id: 1,
    name: 'Administrator',
    description: 'Page admin',
    type: 'admin',
  },
  {
    id: 2,
    name: 'Redactor',
    description: 'Blog redactor',
    type: 'redactor',
  },
  {
    id: 3,
    name: 'Creator',
    description: 'Content creator',
    type: 'creator',
  },
  {
    id: 4,
    name: 'Authenticated',
    description: 'User',
    type: 'authenticated',
  },
];

export const db = factory({
  user: {
    id: () => faker.number.int(),
    username: () =>
      faker.helpers.fake(`{{person.firstName}} {{person.lastName}}`),
    email: () => faker.internet.email(),
    confirmed: () => faker.datatype.boolean(0.8),
    blocked: () => faker.datatype.boolean(0.15),
    uuid: primaryKey(faker.string.uuid),
    role: () => roles[faker.number.int({ min: 0, max: roles.length - 1 })],
    articles: manyOf('article'),
    comments: manyOf('comment'),
    avatar: {
      name: () => faker.lorem.words({ min: 1, max: 2 }),
      url: () => faker.image.avatar(),
    },
  },

  comment: {
    id: primaryKey(faker.number.int),
    attributes: {
      body: () => faker.lorem.sentence({ min: 1, max: 20 }),
      uuid: () => faker.string.uuid(),
      shadowed: () => faker.datatype.boolean(0.02),
      author: oneOf('user'),
      article: oneOf('article'),
    },
  },

  article: {
    id: primaryKey(faker.number.int),
    attributes: {
      uuid: () => faker.string.uuid(),
      createdAt: () => faker.date.past(),
      updatedAt: () => faker.date.recent(),
      publishedAt: nullable<Date>(faker.date.recent),
      isSticky: () => faker.datatype.boolean(0.3),
      title: () => faker.lorem.sentence({ min: 2, max: 6 }),
      description: () => faker.lorem.words({ min: 0, max: 14 }),
      likes: () => faker.number.int({ min: 0, max: 500 }),
      tags: () =>
        faker.helpers.fake('{{word.sample}}, {{word.sample}}, {{word.sample}}'),
      body: () => faker.lorem.paragraphs({ min: 5, max: 29 }),
      cover: {
        data: {
          attributes: {
            name: () => faker.lorem.words({ min: 1, max: 2 }),
            url: () => faker.image.url(),
          },
        },
      },
      categories: manyOf('category'),
      author: oneOf('user'),
      comments: manyOf('comment'),
    },
  },

  category: {
    id: primaryKey(faker.number.int),
    attributes: {
      title: () => faker.lorem.words({ min: 1, max: 2 }),
      uuid: () => faker.string.uuid(),
      description: () => faker.lorem.words({ min: 0, max: 14 }),
      articles: manyOf('article'),
    },
  },
});
