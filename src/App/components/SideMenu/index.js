import React, { Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';

const MenuContent = props => {
  const { SubMenu } = Menu;
  const { sideMenu, ...other } = props;

  return (
    <>
      {sideMenu.map((tab, index) => {
        return (
          <Fragment key={index}>
            {tab.subMenu ? (
              <SubMenu
                {...other}
                key={`sub-${tab.tabNumber}`}
                title={
                  <span>
                    <Icon type="user" />
                    {tab.name}
                  </span>
                }
              >
                {tab.subMenu.map(({ name, tabNumber }) => (
                  <Menu.Item key={tabNumber}>{name}</Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item {...other} key={tab.tabNumber}>
                <Icon type="desktop" />
                <span>{tab.name}</span>
              </Menu.Item>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

const SideMenu = ({ sideMenu }) => {
  const { Sider } = Layout;

  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="vertical"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[`sub1`]}
        style={{ height: '100%' }}
      >
        <MenuContent sideMenu={sideMenu} />
      </Menu>
    </Sider>
  );
};

export default SideMenu;
