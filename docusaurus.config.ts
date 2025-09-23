import dotenv from 'dotenv';
dotenv.config();

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Polkadot Live',
  tagline: 'Decentralized Polkadot notifications and chain interactions on the Desktop.',
  favicon: 'img/favicon.ico',

  // Expose environment variables to application.
  customFields: {
    // TODO
  },

  // Set the production url of your site here
  url: 'https://polkadot-live.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'polkadot-live', // Usually your GitHub org/user name.
  projectName: 'polkadot-live.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Configure the static directory sources.
  staticDirectories: ['static'],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/polkadot-live/polkadot-live.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
     content:
        '&#9888;&#65039; The documentation for this project has moved to <a href="https://polkadot-live.app" target="_blank" rel="noopener noreferrer">polkadot-live.app</a>.',
      backgroundColor: '#d0d0d0',
      textColor: '#091E42',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // TODO: Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Polkadot Live',
      logo: {
        alt: 'Polkadot Live Logo',
        src: 'img/logo.png',
      },
      items: [
        //{
        //  type: 'docSidebar',
        //  sidebarId: 'tutorialSidebar',
        //  position: 'left',
        //  label: 'Tutorial',
        //},
        {
          href: 'https://github.com/polkadot-live',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Polkadot Live Authors & Contributors`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // Options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        }
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
