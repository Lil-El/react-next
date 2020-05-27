import UserLayout from './'
import { Form, Input, Button } from 'antd'

function UserAdd(props) {
  function handleSubmit(ev) {
    ev.preventDefault();
  }
  return (
    <UserLayout>
      <Form className="login-form" style={{ maxWidth: '300px' }} onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            添加用户
                </Button>
        </Form.Item>
      </Form>
    </UserLayout>
  )
}
export default UserAdd;