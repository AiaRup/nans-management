import React, { useState, useEffect, useContext } from 'react';
import { Layout, Menu } from 'antd';
import { navigate } from '@reach/router';

import { LocationContext } from '../../../Common/contexts';
import MenuContent from './MenuContent';

import './styles.css';

const SideMenu = ({ menu }) => {
  const { Sider } = Layout;
  const {
    location: { pathname }
  } = useContext(LocationContext);

  const isExpendable = menu.tabs.some(item => item.children);
  const expandableTabs = () => {
    const list = isExpendable ? menu.tabs.filter(item => item.children) : [];
    return list.length ? list.map(subTab => subTab.path) : list;
  };

  const tabs = expandableTabs();
  const firstClickableItem = isExpendable
    ? menu.tabs.filter(item => item.children)[0].path
    : menu.tabs[0].path;

  const [collapsed, setCollapse] = useState(false);
  const [rootSubmenuKeys] = useState(expandableTabs());
  const [openKeys, setOpenKeys] = useState(tabs.length ? [tabs[0]] : []);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    setSelectedKeys([firstClickableItem]);
  }, []);

  const handleMenuClick = v => {
    setSelectedKeys([v.key]);
    navigate(`${pathname}${v.key}`);
  };

  const onCollapse = () => {
    setCollapse(!collapsed);
  };

  const handleOpenChange = v => {
    const latestOpenKey = v.find(key => openKeys.indexOf(key) !== -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(v);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu
        mode="inline"
        style={{ height: '100%' }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={handleMenuClick}
        onOpenChange={handleOpenChange}
        defaultOpenKeys={['sub1']}
      >
        <MenuContent menu={menu} />
      </Menu>
    </Sider>
  );
};

export default SideMenu;
