module.exports = {
  title: 'NatPro',
  tagline: 'Materijali za natjecateljsko programiranje',
  url: 'https://nat-pro.herokuapp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ivvlspirit', // Usually your GitHub org/user name.
  projectName: 'natpro', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NatPro',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/uvod/sadrzaj',
          activeBasePath: 'docs',
          activeBaseRegex: 'docs\/((?!doprinos-ovim-materijalima).)*$',
          label: 'Materijali',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          to: 'docs/doprinos-ovim-materijalima/kako-napisati-clanak',
          activeBasePath: 'docs/doprinos-ovim-materijalima',
          label: 'Doprinesite!',
          position: 'left'
        },
        {
          href: 'https://github.com/ivvlspirit/natpro',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Materijali',
          items: [
            {
              label: 'Sadržaj',
              to: 'docs/uvod/sadrzaj',
            },
          ],
        },
        {
          title: 'Društvene mreže',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/user/ivanvlahov922',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/62mzTshz',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/IvanV8',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ivvlspirit/natpro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ivan Vlahov. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ivvlspirit/natpro/tree/main/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
