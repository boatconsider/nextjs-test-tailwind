import Appbar from "./AppBar";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from "./css/MainPage.module.css";
import { useRouter } from 'next/router'
import Image from "next/image";
export default function LoginPage() {
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const router = useRouter()
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
         
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a onClick={() => router.push('/SignUpPage')}>register now!</a>
      </Form.Item>
      
      </Form.Item>

     
    </Form>
</div>
         <div  >
       
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
