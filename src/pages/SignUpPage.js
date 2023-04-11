
import Appbar from "./AppBar";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { EyeOutlined,EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from "./css/MainPage.module.css";
import Image from "next/image";
  

export default function SignUpPage() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
return(
    <>
          <Appbar />
          <div className="flex items-center justify-center pt-[3rem]">
  <div className="w-[30rem] h-[25rem] bg-lime-300 flex items-center justify-center rounded-xl">
<div className="flex items-center justify-center">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <Form.Item
        name="email"
        
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>

      <Form.Item
  name="password"
  rules={[    {      required: true,      message: 'Please input your password!',    },  ]}
  hasFeedback
>
  <Input.Password
    prefix={<LockOutlined className="site-form-item-icon" />}
    placeholder="Password"
    iconRender={(visible) =>
      visible ? <EyeOutlined /> : <EyeInvisibleOutlined style={{ opacity: 0.3 }} />
    }
  />
</Form.Item>

<Form.Item
  name="confirm"
  dependencies={['password']}
  hasFeedback
  rules={[    {      required: true,      message: 'Please confirm your password!',    },    ({ getFieldValue }) => ({      validator(_, value) {        if (!value || getFieldValue('password') === value) {          return Promise.resolve();        }        return Promise.reject(          new Error('The two passwords that you entered do not match!')        );      },    }),  ]}
>
  <Input.Password
    prefix={<LockOutlined className="site-form-item-icon" />}
    placeholder="Confirm Password"
    iconRender={(visible) =>
      visible ? <EyeOutlined /> : <EyeInvisibleOutlined style={{ opacity: 0.3 }} />
    }
  />
</Form.Item>
         
   
        <Button type="primary" htmlType="submit" className="login-form-button">
        Sign Up
        </Button>
 


     
    </Form>
    </div>
    </div>
    
    </div>
    <div className="flex justify-evenly items-center flex-warp " id={styles.ImageLogin}>
             <div
                  className="flex justify-center items-center"
             
                >
                  <Image src="/image 4.png" alt="" width={500} height={500} />
                </div>
                <div
                  className="flex justify-center items-center"
             
                >
                  <Image src="/image 1.png" alt="" width={500} height={500} />
                </div>
                <div
                  className="flex justify-center items-center"
             
                >
                  <Image src="/t.png" alt="" width={500} height={500} />
                </div>
                </div>
         </>
         
)
}
