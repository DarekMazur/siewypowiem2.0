import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import avatar from '@/assets/author.jpg';

interface IDataTypes {
  username: string;
  bio: string;
  avatar: string;
}

export const data: IDataTypes = {
  username: 'Jillian',
  bio: 'Strzeżcie się rozczarowań, bo pozory mylą. Takimi, jakimi wydają się być, rzeczy są rzadko. A kobiety nigdy.',
  avatar: avatar.src,
};

export const about = {
  name: data.username,
  image: data.avatar,
  greetings: 'Cześć, jestem Iza!',
  body: `<p>Mam na imię Iza, choć w Internecie przyjęłam pseudonim Jillian. Raz wybieram czucie i wiarę, innym razem - szkiełko i oko. Jestem etatową mamą za administracyjnym biurkiem, zaś po godzinach bujam w obłokach i staram się iść przez życie śpiewająco 😉.</p>
  <p>Lubię słuchać, czytać i oglądać - lubię zatapiać się w nowe historie. Uważam, że audiobooki to jeden z najlepszych wynalazków ludzkości. Nałogowo piję czarną herbatę, co myśli rozjaśnia ☕😉</p>`,
  inspirations: [
    {
      title: "Zespół Wokalny A'Capella",
      url: 'https://www.facebook.com/ZespolwokalnyACapella',
    },
    // {
    //   title: 'Podcast Ściśle Humanistyczny',
    //   url: '/',
    // },
  ],
  links: [
    {
      title: 'Nerdistry',
      url: 'https://nerdistry.pl',
    },
    // {
    //   title: 'Sit amet',
    //   url: '/',
    // },
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
  archives: {
    title: 'Archiwum',
    slogan: 'Dawno, dawno temu...',
  },
};
