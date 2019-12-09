import React from 'react';
import { Layout } from 'antd';

import { protectedComponent } from '../../components/Protected';

import './styles.css';

export const Home = protectedComponent(({ children }) => {
  const { Content, Footer } = Layout;

  return (
    <Layout
      style={{
        height: '100%',
        paddingTop: '64px',
        display: 'flex',
        minHeight: '100vh'
      }}
    >
      <Content
        style={{ padding: '0 50px', flexGrow: 1 }}
        className="home__sub__section"
      >
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Aia Rupsom ©2019</Footer>
    </Layout>
  );
});
