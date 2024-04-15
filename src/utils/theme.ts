import {
  Lobster,
  Mulish,
  Mate_SC,
  Bungee_Shade,
  Abril_Fatface,
  Italianno,
  Parisienne,
  VT323,
} from 'next/font/google';

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

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const mateSC = Mate_SC({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const italianno = Italianno({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const bungeeShade = Bungee_Shade({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const abrilFatface = Abril_Fatface({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const vt323 = VT323({
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
    glassBgr: '#fcfcff08',
    glassShadow: '#8687955e',
  },

  fonts: {
    main: mulish.style.fontFamily,
    headers: lobster.style.fontFamily,
    alt: mateSC.style.fontFamily,
    hand: parisienne.style.fontFamily,
    altHand: italianno.style.fontFamily,
    intro: bungeeShade.style.fontFamily,
    serif: abrilFatface.style.fontFamily,
    mono: vt323.style.fontFamily,
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
