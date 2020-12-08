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
// 登录页面的数据和接口
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
  {
    name: '游客',
    password: 'ahui123456',
  }
]
// 添加用户
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
// 登录功能，对已经存在的用户进行核对
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

// 世界评论页面的数据和接口
// 数据
let commentsList = [
  {
    id: 1,
    url:
      "https://tncache1-f1.v3mh.com/734ecd72bd8e5ca7214201a38beb94b0_1607221734636",
    userName: "小飞侠",
    word: "小飞侠太喜欢看漫画了",
    time: "2020-12-18  14:40",
  },
  {
    id: 2,
    url:
      "https://tncache1-f1.v3mh.com/social/9b83b34e44278fa9fadc479dda340c86",
    userName: "小杨同学",
    word: "小杨喜欢吃饭，看漫画，打豆豆",
    time: "2020-11-11  11:11",
  },
  {
    id: 3,
    url:
      "https://tncache1-f1.v3mh.com/social/acba1fe653605b0fe00f4e1753c7c3be",
    userName: "豆豆",
    word: "豆豆这么可爱，为什么要打他",
    time: "2020-10-10  09:45",
  },
  {
    id: 4,
    url:
      "https://tncache1-f1.v3mh.com/social/008b1d8a3be6c7db5c64479566188961-cover-faces",
    userName: "喵喵拳",
    word: "喵喵拳看了漫画之后，握紧了他的拳头",
    time: "2020-10-02  07:09",
  },
  {
    id: 5,
    url:
      "https://tncache1-f1.v3mh.com/social/6d6a498e5aa9184441d05d10ae6a9ebf-crop10-2-cover",
    userName: "喔喔糖",
    word: "边吃喔喔糖边看漫画更有感觉哟",
    time: "2020-09-19  7:00",
  }
]
// 获取已存在评论内容接口
const existComment = Mock.mock('/world/getComment', 'get', (options) => {
  return {
    status: 200,
    msg: "获取成功",
    list: commentsList
  }
})
let addContent = {
  url:
    "https://tncache1-f1.v3mh.com/social/9aa6e4a060ddad59aac4e2926f9738e8-cover-faces",
  userName: userList[userList.length - 1].name,
}
// 发表评论接口
const publishComment = Mock.mock('/world/publish', 'post', (options) => {
  const { inputComments, date } = JSON.parse(options.body)
  addContent.word = inputComments;
  addContent.time = date;
  console.log(addContent)
  commentsList.unshift(addContent);
  return {
    status: 200,
    msg: "评论成功"
  }
})
// 删除评论接口
const deleteComment = Mock.mock(/\/world\/delete/, 'get', (options) => {
  const id = getQuery(options.url, "delIndex")
  console.log(id);
  commentsList.splice(id, 1)
  return {
    status: 200,
    msg: "删除成功",
    backContent: addContent
  }
})
