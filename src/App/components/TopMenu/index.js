import React, { useContext } from 'react';
import { Layout, Menu, Switch, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Link } from '@reach/router';
import {
  IntlContext,
  AuthContext,
  LocationContext
} from '../../../Common/contexts';
import { protectedComponent } from '../Protected';

export const TopMenu = protectedComponent(props => {
  const { locale, dispatch: IntlDispatch } = useContext(IntlContext);
  const { userName, isAuthenticated, dispatch: AuthDispatch } = useContext(
    AuthContext
  );
  const { location } = useContext(LocationContext);

  const { Header } = Layout;
  const { SubMenu } = Menu;

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={['dashboard']}
      >
        <Menu.Item key="/dashboard">
          <Icon type="dashboard" />{' '}
          <Link to={'/dashboard'}>
            <FormattedMessage id={'dashboard'} />
          </Link>
        </Menu.Item>
        <Menu.Item key="/orders">
          <Icon type="shopping-cart" />
          <Link to={'/orders'}>
            <FormattedMessage id={'orders'} />
          </Link>
        </Menu.Item>
        <Menu.Item key="/reservations">
          <Icon type="ordered-list" />
          <Link to={'/reservations'}>
            <FormattedMessage id={'reservations'} />
          </Link>
        </Menu.Item>
        <Menu.Item key="/payments">
          <Icon type="euro" />{' '}
          <Link to={'/payments'}>
            <FormattedMessage id={'payments'} />
          </Link>
        </Menu.Item>
        <Menu.Item key="/employees">
          <Icon type="robot" />
          <Link to={'/employees'}>
            <FormattedMessage id={'employees'} />
          </Link>
        </Menu.Item>
        <Menu.Item key="/menu">
          <Icon type="apple" />
          <Link to={'/menu'}>
            <FormattedMessage id={'menu'} />
          </Link>
        </Menu.Item>
        <Menu.Item key="/inventory">
          <Icon type="area-chart" />{' '}
          <Link to={'/inventory'}>
            <FormattedMessage id={'inventory'} />
          </Link>
        </Menu.Item>

        <Menu.Item style={{ float: 'right' }}>
          <Switch
            checkedChildren="TH"
            unCheckedChildren="EN"
            onChange={() =>
              IntlDispatch({
                type: 'SET_LOCALE',
                payload: locale === 'en' ? 'th' : 'en'
              })
            }
          />
        </Menu.Item>
        <SubMenu
          style={{ float: 'right' }}
          title={
            <span>
              <Icon type="user" /> {userName}
            </span>
          }
        >
          <Menu.Item
            key="logout"
            onClick={() =>
              AuthDispatch({
                type: 'LOGOUT',
                payload: 'logout'
              })
            }
          >
            <Icon type="logout" />
            <FormattedMessage id={'logout'} />
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
});

export default TopMenu;
