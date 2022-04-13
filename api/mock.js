import Mock from 'mockjs'
import userApi from './mockServerData/user'
import permissionApi from './mockServerData/permission'


Mock.mock(/api\/user\/getUser/, 'get', userApi.getUserList)
// 权限相关
Mock.mock(/api\/permission\/getMenu/, 'post', permissionApi.getMenu)
Mock.mock(/UserPage\/add/, 'post', userApi.createUser)
Mock.mock(/UserPage\/edit/, 'post', userApi.updateUser)
Mock.mock(/UserPage\/delete/, 'post', userApi.deleteUser)