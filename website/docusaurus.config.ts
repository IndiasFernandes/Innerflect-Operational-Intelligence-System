import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Production builds (e.g. GitHub Actions) should set DOCUSAURUS_URL and DOCUSAURUS_BASE_URL.
const url = process.env.DOCUSAURUS_URL ?? 'http://localhost:3000';
const baseUrl = process.env.DOCUSAURUS_BASE_URL ?? '/';

const config: Config = {
  title: 'Innerflect Ops',
  tagline: 'Operational intelligence — documentation and canonical playbooks',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url,
  baseUrl,

  organizationName: 'innerflect',
  projectName: 'Innerflect_Operational_Intelligence_System',

  onBrokenLinks: 'warn',

  // CommonMark for all `.md` avoids MDX interpreting `{placeholders}` in ops templates. Use `.mdx` for MDX.
  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ops',
        path: '../ops',
        routeBasePath: 'ops',
        sidebarPath: './sidebarsOps.ts',
        exclude: ['**/09_archive/**'],
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Innerflect Ops',
      logo: {
        alt: 'Innerflect Ops',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'opsSidebar',
          docsPluginId: 'ops',
          position: 'left',
          label: 'Ops',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Docs home',
              to: '/docs/',
            },
            {
              label: 'Getting started',
              to: '/docs/getting-started/',
            },
          ],
        },
        {
          title: 'Canonical',
          items: [
            {
              label: 'Ops (canonical)',
              to: '/ops/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Innerflect. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
