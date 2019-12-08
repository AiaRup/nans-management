import React from 'react';
import { Layout } from 'antd';

import SideMenu from '../../components/SideMenu';
import Breadcrumbs from '../../components/Breadcrumbs';
import { appStructureData } from '../../../Common/data';

export const InventoryContainer = () => {
  const { Content } = Layout;
  const menuStructure = appStructureData.find(obj => obj.name === 'Inventory');

  return (
    <>
      <Breadcrumbs />
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <SideMenu {...menuStructure} />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Hola</Content>
      </Layout>
    </>
  );
};
