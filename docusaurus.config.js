const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'NatPro',
  tagline: 'Materijali za natjecateljsko programiranje',
  url: 'https://materijali.xfer.hr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'x-fer', // Usually your GitHub org/user name.
  projectName: 'natpro', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NatPro',
      logo: {
        alt: 'My Site Logo',
        src: 'img/XFER-Logo.svg',
      },
      items: [
        {
          to: 'docs/o-materijalima/sadrzaj',
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
          href: 'https://xfer.hr',
          label: 'X.FER',
          position: 'right',
        },
        {
          href: 'https://github.com/x-fer/natpro',
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
              to: 'docs/o-materijalima/sadrzaj',
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
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/xferhr',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/xferhr',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/xfer_hr',
            },
          ],
        },
        {
          title: 'Još stvari',
          items: [
            {
              label: 'X.FER',
              to: 'https://xfer.hr',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/x-fer/natpro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} X.FER. Built with Docusaurus.`,
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
            'https://github.com/x-fer/natpro/edit/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/x-fer/natpro/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr'],
    localeConfigs: {
      hr: {
        label: 'Hrvatski',
        direction: 'ltr',
      }
    },
  },
};
