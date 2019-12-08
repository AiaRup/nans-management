import React from 'react';
import { Form, Input, Row, Button, PageHeader, Avatar } from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Link } from '@reach/router';
import { unProtectedComponent } from '../../components/Unprotected';

import './styles.css';

const RegistrationForm = unProtectedComponent(({ form, intl }) => {
  const state = {
    confirmDirty: false
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: state.confirmDirty || !!value });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const { getFieldDecorator } = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: '100vh' }}
    >
      <Form
        {...formItemLayout}
        onSubmit={handleSubmit}
        className="register__form"
      >
        <PageHeader
          title={intl.formatMessage({ id: 'register' })}
          color="rgba(0, 0, 0, 0.65)"
        >
          <Avatar style={{ backgroundColor: '#1DA57A' }} icon="user-add" />
        </PageHeader>
        <Form.Item label={intl.formatMessage({ id: 'email' })}>
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
          })(<Input />)}
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'password' })} hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                validator: validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item
          label={intl.formatMessage({ id: 'confirmPassword' })}
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!'
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            <FormattedMessage id={'register'} />
          </Button>
        </Form.Item>

        <Form.Item className="already__registered">
          <FormattedMessage id={'alreadyRegistered'} />{' '}
          <Link to={'/login'}>
            <FormattedMessage id={'login'} />
          </Link>
        </Form.Item>
      </Form>
    </Row>
  );
});

export const WrappedRegistrationForm = Form.create({ name: 'register' })(
  injectIntl(RegistrationForm)
);
