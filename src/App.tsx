import React from 'react';
import Flyer from './components/flyer';
import Form from './components/form';
import { Layout, Menu } from 'antd';

function App() {
  const { Sider } = Layout;

  return (
    <Layout>
      <Sider width={300} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Form />
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Flyer />
      </Layout>
    </Layout>
  );
}

export default App;
