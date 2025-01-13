export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const items = [
  {
    id: 1,
    image: '/assets/ring1.jpg',
    title: 'Product 1',
    subtitle: 'A great product',
    price: '$19.99',
    slide: 1
  },
  {
    id: 2,
    image: '/assets/ring2.jpg',
    title: 'Product 2',
    subtitle: 'Another amazing item',
    price: '$29.99',
    slide: 2
  },
  // {
  //   id: 3,
  //   image: '/assets/ring3.jpg',
  //   title: 'Product 3',
  //   subtitle: 'Top of the line product',
  //   price: '$39.99',
  // },
  // {
  //   id: 4,
  //   image: '/assets/ring4.jpg',
  //   title: 'Product 4',
  //   subtitle: 'Best seller',
  //   price: '$49.99',
  // },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

