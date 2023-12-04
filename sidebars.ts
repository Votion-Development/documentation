import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Dashactyl',
      items: [
        'dashactyl/introduction',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'dashactyl/installation/manual',
            'dashactyl/installation/pterodactyl'
          ],
        },
        {
          type: 'category',
          label: 'Database Setup',
          items: [
            'dashactyl/database/setup_debian',
            'dashactyl/database/setup_ubuntu',
            'dashactyl/database/setup_rhel',
            'dashactyl/database/configuration',
          ],
        },
        {
          type: 'category',
          label: 'Webserver',
          items: [
            'dashactyl/webserver/nginx',
            'dashactyl/webserver/caddy',
          ]
        },
        'dashactyl/configuration_reference',
        'dashactyl/common_errors',
      ],
    },
    {
      type: 'category',
      label: 'Music Man',
      items: [
        'music_man/introduction',
        'music_man/commands',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
