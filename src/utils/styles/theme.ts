import {
  abrilFatface,
  bungeeShade,
  italianno,
  lobster,
  mateSC,
  mulish,
  parisienne,
  vt323,
} from './fonts';

const theme = {
  colors: {
    white: '#FCFCFF',
    grey: '#dee1ed',
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
    button: '1.8rem',
  },

  breakpoints: {
    wide: '1024',
    desktop: '800',
    mobile: '640',
  },
};

export default theme;
