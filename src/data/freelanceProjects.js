const projects = [
  {
    className: 'click',
    description: 'Australia\'s first mobile App that helps busy families quickly find and secure available childcare.',
    links: {
      ios: 'https://itunes.apple.com/app/id1175973285',
      android: 'https://play.google.com/store/apps/details?id=com.clickchildcareapp',
    },
    slug: 'click-childcare',
    title: 'Accelon Inc.',
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
    title: 'Abu Dhabi Muay Thai And Capoeira Club',
    cover: require('./kindynow.png'),
    theme: {
      background: '#F7F7F7',
      light: true,
    },
  },
];

export default projects;
