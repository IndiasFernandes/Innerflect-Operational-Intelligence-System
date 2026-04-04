import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/** Only the development playbooks included in the site build (see `docusaurus.config.ts`). */
const sidebars: SidebarsConfig = {
  opsSidebar: [
    {
      type: 'category',
      label: 'Development (canonical on site)',
      collapsed: false,
      items: [
        'playbooks/development/deployment-pipeline-prompts',
        'playbooks/development/full-system-coherence-setup',
      ],
    },
  ],
};

export default sidebars;
