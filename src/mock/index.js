import Mock from 'mockjs'
import routers from './routers.json'
const data = {
    message: "登录成功",
    code: 200,
    token: "mwy-9998",
    data: {}
};
Mock.mock('/api/login', 'post', data)
Mock.mock('/api/getRouters', 'post', routers)

export default Mock;