import UserLayout from './'
import Link from 'next/link'
import { List } from 'antd'

function UserList(props) {
  return (
    <UserLayout>
      <List
        header={<div>用户列表</div>}
        footer={<div>共计多少{props.list.length}个用户</div>}
        bordered
        dataSource={props.list}
        renderItem={(item: any) => (
          <List.Item key={item._id}>
            <Link as={`/user/detail/${item._id}`} href={{ pathname: `/user/detail`, query: { id: item._id } }}>
              <a>{item.username}</a>
            </Link>
          </List.Item>
        )}
      />


    </UserLayout>
  )
}
UserList.getInitialProps = async (ctx) => {
  if (ctx.req) { ctx.req = 'req' }
  if (ctx.res) { ctx.res = 'res' }
  let list = [
    { _id: 1, username: "yxd", password: 123 },
    { _id: 2, username: "yxd2", password: 123 }]
  return { list };
}
export default UserList;