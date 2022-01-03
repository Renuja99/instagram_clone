import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (

    <Card size="small"style={CardStyles}>
        <img src="https://www.riverforestlibrary.org/wp-content/uploads/2018/05/instagram-1024x576.jpg" alt="instagram_logo" style={Instagram_logo} />
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        >
        <Form.Item
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your Username!',
            },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your Password!',
            },
            ]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
            Forgot password
            </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            Or <a href="">register now!</a>
        </Form.Item>
        </Form>
    </Card>
  );
};


export default Login

const CardStyles={

    width: 400,
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderRadius: '10px',
    borderColor: 'rgb(16,82,132)',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'white'
}

const Instagram_logo = {
    height: "200px",
    width: '350px',
    marginBottom: '30px'
}

