import React, { useContext } from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  PageHeader,
  Avatar,
  Switch,
  Icon
} from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Link } from '@reach/router';

import './styles.css';

import { IntlContext } from '../../../Common/contexts';
import { unProtectedComponent } from '../../components/Unprotected';

const NormalLoginForm = unProtectedComponent(({ form, intl }) => {
  const { locale, dispatch: IntlDispatch } = useContext(IntlContext);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: '100vh' }}
    >
      <Form onSubmit={handleSubmit} className="forgot__password__form">
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
        <PageHeader
          title={intl.formatMessage({ id: 'restePassword' })}
          // color="rgba(0, 0, 0, 0.65)"
        >
          <Avatar style={{ backgroundColor: '#1DA57A' }} icon="unlock" />
        </PageHeader>
        <Form.Item>
          <FormattedMessage id={'forgotInstructions'} />
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
              placeholder={intl.formatMessage({ id: 'email' })}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            <FormattedMessage id={'send'} />
          </Button>
        </Form.Item>
        <Form.Item className="back__to__login">
          <FormattedMessage id={'backToLogin'} />{' '}
          <Link to={'/login'}>
            <FormattedMessage id={'login'} />
          </Link>
        </Form.Item>
      </Form>
    </Row>
  );
});

export const WrappedForgotPasswordForm = Form.create()(
  injectIntl(NormalLoginForm)
);
