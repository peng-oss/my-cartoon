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
  const { name, password } = JSON.parse(options.body)
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
      status: 201,
    },
  }
})

/* 排行榜区域请求接口和数据 */

//总表单数据
let rankPopularityLists = [
  {
    rankName: '少女榜',
    imgUrl: 'https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w120.webp.h',
    title: '再度与你',
    type: ['日常', '恋爱', '治愈'],
    dec: '高中时因误会相互错过的两人，在大学毕业后重回高中母校任教。...',
    chapter: '第61话 两个麻烦',
  },
  {
    rankName: '青女榜',
    imgUrl: 'https://tn1-f2.kkmh.com/image/200706/MpvYndrLa.webp-t.w120.webp.h',
    title: '爱情的样子：心之所向',
    type: ['日常', '恋爱', '治愈'],
    dec: '为了梦想而分手的乐天派演员路炀，为了对得起失去的爱情，…',
    chapter: '第18话  心动不自知',
  },
  {
    rankName: '少年榜',
    imgUrl: 'https://tn1-f2.kkmh.com/image/190506/tEf3Fbf7t.webp-t.w120.webp.h',
    title: '超能立方',
    type: ['日常', '恋爱', '治愈'],
    dec: '平凡男生偶得女神垂青，却惹上黑道大佬，机缘巧合之下获得…',
    chapter: '第197话 遇事不决aoe',
  },
  {
    rankName: '青年榜',
    imgUrl: 'https://tn1-f2.kkmh.com/image/200727/edEjPcrEp.webp-t.w120.webp.h',
    title: '我独自升级',
    type: ['日常', '恋爱', '治愈'],
    dec: '10年前，世界与其他次元连接的“门”被打开，各种魔物不断…',
    chapter: '第128话 记忆数据',
  },
  {
    rankName: '人气榜',
    imgUrl: 'https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w120.webp.h',
    title: '再度与你',
    type: ['日常', '恋爱', '治愈'],
    dec: '高中时因误会相互错过的两人，在大学毕业后重回高中母校任…',
    chapter: '第61话 两个麻烦',
  },
  {
    rankName: '新作榜',
    imgUrl: 'https://tn1-f2.kkmh.com/image/201127/xVEBKMaOl.webp-t.w120.webp.h',
    title: '谁把谁当真',
    type: ['日常', '恋爱', '治愈'],
    dec: '一个风流薄幸、肆意游戏人间；一个历经千帆、理智凌驾感情…',
    chapter: '第2话 面对我你的心跳好快',
  },
]
//总表单下的小表单
let popularityLists = [
  {
    id: 2,
    title: '星辰于我',
    dated: '犬一',
  },
  {
    id: 3,
    title: '八十一道超纲题',
    dated: '第69话 新副本又将来临',
  },
  {
    id: 4,
    title: 'FOG[电竞]',
    dated: '第2话 重逢',
  },
  {
    id: 5,
    title: '星辰于我',
    dated: '第18话 星星的夜空',
  },
  {
    id: 6,
    title: '怪奇实录',
    dated: '第334话  人头蜂巢',
  },
  {
    id: 7,
    title: '超能立方',
    dated: '第196话  交易的艺术',
  },
  {
    id: 8,
    title: '非友人关系',
    dated: '第18话  心动不自知',
  },
  {
    id: 9,
    title: '他那么撩',
    dated: '后记（下）好久不见',
  },
  {
    id: 10,
    title: '不可爱的TA',
    dated: '第9话  让他的眼里只...',
  },
]
//少女榜数据
let girlLists = [
  {
    id: 1,
    title: '再度与你',
    author: '晗旭L-Mo',
    url: 'https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w120.webp.h',
    describe: ' 高中时因误会相互错过的两人，在大学毕业后重回高中母…',
    type: ['日常', '恋爱'],
  },
  {
    id: 2,
    title: '星尘与我',
    author: '犬一',
    url: 'https://tn1-f2.kkmh.com/image/200716/vdTwyZvcw.webp-t.w120.webp.h',
    describe: '  沐子星五岁时，一个好看的男孩子.司南，如春天的景象…',
    type: ['日常', '治愈'],
  },
  {
    id: 3,
    title: '又见面了，楼小姐',
    author: '虹君',
    url: 'https://tn1-f2.kkmh.com/image/201120/ySDfYsMbE.webp-t.w120.webp.h',
    describe: ' 为了守护家族，少女特工楼靡音在一次次失败后终于夺得…',
    type: ['恋爱', '剧情'],
  },
  {
    id: 4,
    title: '成也萧河',
    author: '壳小杀（主笔）',
    url: 'https://tn1-f2.kkmh.com/image/200703/KYnRXhLuQ.webp-t.w120.webp.h',
    describe: 'TOP级少女漫第二季强势归来！萧河高调加入PPB战队，与…',
    type: ['校园', '正能量'],
  },
  {
    id: 5,
    title: '他那么撩',
    author: '曲小蛐（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200925/nLtcHbBAW.webp-t.w120.webp.h',
    describe: '乖乖女学霸秦晴转学第一天，意外被卷入到一场约架之中…',
    type: ['治愈', '校园'],
  },
  {
    id: 6,
    title: '他的苹果',
    author: '橘枳',
    url: 'https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w120.webp.h',
    describe: '普通高中生竟是红发魔女的女儿————满级大佬般的存…',
    type: ['奇幻', '恋爱'],
  },
  {
    id: 7,
    title: '吾凰在上',
    author: '嗷小泽',
    url: 'https://tn1-f2.kkmh.com/image/200528/foq9muA1L.webp-t.w120.webp.h',
    describe: '倒霉现代少女穿越异世界，意外获得不死能力的她，居然…',
    type: ['古风', '恋爱'],
  },
  {
    id: 8,
    title: '保护我方大大',
    author: '绿绿绿酱',
    url: 'https://tn1-f2.kkmh.com/image/190822/WeaYdsjnJ.webp-t.w120.webp.h',
    describe: '人前小可爱人后钢铁直男的十八线练习生陆衍微博数据凉…',
    type: ['爆笑', '恋爱'],
  },
  {
    id: 9,
    title: '昼夜连绵',
    author: 'Anjeo',
    url: 'https://tn1-f2.kkmh.com/image/190305/tmfbQ6DrA.webp-t.w120.webp.h',
    describe: ' 她是普通少女，却拥有“死神之眼”，能看见他人的死亡…',
    type: ['奇幻', '恋爱'],
  },
  {
    id: 10,
    title: '露西亚-攻略公爵计划',
    author: 'TARUVI',
    url: 'https://tn1-f2.kkmh.com/image/190906/rCFwiGaZH.webp-t.w120.webp.h',
    describe: '露西亚是王国最没存在感的第十六位公主，通过梦境她预…',
    type: ['奇幻', '恋爱'],
  },
  {
    id: 11,
    title: '妻为上',
    author: '绿野千鹤/晋江文学城+博易漫画',
    url: 'https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w180.webp.h',
    describe: '景韶战功赫赫，却遭人诬陷落得鸟尽弓藏，没想到最后对…',
    type: ['剧情', '恋爱'],
  },
  {
    id: 12,
    title: '恋爱手游的男主都很危险',
    author: 'SUOL(主笔)',
    url: 'https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w120.webp.h',
    describe: ' 穿越成乙女手游中的反派，不论如何选择，结局都是死亡…',
    type: ['韩漫', '恋爱'],
  },
  {
    id: 13,
    title: '谁把谁当真',
    author: '水千丞（原著）',
    url: 'https://tn1-f2.kkmh.com/image/190822/WeaYdsjnJ.webp-t.w120.webp.h',
    describe: ' 一个风流薄幸、肆意游戏人间；一个历经千帆、理智凌驾…',
    type: ['剧情', '都市'],
  },
  {
    id: 14,
    title: '《妃为九卿》-神医小娇妃',
    author: ' 狐七（主笔）',
    url: 'https://tn1-f2.kkmh.com/image/201120/ySDfYsMbE.webp-t.w120.webp.h',
    describe: ' 官家嫡女，父亲不慈，姨母伪善，小白花妹妹心怀鬼胎，…',
    type: ['剧情', '古风'],
  },
  {
    id: 15,
    title: '花与隐匿之乌',
    author: '薄川酒酒子',
    url: 'https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w120.webp.h',
    describe: ' 与从前的相遇，好像一个秘密。一个少女，为寻找被鬼怪…',
    type: ['奇幻', '剧情'],
  },
]
//青女榜数据
let yongGirllists = [
  {
    id: 1,
    title: '爱情的样子：心之所向',
    author: '路边张三',
    url: 'https://tn1-f2.kkmh.com/image/200706/MpvYndrLa.webp-t.w120.webp.h',
    describe: '为了梦想而分手的乐天派演员路炀，为了对得起失去的爱……',
    type: ['剧情', '恋爱'],
  },
  {
    id: 2,
    title: '谷围南亭',
    author: '墨飞',
    url: 'https://tn1-f2.kkmh.com/image/200714/juxCCvnxK.webp-t.w120.webp.h',
    describe: ' 一心只想去广美上大学的话痨少年高影，误入南亭村大清…',
    type: ['奇幻', '剧情'],
  },
  {
    id: 3,
    title: '非友人关系',
    author: '子雾啊',
    url: 'https://tn1-f2.kkmh.com/image/181227/D1AIwxtIH.webp-t.w120.webp.h',
    describe: '原本见了面就打架的两个男人，注定做不成朋友，那会是……',
    type: ['日常', '治愈'],
  },
  {
    id: 4,
    title: '成为伯爵家的废物',
    author: 'PAN4+PING+Yu Ryeo Han+COPIN',
    url: 'https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w120.webp.h',
    describe: ' 一个出场5秒就下线的贵族混混，一个高冷霸气的英雄男…',
    type: ['奇幻', '剧情'],
  },
  {
    id: 5,
    title: '谁把谁当真',
    author: '水千丞（原著）',
    url: 'https://tn1-f2.kkmh.com/image/201127/xVEBKMaOl.webp-t.w120.webp.h',
    describe: ' 一个风流薄幸、肆意游戏人间；一个历经千帆、理智凌驾…',
    type: ['剧情', '都市'],
  },
  {
    id: 6,
    title: '穿越成反派要如何活命',
    author: '王一（主笔）',
    url: 'https://tn1-f2.kkmh.com/image/190703/VSpp38g1w.webp-t.w120.webp.h',
    describe: ' 总裁得了绝症意外穿书，竟穿成要被小说男主杀死的反派…',
    type: ['剧情', '古风'],
  },
  {
    id: 7,
    title: '妻为上',
    author: '绿野千鹤',
    url: 'https://tn1-f2.kkmh.com/image/200925/kFqcvilNm.webp-t.w120.webp.h',
    describe: '景韶战功赫赫，却遭人诬陷落得鸟尽弓藏，没想到最后对…',
    type: ['剧情', '恋爱'],
  },
  {
    id: 8,
    title: '不可爱的TA',
    author: ' zero',
    url: 'https://tn1-f2.kkmh.com/image/190103/nJzja4cVQ.webp-t.w120.webp.h',
    describe: '我从未想象过和他在一起”“我从未想过和除她以外的……',
    type: ['剧情', '恋爱'],
  },
  {
    id: 9,
    title: '蝉女',
    author: ' 宫缘乾',
    url: 'https://tn1-f2.kkmh.com/image/181025/4diVYyMUJ.webp-t.w120.webp.h',
    describe: '她作为“鉴情师”，以各种满足男人幻想的身份出现在他…',
    type: ['剧情', '都市'],
  },
  {
    id: 10,
    title: 'FOG[电竞]',
    author: '漫漫何其多',
    url: 'https://tn1-f2.kkmh.com/image/200925/kLFxrFMAV.webp-t.w120.webp.h',
    describe: '两年前，余邃被传卖队友，被人口诛笔伐，他可以什么都…',
    type: ['剧情', '恋爱'],
  },
  {
    id: 11,
    title: '步天歌',
    author: ' 夏达',
    url: 'https://tn1-f2.kkmh.com/image/200714/juxCCvnxK.webp-t.w120.webp.h',
    describe: '异象天光中，帝王家诞生一对特殊的双生龙凤胎，男婴额…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 12,
    title: '这题超纲了',
    author: '木瓜黄（原著）',
    url: 'https://tn1-f2.kkmh.com/image/190703/VSpp38g1w.webp-t.w120.webp.h',
    describe: '谁能想到一开始针锋相对的学渣许盛和学神邵湛，互换了…',
    type: ['剧情', '校园'],
  },
  {
    id: 13,
    title: '哑奴',
    author: '百里君兮（主笔）',
    url: 'https://tn1-f2.kkmh.com/image/190822/WeaYdsjnJ.webp-t.w120.webp.h',
    describe: '变态蛮霸王爷×软弱代嫁哑奴，镇北王看上沈知府家的千…',
    type: ['剧情', '古风'],
  },
  {
    id: 14,
    title: '掌中之物',
    author: '金丘（主笔）',
    url: 'https://tn1-f2.kkmh.com/image/201120/ySDfYsMbE.webp-t.w120.webp.h',
    describe: ' 一个家境优越事业爱情双丰收的甜美女人，意外成为残暴…',
    type: ['剧情', '恋爱'],
  },
  {
    id: 15,
    title: '雕塑',
    author: '柯小',
    url: 'https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w120.webp.h',
    describe: ' 怨念来自他人的不甘？还是来自自我的压抑？雕塑女学…',
    type: ['恋爱', '剧情'],
  },
]
//少年榜数据
let yongLists = [
  {
    id: 1,
    title: '超能立方',
    author: '水落声声',
    url: 'https://tn1-f2.kkmh.com/image/190506/tEf3Fbf7t.webp-t.w120.webp.h',
    describe: ' 平凡男生偶得女神垂青，却惹上黑道大佬，机缘巧合之下…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 2,
    title: '我独自升级',
    author: ' DUBU(主笔)',
    url: 'https://tn1-f2.kkmh.com/image/200727/edEjPcrEp.webp-t.w120.webp.h',
    describe: '  10年前，世界与其他次元连接的“门”被打开，各种魔物…',
    type: ['奇幻', '剧情'],
  },
  {
    id: 3,
    title: '拔剑九亿次',
    author: ' YKB+ SOON-Q+ STUDIO KHIT',
    url: 'https://tn1-f2.kkmh.com/image/200611/ZxqCJEgwj.webp-t.w120.webp.h',
    describe: ' 一个俗套的穿越后带挂升级故事，却因为外挂系统的运算…',
    type: ['奇幻', '剧情'],
  },
  {
    id: 4,
    title: '高等灵魂',
    author: '千亮',
    url: 'https://tn1-f2.kkmh.com/image/181113/stfsPy78q.webp-t.w120.webp.h',
    describe: ' 一个无神论少年蒋乘风因为一次意外获得一种神奇的力量…',
    type: ['灵异', '剧情'],
  },
  {
    id: 5,
    title: '圣墟',
    author: ' 辰东（原著）+常盘勇者',
    url: 'https://tn1-f2.kkmh.com/image/181227/IIdbbbAYf.webp-t.w120.webp.h',
    describe: '  后文明时代，地球异象频发，名山大川中出现异果，生灵…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 6,
    title: '三岁开始做王者',
    author: ' 主笔：Fuyuki23',
    url: 'https://tn1-f2.kkmh.com/image/200827/AjCNlcyCM.webp-t.w120.webp.h',
    describe: '  曾经的一国之君意外身亡，穿越到魔法世界却成为手无缚…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 7,
    title: '成为伯爵家的废物',
    author: 'PAN4+PING+Yu Ryeo Han+COPIN',
    url: 'https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w120.webp.h',
    describe: ' 一个出场5秒就下线的贵族混混，一个高冷霸气的英雄男…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 8,
    title: '一拳超人',
    author: '  ONE+村田雄介',
    url: 'https://tn1-f2.kkmh.com/image/200410/DEiCUYhuv.webp-t.w120.webp.h',
    describe: ' 主人公埼玉原本是一名整日奔波于求职的普通人。三年前…',
    type: ['少年', '正能量'],
  },
  {
    id: 9,
    title: '斗罗大陆',
    author: ' 风炫动漫',
    url: 'https://tn1-f2.kkmh.com/image/171110/n9wnytb3h.webp-t.w120.webp.h',
    describe: ' 偷学绝顶武功的唐三跳崖明志，转世后却依然是令人艳羡…',
    type: ['奇幻', '少年'],
  },
  {
    id: 10,
    title: '学霸的星辰大海',
    author: '眉语目笑（原著）+风狸绘漫画',
    url: 'https://tn1-f2.kkmh.com/image/200110/DMbhHOOYT.webp-t.w120.webp.h',
    describe: ' “你把打游戏的心思用在学习上就好了。”当这句全世界…',
    type: ['奇幻', '剧情'],
  },
  {
    id: 11,
    title: '八十一道超纲题',
    author: '  条纹花瓶（原著）+常盘勇者',
    url: 'https://tn1-f2.kkmh.com/image/200714/juxCCvnxK.webp-t.w120.webp.h',
    describe: ' 2030年，世界末日来临，无数人神秘死亡，剩下的幸存者…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 12,
    title: '诸界末日在线',
    author: ' 烟火成城（原著）+ 春日文化',
    url: 'https://tn1-f2.kkmh.com/image/190703/VSpp38g1w.webp-t.w120.webp.h',
    describe: ' 诸界末日降临，顾青山在这绝望的黑暗之中，一人挣脱时…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 13,
    title: '谷围南亭',
    author: '墨飞',
    url: 'https://tn1-f2.kkmh.com/image/190822/WeaYdsjnJ.webp-t.w120.webp.h',
    describe: ' 一心只想去广美上大学的话痨少年高影，误入南亭村大清…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 14,
    title: '非人哉',
    author: '一汪空气',
    url: 'https://tn1-f2.kkmh.com/image/201120/ySDfYsMbE.webp-t.w120.webp.h',
    describe: '  萌化后的神怪在人间，爆笑日常更新中【授权/每周六更…',
    type: ['剧情', '奇幻'],
  },
  {
    id: 15,
    title: '航海王（海贼王）',
    author: '尾田荣一郎',
    url: 'https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w120.webp.h',
    describe: '  时值"大海贼时代"。路飞为实现与因救他而断臂的香克斯…',
    type: ['少年', '剧情'],
  },
]
// 获取全部榜单接口
const getAllRank = Mock.mock('/rank/all', 'get', (options) => {
  return {
    status: 200,
    msg: '获取成功',
    list: rankPopularityLists,
    little: popularityLists,
  }
})
//获取少女榜接口

const getGirlRank = Mock.mock('/rank/girl', 'get', (options) => {
  return {
    status: 200,
    msg: '获取成功',
    list: girlLists,
  }
})

//获取青女榜
const getYongRank = Mock.mock('/rank/yongGirl', 'get', (options) => {
  return {
    status: 200,
    msg: '获取成功',
    list: yongGirllists,
  }
})

//获取少年榜
const getYong = Mock.mock('/rank/yong', 'get', (options) => {
  return {
    status: 200,
    msg: '获取成功',
    list: yongLists,

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
    time: "2020-12-08  14:40",
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
/* 作品组件(works)获取作品简介 */
// 数据
let BackArtData = {
  url:
    "https://tn1-f2.kkmh.com/image/201208/hyIKSuRfi.webp-t.w750.webp.h",
  name: "狄奥多之歌",
  autor: "乱步羊羊羊（主笔）+角年千兆（编剧）",
  introduction:
    "活泼好动的西帝国公主希尔娜在年幼时邂逅了来自北方王国的质子拉提奥，两人的心逐渐靠近，而东帝国的少年国王尼亚也在暗中窥视...可惜三国之间只是表面和平，战争一触即发，昔日的青梅竹马也终将面临爱情、责任间的抉择：剑与血，硝烟与眼泪，真心与背叛，共同交织谱写一曲少年少女的“狄奥多之歌”.每周二更新...",
}
/* 作品组件(works)获取漫画章节 */
let backSItemData = [
  {
    url: "https://f2.kkmh.com/image/200103/klF8eNuNi.webp-t.w207.webp.h",
    chapter: "序章  硝烟域泪",
    num: "69486",
    time: "01-03",
    likeIf: false
  },
  {
    url: "https://f2.kkmh.com/image/200104/KXXNqCAXU.webp-t.w207.webp.h",
    chapter: " 第1话  我要你做我仆人！",
    num: "120024",
    time: "01-04",
    likeIf: false
  },
  {
    url: "https://f2.kkmh.com/image/200106/P3VV5iFbK.webp-t.w207.webp.h",
    chapter: "第2话  作为仆人的“惩罚",
    num: "82362",
    time: "01-07",
    likeIf: false
  },
  {
    url: "https://f2.kkmh.com/image/200113/bmowYN7al.webp-t.w207.webp.h",
    chapter: "第3话  骑马教学这么甜？！",
    num: "78106",
    time: "01-14",
    likeIf: false
  },
  {
    url: "https://f2.kkmh.com/image/200203/OnfHiC4Dy.webp-t.w207.webp.h",
    chapter: "第4话  公主的价值",
    num: "571440",
    time: "01-21",
    likeIf: false
  },
  {
    url: "https://f2.kkmh.com/image/200120/BBY4tBVir.webp-t.w207.webp.h",
    chapter: "第5话  鼓励",
    num: "69367",
    time: "01-28",
    likeIf: false
  },
]
// 接口
const getArtData = Mock.mock('/works/artData', 'get', (options) => {
  return {
    status: 200,
    msg: '获取成功',
    BackArtData,
    backSItemData
  }
})
// followWorks是关注作品的对象 里面有作品名和作者名
// 关注 
let followWorks = {};
const followed = Mock.mock('/works/followed', 'post', options => {
  const { id: id } = JSON.parse(options.body);
  if (id == 1) {
    const { name, author } = JSON.parse(options.body);
    followWorks.worksName = name
    followWorks.worksAuthor = author
    console.log(followWorks)
    return {
      status: 200,
      msg: "关注成功咯!!!"
    }
  } else {
    followWorks = {}
    console.log(followWorks)
    return {
      status: 200,
      msg: "已取消关注，记得回来哟!!!"
    }
  }
})
// 取消关注

