/* eslint-disable max-len */

export default {
  title: 'Navigation',
  logo: {
    text: 'Innovision 2k23',
  },
  navItems: [
    {
      name: 'About',
      id: 'about',
    },
    {
      name: 'Events',
      link: '/events',
    },
    {
      name: 'Sponsors',
      id: 'sponsors',
    },
    {
      name: 'FAQs',
      id: 'faq',
    },
  ],
  otherPagesNavItems: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Events',
      link: '/events',
    },
    {
      name: 'Register',
      link: '/register',
      authenticated: false,
    },
    {
      name: 'Profile',
      link: '/profile',
      authenticated: true,
    },
  ],
};
