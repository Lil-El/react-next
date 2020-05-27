import { withRouter } from 'next/router'
import Link from 'next/link'
import { Menu, Layout } from 'antd'
const { Sider, Content } = Layout
function UserLayout(props) {
  return (
    <>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[props.router.pathname]}
            selectedKeys={[props.router.pathname]}
          >
            <Menu.Item key="/user/list">
              <Link href="/user/list"><a>用户列表</a></Link>
            </Menu.Item>
            <Menu.Item key="/user/add">
              <Link href="/user/add" ><a>用户管理</a></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: 10 }}>
          {props.children}
        </Content>
      </Layout>
    </>
  )
}
export default withRouter(UserLayout)