import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '03a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'abb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '909'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c90'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '516'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f70'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e9a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '6a1'),
    exact: true
  },
  {
    path: '/blog/google-foobar-first-challenge-caesar-cipher',
    component: ComponentCreator('/blog/google-foobar-first-challenge-caesar-cipher', '944'),
    exact: true
  },
  {
    path: '/blog/kubernetes-components',
    component: ComponentCreator('/blog/kubernetes-components', 'b69'),
    exact: true
  },
  {
    path: '/blog/kubernetes-controllers',
    component: ComponentCreator('/blog/kubernetes-controllers', 'd01'),
    exact: true
  },
  {
    path: '/blog/kubernetes-objects',
    component: ComponentCreator('/blog/kubernetes-objects', '97f'),
    exact: true
  },
  {
    path: '/blog/kubernetes-overview',
    component: ComponentCreator('/blog/kubernetes-overview', '0a7'),
    exact: true
  },
  {
    path: '/blog/kubernetes-services',
    component: ComponentCreator('/blog/kubernetes-services', '075'),
    exact: true
  },
  {
    path: '/blog/kubernetes-volume',
    component: ComponentCreator('/blog/kubernetes-volume', 'f47'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '770'),
    exact: true
  },
  {
    path: '/blog/tags/basics',
    component: ComponentCreator('/blog/tags/basics', '282'),
    exact: true
  },
  {
    path: '/blog/tags/blog',
    component: ComponentCreator('/blog/tags/blog', '34f'),
    exact: true
  },
  {
    path: '/blog/tags/caesar',
    component: ComponentCreator('/blog/tags/caesar', 'd23'),
    exact: true
  },
  {
    path: '/blog/tags/challenge',
    component: ComponentCreator('/blog/tags/challenge', 'b77'),
    exact: true
  },
  {
    path: '/blog/tags/cipher',
    component: ComponentCreator('/blog/tags/cipher', 'ad5'),
    exact: true
  },
  {
    path: '/blog/tags/components',
    component: ComponentCreator('/blog/tags/components', 'e88'),
    exact: true
  },
  {
    path: '/blog/tags/controllers',
    component: ComponentCreator('/blog/tags/controllers', 'f84'),
    exact: true
  },
  {
    path: '/blog/tags/devops',
    component: ComponentCreator('/blog/tags/devops', '5e2'),
    exact: true
  },
  {
    path: '/blog/tags/first',
    component: ComponentCreator('/blog/tags/first', 'f84'),
    exact: true
  },
  {
    path: '/blog/tags/gatsby',
    component: ComponentCreator('/blog/tags/gatsby', '051'),
    exact: true
  },
  {
    path: '/blog/tags/google',
    component: ComponentCreator('/blog/tags/google', '46b'),
    exact: true
  },
  {
    path: '/blog/tags/jam-stack',
    component: ComponentCreator('/blog/tags/jam-stack', '117'),
    exact: true
  },
  {
    path: '/blog/tags/javascript',
    component: ComponentCreator('/blog/tags/javascript', 'c32'),
    exact: true
  },
  {
    path: '/blog/tags/kubernetes',
    component: ComponentCreator('/blog/tags/kubernetes', '890'),
    exact: true
  },
  {
    path: '/blog/tags/objects',
    component: ComponentCreator('/blog/tags/objects', 'da2'),
    exact: true
  },
  {
    path: '/blog/tags/overview',
    component: ComponentCreator('/blog/tags/overview', '9a3'),
    exact: true
  },
  {
    path: '/blog/tags/part-1',
    component: ComponentCreator('/blog/tags/part-1', '320'),
    exact: true
  },
  {
    path: '/blog/tags/part-2',
    component: ComponentCreator('/blog/tags/part-2', 'af7'),
    exact: true
  },
  {
    path: '/blog/tags/part-3',
    component: ComponentCreator('/blog/tags/part-3', 'e48'),
    exact: true
  },
  {
    path: '/blog/tags/part-4',
    component: ComponentCreator('/blog/tags/part-4', 'a3c'),
    exact: true
  },
  {
    path: '/blog/tags/part-5',
    component: ComponentCreator('/blog/tags/part-5', 'f29'),
    exact: true
  },
  {
    path: '/blog/tags/part-6',
    component: ComponentCreator('/blog/tags/part-6', '324'),
    exact: true
  },
  {
    path: '/blog/tags/series',
    component: ComponentCreator('/blog/tags/series', '59f'),
    exact: true
  },
  {
    path: '/blog/tags/services',
    component: ComponentCreator('/blog/tags/services', '2d5'),
    exact: true
  },
  {
    path: '/blog/tags/static-wesite',
    component: ComponentCreator('/blog/tags/static-wesite', '4d5'),
    exact: true
  },
  {
    path: '/blog/tags/typescript',
    component: ComponentCreator('/blog/tags/typescript', '4ba'),
    exact: true
  },
  {
    path: '/blog/tags/volume',
    component: ComponentCreator('/blog/tags/volume', '13e'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '27d'),
    exact: true
  },
  {
    path: '/blog/website-with-gatsby',
    component: ComponentCreator('/blog/website-with-gatsby', '522'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3fa'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '549'),
    routes: [
      {
        path: '/docs/knowledgebase',
        component: ComponentCreator('/docs/knowledgebase', '6c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b9e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
