import { Lobster, Mulish, Great_Vibes, Bungee_Shade } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const mulish = Mulish({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const greatVibes = Great_Vibes({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const bungeeShade = Bungee_Shade({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const theme = {
  colors: {
    white: '#FCFCFF',
    grey: '#E9E8EA',
    transparentGrey: '#e9e8eaa1',
    orange: '#BC4D13',
    black: '#25363D',
    blue: '#1078A1',
    brown: '#8d411b',
    red: '#c91414',
  },

  fonts: {
    main: mulish.style.fontFamily,
    headers: lobster.style.fontFamily,
    hand: greatVibes.style.fontFamily,
    intro: bungeeShade.style.fontFamily,
  },

  fontSize: {
    xxxl: '8rem',
    xxl: '3.6rem',
    xl: '3.2rem',
    l: '2rem',
    m: '1.6rem',
    s: '1rem',
  },
};

export default theme;
