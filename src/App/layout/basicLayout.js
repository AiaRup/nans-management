import React from 'react';
import { Layout } from 'antd';

import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import Breadcrumbs from './components/Breadcrumbs';

const basicLayout = ({ children }) => {
  const { Content, Footer } = Layout;

  return (
    <Layout style={{ height: '100%' }}>
      <TopMenu />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumbs />
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <SideMenu />
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Aia Rupsom ©2019</Footer>
    </Layout>
  );
};

export default basicLayout;
