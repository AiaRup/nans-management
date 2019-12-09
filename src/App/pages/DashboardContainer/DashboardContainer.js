import React from 'react';
import { Layout } from 'antd';

import SideMenu from '../../components/SideMenu';
import Breadcrumbs from '../../components/Breadcrumbs';
import { menus } from '../../../Common/data/menus';

export const DashboardContainer = () => {
  const { Content } = Layout;
  const menu = menus.find(obj => obj.title === 'Dashboard');

  return (
    <>
      <Breadcrumbs />
      <Layout style={{ padding: '24px 0', background: '#fff', height: '100%' }}>
        <SideMenu menu={menu} />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Hola</Content>
      </Layout>
    </>
  );
};
