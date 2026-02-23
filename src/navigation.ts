import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Works',
      href: getPermalink('/#works'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [
    { text: 'Start building', href: getPermalink('/#contact'), variant: 'primary' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'SnapDrill', href: getPermalink('/snapdrill') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/#about') },
        { text: 'Contact', href: getPermalink('/#contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} NotBad Labs L.L.C. · Wyoming, USA
  `,
};
