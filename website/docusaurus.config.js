const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'NatPro',
  tagline: 'Materijali za natjecateljsko programiranje',
  url: 'https://nat-pro.herokuapp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vlahovivan', // Usually your GitHub org/user name.
  projectName: 'natpro', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NatPro',
      logo: {
        alt: 'My Site Logo',
        src: 'img/NatPro-logo.png',
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
          href: 'https://github.com/vlahovivan/natpro',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sadržaj',
          items: [
            {
              label: 'Materijali',
              to: 'docs/uvod/sadrzaj',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Doprinesite',
              to: 'docs/doprinos-ovim-materijalima/kako-napisati-clanak',
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
              href: 'https://discord.gg/K37UZmzdMf',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/IvanV8',
            },
          ],
        },
        {
          title: 'Još stvari',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vlahovivan/natpro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ivan Vlahov. Built with Docusaurus.`,
    },
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/vlahovivan/natpro/tree/main/website',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/vlahovivan/natpro/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
};
