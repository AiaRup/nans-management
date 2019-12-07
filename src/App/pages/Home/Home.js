import React from 'react';
import { Layout } from 'antd';
import { protectedComponent } from '../../components/Protected';

export const Home = protectedComponent(({ children }) => {
  const { Content, Footer } = Layout;

  return (
    <Layout style={{ height: '100%' }}>
      <Content style={{ padding: '0 50px' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Aia Rupsom ©2019</Footer>
    </Layout>
  );
});
