import { useTranslation } from 'react-i18next';
// import React from 'react';
export interface NavItem {
  name: string;
  key: string;
  children?: NavItem[];
  isBank?: boolean;
  url?: string;
}

export const useHeaderMap = (): NavItem[] => {
  const { t } = useTranslation();

  return [
    {
      name: t('Developer'),
      key: 'Developer',
      children: [
        {
          name: 'GitHub',
          key: 'GitHub',
          url: 'https://github.com/eventeum/eventeum',
          isBank: true,
        },
        {
          name: '白皮书',
          key: 'whitePaper',
          url: 'https://github.com/eventeum/eventeum',
          isBank: true,
        },
        { name: '开发文档', key: 'devDoc', url: '', isBank: true },
      ],
    },
    {
      name: t('Live price data'),
      key: '/realTimeData',
      url: '/realTimeData',
    },
    {
      name: t('Reputation'),
      key: 'reputation',
      children: [
        { name: t('Nodes reputation'), key: '/nodes', url: '/nodes' },
        { name: t('Network reputation'), key: '/orgs', url: '/orgs' },
      ],
    },
    {
      name: t('Community'),
      key: 'community',
      children: [
        {
          name: 'Telegram',
          key: 'Telegram',
          url: 'https://t.me/joinchat/eGt6uDYtbMVmZTE1',
          isBank: true,
        },
        {
          name: t('Twitter'),
          key: 'Twitter',
          url: 'https://twitter.com/aelfportal',
          isBank: true,
        },
        {
          name: 'Discord',
          key: 'Discord',
          url: 'https://discord.gg/NQsyzmn3bb',
          isBank: true,
        },
      ],
    },
  ];
};
export const HeaderMap: NavItem[] = [
  {
    name: '开发者',
    key: 'Developer',
    children: [
      {
        name: 'GitHub',
        key: 'GitHub',
        url: 'https://github.com/eventeum/eventeum',
        isBank: true,
      },
      {
        name: '白皮书',
        key: 'whitePaper',
        url: 'https://github.com/eventeum/eventeum',
        isBank: true,
      },
      { name: '开发文档', key: 'devDoc', url: '', isBank: true },
    ],
  },
  {
    name: '实时数据',
    key: '/realTimeData',
    url: '/realTimeData',
  },
  {
    name: '声誉',
    key: 'reputation',
    children: [
      { name: '节点声誉', key: '/nodes', url: '/nodes' },
      { name: '组织声誉', key: '/orgs', url: '/orgs' },
    ],
  },
  {
    name: '社区',
    key: 'community',
    children: [
      {
        name: 'Telegram',
        key: 'Telegram',
        url: 'https://t.me/joinchat/eGt6uDYtbMVmZTE1',
        isBank: true,
      },
      {
        name: '推特',
        key: 'Twitter',
        url: 'https://twitter.com/aelfportal',
        isBank: true,
      },
      {
        name: 'Discord',
        key: 'Discord',
        url: 'https://discord.gg/NQsyzmn3bb',
        isBank: true,
      },
    ],
  },
];
