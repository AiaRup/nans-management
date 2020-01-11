import React, { Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

const MenuContent = props => {
  const { SubMenu } = Menu;
  const {
    menu: { tabs },
    ...other
  } = props;

  return (
    <>
      {tabs.map((tab, index) => {
        return (
          <Fragment key={index}>
            {tab.children ? (
              <SubMenu
                {...other}
                key={tab.key}
                title={
                  <span>
                    {tab.icon && <Icon type={tab.icon} />}
                    <FormattedMessage id={tab.title} />
                  </span>
                }
              >
                {tab.children.map(({ title, icon, key }) => (
                  <Menu.Item key={key} eventKey={key}>
                    {icon && <Icon type={icon} />}
                    <FormattedMessage id={title} />
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item {...other} key={tab.key}>
                {tab.icon && <Icon type={tab.icon} />}
                <span>
                  <FormattedMessage id={tab.title} />
                </span>
              </Menu.Item>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default MenuContent;
