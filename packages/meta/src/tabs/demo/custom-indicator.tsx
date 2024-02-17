import React from 'react';
import { Tabs } from '@nicecode/meta';
import type { TabsProps } from '@nicecode/meta';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    indicatorSize={(origin) => origin - 16}
  />
);

export default App;
