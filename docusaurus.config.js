// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
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
      navbar: {
        title: 'GTA NEXUS',
        logo: {
          alt: 'GTA NEXUS Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://discord.gg/kv87XhfsCB',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://cfx.re/join/8opeb5',
            label: 'FiveM',
            position: 'right',
          },
          {
            href: 'https://gtanexus.tebex.io',
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
          href: 'https://gtanexus.tebex.io',
          width: 200,
          height: 68,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      algolia: {
        contextualSearch: true,
        appId: 'ARZE3XSATT',
        apiKey: '3be0cb1b1a3a373a74bd61c32148da2b',
        indexName: 'nrp',
        placeholder: '¿Qué deseas saber?',
      },
    }),
};

module.exports = config;
