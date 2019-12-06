import React, { useReducer } from 'react';
import { FormattedMessage } from 'react-intl';
import { langReducer, initialLangState } from './AppContext';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { IntlProvider } from 'react-intl';

import TopMenu from './components/TopMenu';

// import locale from 'antd/es/date-picker/locale/en_GB';
import moment from 'moment';
import 'moment/locale/en-gb';

moment.locale('en-gb');

const App = () => {
  const [{ locale, messages }] = useReducer(langReducer, initialLangState);

  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;
  return (
    <IntlProvider defaultLocale={locale} locale={locale} messages={messages}>
      <Layout>
        <TopMenu />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Aia Rupsom ©2019</Footer>
      </Layout>
    </IntlProvider>
  );
};

export default App;
