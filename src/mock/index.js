import Mock from 'mockjs'

//获取get参数
const getQuery = (url, name) => {
  const index = url.indexOf('?')
  if (index !== -1) {
    const queryStrArr = url.substr(index + 1).split('&')
    for (let i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split('=')
      if (itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
  /* return null */
}
//分页功能
const data = Mock.mock(/\/api\/news/, 'get', (options) => {
  const pagesize = getQuery(options.url, 'name')
  const pageIndex = getQuery(options.url, 'pageindex')
  //截取数据开始位置
  const start = (pageIndex - 1) * pagesize
  //截取数据结束位置
  const end = pageIndex * pagesize
  //计算总页数
  /*  const totalPage=Math.ceil(total/pagesize) */

  /*  const list=pageIndex>totalPage?[]:newList.splice(start,end) */
  return {
    status: 200,
    msg: '获取数据成功',
  }
})

const data1 = Mock.mock('/api/data', 'post', (options) => {
  console.log(options)
  const body = JSON.parse(options.body)
  console.log(body)
  return {
    status: 200,
    msg: '获取数据成功',
  }
})

/* 用户列表 */
let userList = [
  {
    name: '喵喵拳',
    password: 'mmq123',
  },
  {
    name: '阿辉',
    password: 'ahui123456',
  },
]
//添加用户
const addUser = Mock.mock('/user/add', 'post', (options) => {
  const body = JSON.parse(options.body)
  userList.push(body)
  console.log(body)
  return {
    list: userList,
    status: 200,
    msg: '注册成功',
  }
})
//登录功能，对已经存在的用户进行核对
const login = Mock.mock('/user/search', 'post', (options) => {
  const { name, password } = JSON.parse(options.body);
  for (let i = 0; i < userList.length; i++) { 
    //判断userList中是否存在该用户并且用户密码是否正确
    if (name === userList[i].name && password === userList[i].password) {
        return {
            meta: {
                msg: 'success',
                status: 200
            },
        }
    }
}
return {
    meta: {
        msg: 'error',
        status: 201
    }
}

})
