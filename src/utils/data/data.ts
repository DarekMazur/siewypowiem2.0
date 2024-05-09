// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import avatar from '@/assets/author.jpg';

interface IDataTypes {
  username: string;
  bio: string;
  avatar: string;
}

export const data: IDataTypes = {
  username: 'Jillian',
  bio: faker.person.bio(),
  avatar: avatar.src,
};

export const about = {
  name: 'Jillian',
  image: avatar.src,
  greetings: 'Cześć, jestem Iza Antoszewska-Mazur!',
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
    link: `mailto:${process.env.NEXT_PUBLIC_MAIL}?subject=Wiadomość ze strony SieWypowiem`,
  },
];

export const slogan = {
  blog: {
    title: 'Blog',
    slogan: 'Nie znam się, więc się wypowiem',
  },
  about: {
    title: data.username,
    slogan: data.bio,
  },
};
