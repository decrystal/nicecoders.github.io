import React from 'react';
import { Divider, Space, Typography } from '@nicecode/meta';

const App: React.FC = () => (
  <Space split={<Divider type="vertical" />}>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
);

export default App;
