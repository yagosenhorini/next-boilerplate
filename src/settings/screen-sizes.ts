import { generateMedia } from 'styled-media-query';

export const screenSizes = {
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1600,

  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '1024px',
    lg: '1200px',
    xl: '1600px',
  },
};

export const mq = generateMedia(screenSizes.breakpoints);
