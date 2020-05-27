import { Button, Layout } from 'antd'
const { Content } = Layout
import router from 'next/router'

export default function (props) {
  return (
    <Content>
      <div>Home</div>
      <Button onClick={() => router.push('/user')}>/user</Button>
    </Content>
  )
}