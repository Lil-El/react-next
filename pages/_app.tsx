import App from 'next/app'
import Link from 'next/link'
import { Layout, Menu } from 'antd'
import { withRouter } from 'next/router'
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;
class LayoutApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps }
  }
  render() {
    // Component就是页面组件
    let { Component } = this.props;
    let pathname = this.props.router.pathname
    return (
      <>
        <style jsx>
          {
            `a{display:inline-block!important}`
          }
        </style>
        <Layout>
          <Header>
            <img src="/images/logo.png" alt="logo" style={{ width: 30, height: 30, margin: '0 20px', }} />
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: "64px", display: "inline-block" }}
              defaultSelectedKeys={['/']}
              selectedKeys={[pathname]}
            >
              <Menu.Item key="/">
                <Link href="/"><a>首页</a></Link>
              </Menu.Item>
              <Menu.Item key="/user">
                <Link href="/user" ><a>用户管理</a></Link>
              </Menu.Item>
              <Menu.Item key="/profile">
                <Link href="/profile"><a>个人中心</a></Link>
              </Menu.Item>
              <Menu.Item key="/login">
                <Link href="/login"><a>登录</a></Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Component {...this.props.pageProps} />
          <Footer>MINO</Footer>
        </Layout>
      </>
    )
  }
}
export default withRouter(LayoutApp)