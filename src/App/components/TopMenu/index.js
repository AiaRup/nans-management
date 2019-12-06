import React, { useEffect, useReducer, useCallback } from 'react';
import styled from '@emotion/styled';
import { Layout, Menu, Switch } from 'antd';
import { FormattedMessage } from 'react-intl';
import { langReducer, initialLangState } from '../../AppContext';

const TopMenu = () => {
  const [{ locale, messages }, dispatchLang] = useReducer(
    langReducer,
    initialLangState
  );
  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <FormattedMessage id="done"></FormattedMessage>
        </Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item style={{ float: 'right' }}>
          <Switch
            checkedChildren="TH"
            unCheckedChildren="EN"
            onChange={() =>
              dispatchLang({
                type: 'SET_LOCALE',
                payload: locale === 'en' ? 'th' : 'en'
              })
            }
          />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default TopMenu;
