// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const title = 'timechain.academy';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TimeChain.Academy',
  url: 'https://timechain.academy',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TimeChain.Academy',
  projectName: 'timechain.academy',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  plugins: [
    async () => {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/timechain-academy/timechain.academy/tree/main/website',

        },
        blog: {
          blogTitle: 'TimeChain.Academy blog!',
          blogDescription: 'Discover articles about TimeChain.Academy',
          postsPerPage: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} TimeChain.Academy`,
          },

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title,
        logo: {
          alt: 'TimeChain.Academy Logo',
          src: 'img/logo.svg',
          height: '56',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/core-values', label: 'Core Values', position: 'left' },
          { to: '/features', label: 'Features', position: 'left' },
          { to: '/downloads', label: 'Downloads', position: 'left' },
          { to: '/extend', label: 'Extend', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/timechain-academy/timechain.academy',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/timechain-academy/timechain.academy',
              },
              {
                label: 'General chat (bridged): #general on Discord',
                href: 'https://discord.gg/DrpputYbFx',
              },
              {
                label: 'TimeChain.Academy Planning & Roadmap',
                href: 'https://github.com/timechain-academy/timechain.academy/projects?type=beta',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${title}<br/>Apache License 2.0 License`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['docker', 'shell-session'],
      },
      algolia: {
        // The application ID provided by Algolia
        // TODO:
        appId: 'MR01ANKQ9S',

        // Public API key: it is safe to commit it
        // TODO:
        apiKey: '20bda7620dbcebd6a354840b4f92ac8e',

        // The index name to query
        indexName: 'timechain-academy',

        // Optional
        contextualSearch: true,

        // Optional
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
