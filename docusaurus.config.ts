import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Image Builder',
  tagline: 'Building operating system artifacts',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://saurus.osbuild.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'osbuild', // Usually your GitHub org/user name.
  projectName: 'saurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osbuild/saurus/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Image Builder',
      logo: {
        alt: 'osbuild logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'service',
          position: 'left',
          label: 'Service',
        },
        {
          type: 'docSidebar',
          sidebarId: 'onPremises',
          position: 'left',
          label: 'On Premises',
        },
        {
          type: 'docSidebar',
          sidebarId: 'bootc',
          position: 'left',
          label: 'Bootc',
        },
        {
          type: 'docSidebar',
          sidebarId: 'userguide',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developer',
          position: 'left',
          label: 'Developer Guide',
        },
        {
          href: 'https://github.com/osbuild/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/#image-builder:fedoraproject.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/osbuild/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Red Hat, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // See https://github.com/cmfcmf/docusaurus-search-local for option docs
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        indexPages: false,
        language: "en",
        style: undefined,
        maxSearchResults: 8,
      },
    ],
  ],
};

export default config;
