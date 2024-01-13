// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GTA NEXUS',
  tagline: 'Documentacion oficial de GTA NEXUS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.gtanexus.gg',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gtanexus', // Usually your GitHub org/user name.
  projectName: 'gtanexus.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/', // Serve the docs at the site's root
          showLastUpdateTime: true,
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.png',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'GTA NEXUS',
        logo: {
          alt: 'GTA NEXUS Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://discord.gg/gfTNHreCug',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://cfx.re/join/ogoldv',
            label: 'FiveM',
            position: 'right',
          },
          {
            href: 'https://www.gtanexus.gg',
            label: 'Tienda',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} GTA NEXUS`,
        logo: {
          alt: 'GTA NEXUS',
          src: 'img/footer.png',
          href: 'https://www.gtanexus.gg',
          width: 200,
          height: 68,
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        contextualSearch: true,
        appId: 'ARZE3XSATT',
        apiKey: '3be0cb1b1a3a373a74bd61c32148da2b',
        indexName: 'gtanexus',
        placeholder: '¿Qué deseas saber?',
      },
    }),
};

export default config;
