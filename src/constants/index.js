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
export const items = {
  rings: [
    {
      id: 0,
      image: '/assets/rings/ring-1.png',
      title: 'Diamond Elegance',
      price: 199.99,
    },
    {
      id: 1,
      image: '/assets/rings/ring-2.png',
      title: 'Ruby Glow',
      price: 149.99,
    },
    {
      id: 2,
      image: '/assets/rings/ring-3.png',
      title: 'Emerald Radiance',
      price: 179.99,
    },
    {
      id: 3,
      image: '/assets/rings/ring-4.png',
      title: 'Sapphire Sparkle',
      price: 159.99,
    },
  ],
  boxes: [
    {
      id: 0,
      image: '/assets/boxes/box-1.png',
      title: 'Classic Jewelry Box',
      price: 49.99,
    },
    {
      id: 1,
      image: '/assets/boxes/box-2.png',
      title: 'Velvet Ring Case',
      price: 39.99,
    }
    
  ],
};



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

