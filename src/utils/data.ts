// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

interface IDataTypes {
  username: string;
  bio: string;
  avatar: string;
}

export const data: IDataTypes = {
  username: faker.internet.userName(),
  bio: faker.person.bio(),
  avatar: faker.image.avatar(),
};

export const about = {
  name: faker.internet.userName(),
  image: faker.image.avatar(),
  body: `<p>${faker.lorem.paragraph({ min: 2, max: 10 })}</p><p>${faker.lorem.paragraph({ min: 2, max: 10 })}</p><p>${faker.lorem.paragraph({ min: 2, max: 10 })}</p><p>${faker.lorem.paragraph({ min: 2, max: 10 })}</p>`,
  inspirations: [
    {
      title: 'Lorem',
      url: '/',
    },
    {
      title: 'Ipsum',
      url: '/',
    },
  ],
  links: [
    {
      title: 'Dolor',
      url: '/',
    },
    {
      title: 'Sit amet',
      url: '/',
    },
  ],
};

export const slogan = {
  blog: {
    title: 'Blog',
    slogan: 'Lorem Ipsum Dolor Sit Amet',
  },
  about: {
    title: faker.internet.userName(),
    slogan: faker.person.bio(),
  },
};
