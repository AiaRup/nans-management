import React from 'react';
import { Layout } from 'antd';

import SideMenu from '../../components/SideMenu';
import Breadcrumbs from '../../components/Breadcrumbs';

export const MenuContainer = () => {
  const { Content } = Layout;

  return (
    <>
      <Breadcrumbs />
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <SideMenu />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Hola</Content>
      </Layout>
    </>
  );
};
