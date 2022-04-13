import Mock from 'mockjs'
export default {
  getMenu: config => {
    console.log(config);
    const { username, password } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === '52@Ereshkigal') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path:'/',
              name:'HomePage',
              label:'个人主页',
              icon:'s-home',
              url: 'Home/Home'
            },
            {
              path:'/anime',
              name:'AnimePage',
              label:'番剧',
              icon:'film',
              url:'Anime/Anime'
            },
            {
              path:'/user',
              name:'UserPage',
              label:'用户信息',
              icon:'user',
              url:'UserManage/UserManage'
            },
            {
              label:'其他',
              icon:'location',
              children:[
                  {
                      path:'/page1',
                      name:'page1',
                      label:'页面1',
                      icon:'setting',
                      url:'Other/PageOne'
                  },
                  {
                      path:'/page2',
                      name:'page2',
                      label:'页面2',
                      icon:'setting',
                      url:'Other/PageTwo'
                  }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path:'/',
              name:'HomePage',
              label:'个人主页',
              icon:'s-home',
              url: 'Home/Home'
            },
            {
              path:'/anime',
              name:'AnimePage',
              label:'番剧',
              icon:'film',
              url:'Anime/Anime'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}
