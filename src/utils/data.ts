// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

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
  greetings: faker.helpers.fake(
    'Hi, my name is {{person.firstName}} {{person.lastName}}!',
  ),
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

interface IContactTypes {
  type: string;
  icon: {
    prefix: IconPrefix;
    name: IconName;
  };
  link: string;
}

export const contact: Array<IContactTypes> = [
  {
    type: 'messanger',
    icon: {
      prefix: 'fab',
      name: 'facebook-messenger',
    },
    link: `https://m.me/${process.env.NEXT_PUBLIC_MESSANGER}`,
  },
  {
    type: 'instagramDirect',
    icon: {
      prefix: 'fab',
      name: 'instagram',
    },
    link: `https://ig.me/m/${process.env.NEXT_PUBLIC_INSTAGRAM_DIRECT}`,
  },
  {
    type: 'email',
    icon: {
      prefix: 'fas',
      name: 'at',
    },
    link: `mailto:${process.env.NEXT_PUBLIC_MAIL}?subject=Message from SieWypowiem`,
  },
];

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
