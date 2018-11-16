const projects = [
  {
    className: 'click',
    description: 'Australia\'s first mobile App that helps busy families quickly find and secure available childcare.',
    links: {
      ios: 'https://itunes.apple.com/app/id1175973285',
      android: 'https://play.google.com/store/apps/details?id=com.clickchildcareapp',
    },
    slug: 'click-childcare',
    title: 'Get Free Books',
    cover: require('./click.png'),
    theme: {
      background: '#00a5d1',
    },
  },
  {
    className: 'kindyNow',
    description: 'Web app to allow childcare centre managers to monitor and control absences, bookings and capacities.',
    links: {
      website: 'https://kindynow.com/admin',
    },
    slug: 'kindynow',
    title: 'Transcriber AI',
    cover: require('./kindynow.png'),
    theme: {
      background: '#F7F7F7',
      light: true,
    },
  },
  {
    className: 'chadstone',
    description: 'A rebuild of the existing website in line with the unveiling of the mall\'s new shopping, dining & entertainment precincts.',
    clientDescription: 'Chadstone Shopping Centre is a shopping centre located in the city of Melbourne, Australia. Since opening in 1960, it is now the biggest shopping centre in the country with over 500 stores.',
    links: {
      website: 'https://www.chadstone.com.au',
    },
    slug: 'chadstone',
    title: 'Crypto Soccer',
    cover: require('./chadstone.jpg'),
    theme: {
      background: '#a77e60',
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
    title: 'P2P Marketplace',
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
    title: 'Generate An (Optimized) Affiliate Funnel',
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
    title: 'Unnecessary Games',
    cover: require('./mr-red.png'),
    theme: {
      background: '#5ab6ff',
    },
  },
];

export default projects;
