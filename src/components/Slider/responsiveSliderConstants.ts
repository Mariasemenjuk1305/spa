export const responsiveSlider = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2.7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 2.7,
    partialVisibilityGutter: 8
  },

  laptopL: {
    breakpoint: { max: 1440, min: 1024 },
    items: 2.7,
  },

  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2.7,
  },

  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};
