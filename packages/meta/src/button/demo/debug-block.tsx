import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Form, Button } from '@nicecode/meta';

const App: React.FC = () => (
  <Form>
    <Form.Item>
      <Button size="large" shape="round" block style={{ marginBottom: 12 }}>
        Submit
      </Button>
      <Button size="large" shape="round" icon={<DownloadOutlined />} />
    </Form.Item>
  </Form>
);

export default App;
