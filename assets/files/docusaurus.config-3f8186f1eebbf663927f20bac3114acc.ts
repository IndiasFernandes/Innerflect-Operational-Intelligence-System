import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Production builds (e.g. GitHub Actions) should set DOCUSAURUS_URL and DOCUSAURUS_BASE_URL.
const url = process.env.DOCUSAURUS_URL ?? 'http://localhost:3000';
const baseUrl = process.env.DOCUSAURUS_BASE_URL ?? '/';

const config: Config = {
  title: 'Innerflect Ops',
  tagline:
    'Outcome orchestration for independent talent — and the operating blueprint for how Innerflect documents, ships, and runs work.',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url,
  baseUrl,

  organizationName: 'innerflect',
  projectName: 'Innerflect_Operational_Intelligence_System',

  onBrokenLinks: 'warn',

  themes: ['@docusaurus/theme-mermaid'],

  // CommonMark for all `.md` avoids MDX interpreting `{placeholders}` in ops templates. Use `.mdx` for MDX.
  markdown: {
    format: 'md',
    mermaid: true,
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
        // Site exposes only the two canonical development playbooks; full tree remains in-repo on GitHub.
        include: [
          '02_playbooks/development/deployment-pipeline-prompts.md',
          '02_playbooks/development/full-system-coherence-setup.md',
        ],
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
          type: 'doc',
          docId: 'vision/index',
          position: 'left',
          label: 'Product vision',
        },
        {
          type: 'doc',
          docId: 'repo/index',
          position: 'left',
          label: 'Repository',
        },
        {
          type: 'doc',
          docId: 'by-role/index',
          position: 'left',
          label: 'By role',
        },
        {
          type: 'docSidebar',
          sidebarId: 'opsSidebar',
          docsPluginId: 'ops',
          position: 'left',
          label: 'Playbooks',
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
              label: 'Product vision',
              to: '/docs/vision/',
            },
            {
              label: 'Repository',
              to: '/docs/repo/',
            },
            {
              label: 'By role',
              to: '/docs/by-role/',
            },
            {
              label: 'System reference',
              to: '/docs/system/',
            },
          ],
        },
        {
          title: 'Canonical playbooks',
          items: [
            {
              label: 'Deployment pipeline (5-step)',
              to: '/ops/playbooks/development/deployment-pipeline-prompts',
            },
            {
              label: 'Full system coherence (Context7)',
              to: '/ops/playbooks/development/full-system-coherence-setup',
            },
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System',
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
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
