import React, { useContext } from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  PageHeader,
  Avatar,
  Switch
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

  const FormItem = Form.Item;
  const { getFieldDecorator } = form;

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: '100vh' }}
    >
      <Form onSubmit={handleSubmit} className="login-form">
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
          title={intl.formatMessage({ id: 'login' })}
          // color="rgba(0, 0, 0, 0.65)"
        >
          <Avatar style={{ backgroundColor: '#1DA57A' }} icon="user" />
        </PageHeader>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder={intl.formatMessage({ id: 'username' })}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder={intl.formatMessage({ id: 'password' })}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>
              <FormattedMessage id={'rememberMe'} />
            </Checkbox>
          )}
          <Link to={'/forgot-password'} className="login-form-forgot">
            <FormattedMessage id={'forgotPassword'} />
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            <FormattedMessage id={'login'} />
          </Button>
          <FormattedMessage id={'or'} />{' '}
          <Link to={'/register'}>
            <FormattedMessage id={'registerNow'} />
          </Link>
        </FormItem>
      </Form>
    </Row>
  );
});

export const WrappedNormalLoginForm = Form.create()(
  injectIntl(NormalLoginForm)
);
