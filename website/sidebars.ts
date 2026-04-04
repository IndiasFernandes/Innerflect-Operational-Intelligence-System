import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Explicit IA: two main routes (`vision/`, `repo/`), reference under `system/`.
 * Stub pages use `sidebar_label: "[Stub] …"` in frontmatter so they are easy to spot.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Route — Product vision',
      collapsed: false,
      items: [
        'vision/index',
        'vision/market-insight',
        'vision/unmet-need',
        'vision/strategic-thesis',
        'vision/icp-and-wedge',
        'vision/product-concept',
        'vision/business-model-and-moat',
        'vision/risks',
        'vision/messaging',
      ],
    },
    {
      type: 'category',
      label: 'Route — Repository',
      collapsed: false,
      items: [
        'repo/index',
        'repo/using-this-site',
        'repo/roles-and-areas',
        'repo/operational-assets',
      ],
    },
    {
      type: 'category',
      label: 'By role',
      collapsed: false,
      items: [
        'by-role/index',
        'by-role/owner',
        'by-role/administrator',
        'by-role/commercial',
        'by-role/coordinator',
        'by-role/contributor',
        'by-role/investor',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['system/index', 'system/repository-map', 'system/taxonomy', 'system/inner-linking-conventions', 'system/role-and-area-responsibilities'],
    },
  ],
};

export default sidebars;
