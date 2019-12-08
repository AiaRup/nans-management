import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from '@reach/router';

import { LocationContext } from '../../../Common/contexts';

import './styles.css';

const Breadcrumbs = () => {
  const { location } = useContext(LocationContext);

  const breadcrumbNameMap = {
    '/dashboard': 'Dashboard',
    '/inventory': 'Inventory',
    '/employees': 'Employees',
    '/payments': 'Payments',
    '/menu': 'Menu',
    '/reservations': 'Reservations',
    '/orders': 'Orders'
  };

  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default Breadcrumbs;
