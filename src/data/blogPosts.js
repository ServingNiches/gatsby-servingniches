const projects = [
  {
    className: 'click',
    description: 'Australia\'s first mobile App that helps busy families quickly find and secure available childcare.',
    links: {
      ios: 'https://itunes.apple.com/app/id1175973285',
      android: 'https://play.google.com/store/apps/details?id=com.clickchildcareapp',
    },
    slug: 'click-childcare',
    title: 'Thesys CAT',
    cover: require('./click.png'),
    theme: {
      background: '#00a5d1',
    },
  },
  {
    className: 'lifeWithBird',
    description: 'A minimal and clean e-commerce website built for the contemporary clothing brand based in Melbourne.',
    clientDescription: 'Life with Bird was established in 2002 with a desire to create high quality, beautifully crafted contemporary clothing. The company continues to expand its global following.',
    links: {
      website: 'https://lifewithbird.com',
    },
    slug: 'life-with-bird',
    title: 'T-Mobile',
    cover: require('./life-with-bird.jpg'),
    theme: {
      background: '#f4f5fa',
      light: true, // Invert text color.
    },
  },
  {
    className: 'ahm',
    description: 'A complete overhaul of the Australian health insurer\'s website to provide an enhanced user experience.',
    clientDescription: 'Ahm (Australian Health Management) is a subsidiary of one of Australia’s largest health insurers. The company now handles health cover for over 370,000 people.',
    links: {
      website: 'https://ahm.com.au',
    },
    slug: 'ahm',
    title: 'DSW',
    cover: require('./ahm.png'),
    theme: {
      background: '#000',
    },
  },
  {
    className: 'mrRed',
    description: 'An iOS game built using the Unity 3D game engine. A personal project to challenge and inspire oneself.',
    links: {
      ios: 'https://itunes.apple.com/app/id1165442603',
    },
    slug: 'mr-red',
    title: 'Mr. Red',
    cover: require('./mr-red.png'),
    theme: {
      background: '#5ab6ff',
    },
  },
];

export default projects;
