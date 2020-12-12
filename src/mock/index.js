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

   /* 主页面的获取数据与接口 */

//轮播图图片源
let  LBimgList= [
  {
    url:
      "https://tn1-f2.kkmh.com/image/201208/hyIKSuRfi.webp-t.w750.webp.h",
  },
  {
    url:
      "https://tn1-f2.kkmh.com/image/201202/yIqDubkLA.webp-t.w750.webp.h",
  },
  {
    url:
      "https://tn1-f2.kkmh.com/image/201121/xmlrwhmgL.webp-t.w750.webp.h",
  },
  {
    url:
      "https://tn1-f2.kkmh.com/image/201211/UqnRfBAcA.webp-t.w750.webp.h",
  },
  {
    url:
      "https://tn1-f2.kkmh.com/image/201129/JCgPzApgH.webp-t.w750.webp.h",
  },
  {
    url:
      "https://tn1-f2.kkmh.com/image/201205/WyxxGsnJh.webp-t.w750.webp.h",
  },
]
//原创数据与图片源
let originalImgList= [
  {
    id: 1,
    url:
      "https://tn1-f2.kkmh.com/image/201009/OvEtlOWSI.webp-t.w207.webp.h",
    bookName: "透过指尖的光",
  },
  {
    id: 2,
    url:
      "https://tn1-f2.kkmh.com/image/201009/rUPqEUSEW.webp-t.w207.webp.h",
    bookName: "改行吧魔法师",
  },
  {
    id: 3,
    url:
      "https://tn1-f2.kkmh.com/image/190709/1BqbnrIPh.webp-t.w207.webp.h",
    bookName: "特别恋爱关系",
  },
  {
    id: 4,
    url:
      "https://tn1-f2.kkmh.com/image/201009/uOHhIOdju.webp-t.w207.webp.h",
    bookName: "三界制",
  },
  {
    id: 5,
    url:
      "https://tn1-f2.kkmh.com/image/200815/zwZFKoZdL.webp-t.w207.webp.h",
    bookName: "愤怒的撒切尔",
  },
  {
    id: 6,
    url:
      "https://tn1-f2.kkmh.com/image/200930/vizYZuhff.webp-t.w207.webp.h",
    bookName: "浮游梦",
  },
]
//惊恐数据与图片源
let   suspenseImgsList= [
  {
    id: 1,
    src:
      'https://tn1-f2.kkmh.com/image/200430/khhhTiBkP.webp-t.w207.webp.h',
    bookName: '强者永生',
    suspenseAuthor: 'JAY KUN',
  },
  {
    id: 2,
    src:
      'https://tn1-f2.kkmh.com/image/200110/cfXUZbqaK.webp-t.w207.webp.h',
    bookName: '须弥千愿卷',
    suspenseAuthor: '奥兹（主笔）+加缪（编剧）',
  },
  {
    id: 3,
    src:
      'https://tn1-f2.kkmh.com/image/200109/nzequoNNC.webp-t.w207.webp.h',
    bookName: '神泽',
    suspenseAuthor: 'Djade(主笔）+KRE（编剧）',
  },
  {
    id: 4,
    src:
      'https://tn1-f2.kkmh.com/image/170123/33h3huvuw.webp-t.w207.webp.h',
    bookName: '反转现实',
    suspenseAuthor: '天极焉加+快看漫画团队',
  },
  {
    id: 5,
    src:
      'https://tn1-f2.kkmh.com/image/200417/TdrJAkUsh.webp-t.w207.webp.h',
    bookName: '唐人街小先生',
    suspenseAuthor: '三老爷',
  },
  {
    id: 6,
    src:
      'https://tn1-f2.kkmh.com/image/190627/7ca0LRvVk.webp-t.w207.webp.h',
    bookName: '灵烛少女',
    suspenseAuthor: 'leu',
  },
  {
    id: 7,
    src:
      'https://tn1-f2.kkmh.com/image/190118/7wFkUEjHk.webp-t.w207.webp.h ',
    bookName: '傀园',
    suspenseAuthor: 'BING',
  },
  {
    id: 8,
    src:
      'https://tn1-f2.kkmh.com/image/191130/lDyEeKoWS.webp-t.w207.webp.h',
    bookName: '看见禽兽的声音',
    suspenseAuthor: '好饭+新果十二三',
  },
  {
    id: 9,
    src:
      ' https://tn1-f2.kkmh.com/image/180705/Z8fSi2plu.webp-t.w207.webp.h',
    bookName: '狼的谎言',
    suspenseAuthor: '金丘（主笔）+谨斯里（编剧）',
  },
  {
    id: 10,
    src:
      ' https://tn1-f2.kkmh.com/image/170922/43h4885wg.webp-t.w207.webp.h',
    bookName: '第二模式',
    suspenseAuthor: '幽·灵',
  },
  {
    id: 11,
    src:
      'https://tn1-f2.kkmh.com/image/180706/K3O0ERxy5.webp-t.w207.webp.h',
    bookName: '人类进化论',
    suspenseAuthor: '祝耕夫',
  },
  {
    id: 12,
    src:
      ' https://tn1-f2.kkmh.com/image/200327/AmfqfPkOh.webp-t.w207.webp.h',
    bookName: '未来航班',
    suspenseAuthor: '非人哉工作室',
  },
]
//新作榜图片
let  newWorkImgsList=[
  {
    id: 1,
    top: 'TOP.1',
    rank: '新晋黑马',
    bookName: 'FOG[电竞]',
    author: '漫漫何其多/晋江文学城+吃饱饭工厂',
    description: '两年前，余邃被传卖队友，被人口诛笔伐，他可以…',
    src:
      'https://tn1-f2.kkmh.com/image/200925/kLFxrFMAV.webp-t.w180.webp.h',
  },
  {
    id: 2,
    top: 'TOP.2',
    rank: '新晋黑马',
    bookName: '成为伯爵家的废物',
    author: 'PAN4+PING+Yu Ryeo Han+COPIN',
    description: '一个出场5秒就下线的贵族混混，一个高冷霸气的…',
    src:
      'https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w180.webp.h',
  },
  {
    id: 3,
    top: 'TOP.3',
    rank: '新晋黑马',
    bookName: '龙脉守护者',
    author: '娃哈哈-哈宝',
    description: '在华夏，先贤称之为“龙脉”，其强弱与流向，决…',
    src:
      'https://tn1-f2.kkmh.com/image/201119/McGOGMJoa.webp-t.w180.webp.h',
  },
  {
    id: 4,
    top: 'TOP.4',
    rank: '下降2名',
    bookName: '恋人夜间营业',
    author: '大雨儿（主笔）+谨斯里（编剧）',
    description: '和未婚夫一起匿名参加相亲节目！？一对很穷的职…',
    src:
      'https://tn1-f2.kkmh.com/image/200923/DCdolEdES.webp-t.w180.webp.h',
  },
  {
    id: 5,
    top: 'TOP.5',
    rank: '下降2名',
    bookName: '妻为上',
    author: '绿野千鹤/晋江文学城+博易漫画',
    description: '景韶战功赫赫，却遭人诬陷落得鸟尽弓藏，没想到…',
    src:
      'https://tn1-f2.kkmh.com/image/200925/kFqcvilNm.webp-t.w180.webp.h',
  },
  {
    id: 6,
    top: 'TOP.6',
    rank: '下降1名',
    bookName: '他那么撩',
    author: '曲小蛐（原著）+这块瓜有毒（主笔）+花村蘑菇（编剧）',
    description: '乖乖女学霸秦晴转学第一天，意外被卷入到一场约…',
    src:
      'https://tn1-f2.kkmh.com/image/200925/nLtcHbBAW.webp-t.w180.webp.h',
  },
  {
    id: 7,
    top: 'TOP.7',
    rank: '下降6名',
    bookName: '他的苹果',
    author: '橘枳',
    description: '普通高中生竟是红发魔女的女儿————满级大佬…',
    src:
      'https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w180.webp.h',
  },
  {
    id: 8,
    top: 'TOP.8',
    rank: '上升六名',
    bookName: '月光雕刻师',
    author: 'PARK JUNG YEOL',
    description: '在现实体感游戏风靡的未来，游戏天才少年李贤为…',
    src:
      'https://tn1-f2.kkmh.com/image/200610/ZunryLzNj.webp-t.w180.webp.h',
  },
  {
    id: 9,
    top: 'TOP.9',
    rank: '新晋黑马',
    bookName: '胖子英雄',
    author: '插座君+俊男桑',
    description: '他是个胖子，也是个英雄! 然而肥胖的烦恼却远大…',
    src:
      'https://tn1-f2.kkmh.com/image/201118/ommUjrLfL.webp-t.w180.webp.h',
  },
]
//飙升榜
let  riseWorkImgsList=[
  {
    id: 1,
    top: 'TOP.1',
    rank: '新晋黑马',
    bookName: '成为伯爵家的废物',
    author: 'PAN4+PING+Yu Ryeo Han+COPIN',
    description: '一个出场5秒就下线的贵族混混，一个高冷霸气的…',
    src:
      'https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w180.webp.h',
  },
  {
    id: 2,
    top: 'TOP.2',
    rank: '新晋黑马',
    bookName: 'FOG[电竞]',
    author: '漫漫何其多/晋江文学城+吃饱饭工厂',
    description: '两年前，余邃被传卖队友，被人口诛笔伐，他可以…',
    src:
      'https://tn1-f2.kkmh.com/image/200925/kLFxrFMAV.webp-t.w180.webp.h',
  },
  {
    id: 3,
    top: 'TOP.3',
    rank: '新晋黑马',
    bookName: '小心被梦魔吃掉哦',
    author: '西域儿',
    description: '因为生病而晚入学一个月的小透明，和最受欢迎的…',
    src:
      'https://tn1-f2.kkmh.com/image/200929/gK7KHIE54.webp-t.w180.webp.h',
  },
  {
    id: 4,
    top: 'TOP.4',
    rank: '新晋黑马',
    bookName: '不协调的恋爱',
    author: '莉茉',
    description: '对周围女孩子没有兴趣的全校第一美男子才贺京助…',
    src:
      'https://tn1-f2.kkmh.com/image/201119/bIrggfxiX.webp-t.w180.webp.h',
  },
  {
    id: 5,
    top: 'TOP.5',
    rank: '新晋黑马',
    bookName: '有妻徒刑',
    author: '绯小月',
    description: '妖异女督察与上百名穷凶极恶的囚犯一同被困于这…',
    src:
      'https://tn1-f2.kkmh.com/image/200923/nPPQTalZG.webp-t.w180.webp.h',
  },
  {
    id: 6,
    top: 'TOP.6',
    rank: '新晋黑马',
    bookName: '八十一道超纲题',
    author: '条纹花瓶（原著）+常盘勇者',
    description: '2030年，世界末日来临，无数人神秘死亡，剩下的…',
    src:
      'https://tn1-f2.kkmh.com/image/200405/RVYeKpepr.webp-t.w180.webp.h',
  },
  {
    id: 7,
    top: 'TOP.7',
    rank: '新晋黑马',
    bookName: 'MONSTER沉默野兽的温度',
    author: '六柴',
    description: '被黑蝴蝶诅咒的少女，从小就遭遇各种危险事故，…',
    src:
      'https://tn1-f2.kkmh.com/image/200618/hdHAKBvev.webp-t.w180.webp.h',
  },
  {
    id: 8,
    top: 'TOP.8',
    rank: '新晋黑马',
    bookName: '魔女的逆袭',
    author: 'MinJakk',
    description: '斯佩拉多家族的次女莱斯莉，她的人生完全是为了…',
    src:
      'https://tn1-f2.kkmh.com/image/200709/rAvHoSLMa.webp-t.w180.webp.h',
  },
  {
    id: 9,
    top: 'TOP.9',
    rank: '下降1名',
    bookName: '星辰于我',
    author: '犬一',
    description: '沐子星五岁时，一个好看的男孩子.司南，如春天…',
    src:
      'https://tn1-f2.kkmh.com/image/200716/vdTwyZvcw.webp-t.w180.webp.h',
  },
]
//漫改图片
let  cartoonChangeImgsList= [
  {
    id: 1,
    bookName: '斗罗大陆外传唐门英雄传',
    description:
      '被封印的神界，只有唐三的神力可以直接与外面联系。要战败的时候，从遥远…',
    src:
      'https://tn1-f2.kkmh.com/image/190115/6uDRSET7T.webp-t.w320.webp.h',
  },
  {
    id: 2,
    bookName: '被遗忘的7月',
    description:
      '【热播剧《偶然发现的一天》原著漫画】记忆断片的女主俞璐丹以为自己患…',
    src:
      'https://tn1-f2.kkmh.com/image/190703/4l7VcZNZN.webp-t.w320.webp.h',
  },
  {
    id: 3,
    bookName: '哑舍',
    description:
      '哑舍里的古物，每一件都有着自己的故事，承载了许多年，无人倾听，默然等…',
    src:
      'https://tn1-f2.kkmh.com/image/170809/olw79erkq.webp-t.w320.webp.h',
  },
  {
    id: 4,
    bookName: '八十一道超纲题',
    description:
      '2030年，世界末日来临，无数人神秘死亡，剩下的幸存者被一款叫做“八十一…',
    src:
      'https://tn1-f2.kkmh.com/image/200405/RVYeKpepr.webp-t.w320.webp.h',
  },
]
//上头图片
let toHeadImgsList= [
  {
    id: 1,
    src:
      'https://tn1-f2.kkmh.com/image/200814/QNRIXWFQq.webp-t.w180.webp.h',
    bookName: '步天歌',
    ToheadAuthor: '夏达',
  },
  {
    id: 2,
    src:
      'https://tn1-f2.kkmh.com/image/191025/HbtCpvYqz.webp-t.w180.webp.h',
    bookName: '桃与末世之书',
    ToheadAuthor: '晨曦',
  },
  {
    id: 3,
    src:
      'https://tn1-f2.kkmh.com/image/200303/hWCVwjEfc.webp-t.w180.webp.h',
    bookName: '刀鞘的孩子',
    ToheadAuthor: ' Kyungil Yang（主笔）',
  },
  {
    id: 4,
    src:
      'https://tn1-f2.kkmh.com/image/200727/edEjPcrEp.webp-t.w180.webp.h',
    bookName: '我独自升级',
    ToheadAuthor: 'DUBU(主笔)',
  },
  {
    id: 5,
    src:
      'https://tn1-f2.kkmh.com/image/200714/juxCCvnxK.webp-t.w180.webp.h',
    bookName: '谷围南亭',
    ToheadAuthor: '墨飞',
  },
  {
    id: 6,
    src:
      'https://tn1-f2.kkmh.com/image/181025/4diVYyMUJ.webp-t.w180.webp.h',
    bookName: '蝉女',
    ToheadAuthor: '宫缘乾 ',
  },
  {
    id: 7,
    src:
      'https://tn1-f2.kkmh.com/image/200109/RZbXGSASA.webp-t.w180.webp.h',
    bookName: '第N次恋爱',
    ToheadAuthor: ' 栗路 ',
  },
  {
    id: 8,
    src:
      'https://tn1-f2.kkmh.com/image/200202/thKbsYdzJ.webp-t.w180.webp.h',
    bookName: '万能恋爱杂货店',
    ToheadAuthor: ' 鲤鱼丸一 ',
  },
  {
    id: 9,
    src:
      'https://tn1-f2.kkmh.com/image/191011/bAcCyBfCx.webp-t.w180.webp.h',
    bookName: '欺星客栈',
    ToheadAuthor: '抽纸小jin ',
  },
  {
    id: 10,
    src:
      'https://tn1-f2.kkmh.com/image/171201/wd4irlrb9.webp-t.w180.webp.h',
    bookName: '魔道祖师',
    ToheadAuthor: '墨香铜臭（原著）',
  },
]
//上头排行榜
let ToheadpopularityLists= [
  {
    id: 2,
    title: '爱情的样子：心之所向',
    dated: '第18话  心动不自知',
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
//获取主页面的接口
const allImg=Mock.mock('/all/getAll','get',(options)=>{
   return{
     msg:'获取成功',
     status:200,
     LBimgList:LBimgList,
     originalImgList:originalImgList,
     suspenseImgsList:suspenseImgsList,
     newWorkImgsList:newWorkImgsList,
     riseWorkImgsList:riseWorkImgsList,
     cartoonChangeImgsList:cartoonChangeImgsList,
     toHeadImgsList:toHeadImgsList,
     ToheadpopularityLists:ToheadpopularityLists
   }
})

       /* 登录页面的数据和接口 */
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
  },
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
          status: 200,
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

       /* 世界评论页面的数据和接口 */
// 数据
let commentsList = [
  {
    url:
      'https://tncache1-f1.v3mh.com/734ecd72bd8e5ca7214201a38beb94b0_1607221734636',
    userName: '小飞侠',
    word: '小飞侠太喜欢看漫画了',
    time: '2020-12-08  14:40',
  },
  {
    url: 'https://tncache1-f1.v3mh.com/social/9b83b34e44278fa9fadc479dda340c86',
    userName: '小杨同学',
    word: '小杨喜欢吃饭，看漫画，打豆豆',
    time: '2020-11-11  11:11',
  },
  {
    url: 'https://tncache1-f1.v3mh.com/social/acba1fe653605b0fe00f4e1753c7c3be',
    userName: '豆豆',
    word: '豆豆这么可爱，为什么要打他',
    time: '2020-10-10  09:45',
  },
  {
    url:
      'https://tncache1-f1.v3mh.com/social/008b1d8a3be6c7db5c64479566188961-cover-faces',
    userName: '喵喵拳',
    word: '喵喵拳看了漫画之后，握紧了他的拳头',
    time: '2020-10-02  07:09',
  },
  {
    url:
      'https://tncache1-f1.v3mh.com/social/6d6a498e5aa9184441d05d10ae6a9ebf-crop10-2-cover',
    userName: '喔喔糖',
    word: '边吃喔喔糖边看漫画更有感觉哟',
    time: '2020-09-19  7:00',
  },
]
// 获取已存在评论内容接口
const existComment = Mock.mock('/world/getComment', 'get', (options) => {
  return {
    status: 200,
    msg: '获取成功',
    list: commentsList,
  }
})



// 发表评论接口
const publishComment = Mock.mock('/world/publish', 'post', (options) => {
  const { inputComments, date } = JSON.parse(options.body)
  let addContent = {
    url:
      'https://tncache1-f1.v3mh.com/social/9aa6e4a060ddad59aac4e2926f9738e8-cover-faces',
    userName:userList[userList.length-1].name,
    word:inputComments,
    time:date
  }
  commentsList.unshift(addContent)
  return {
    status: 200,
    msg: '评论成功',
  }
})
// 删除评论接口
const deleteComment = Mock.mock(/\/world\/delete/, 'get', (options) => {
  const id = getQuery(options.url, 'delIndex')
  console.log(id)
  commentsList.splice(id, 1)
  return {
    status: 200,
    msg: '删除成功',
   /*  backContent: addContent, */
  }
})

           /* 分类图片数据与接口*/
//分类数据
let sortImgsList = [
  {
    id: 1,
    bookName: '再度与你',
    author: '晗旭L-Mo',
    url: 'https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 2,
    bookName: '他那么撩',
    author: '曲小蛐（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200925/nLtcHbBAW.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 3,
    bookName: '星辰于我',
    author: '犬一',
    url: 'https://tn1-f2.kkmh.com/image/200716/vdTwyZvcw.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 4,
    bookName: '未曾知晓的那一日',
    author: '胡桃',
    url: 'https://tn1-f2.kkmh.com/image/200109/bnvAWgbBb.webp-t.w207.webp.h',
    distinguish: true,
    type: '玄幻',
  },
  {
    id: 5,
    bookName: '花开未满',
    author: '莉莉君',
    url: 'https://tn1-f2.kkmh.com/image/190702/ll1t9SFXQ.webp-t.w207.webp.h',
    distinguish: true,
    type: '古风',
  },
  {
    id: 6,
    bookName: '今天的她也是如此可爱',
    author: '郭斯特',
    url: 'https://tn1-f2.kkmh.com/image/190905/YbVcMODaa.webp-t.w207.webp.h',
    distinguish: true,
    type: '古风',
  },
  {
    id: 7,
    bookName: '韩琰（编剧）+西瓜（主笔）',
    author: '晗旭L-Mo',
    url: 'https://tn1-f2.kkmh.com/image/191217/ewuopQRcs.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 8,
    bookName: '逆光之绊',
    author: 'bless',
    url: 'https://tn1-f2.kkmh.com/image/200122/NdxSWJHYR.webp-t.w207.webp.h',
    distinguish: true,
    type: '唯美',
  },
  {
    id: 9,
    bookName: '白日梦图鉴',
    author: '帅天森',
    url: 'https://tn1-f2.kkmh.com/image/190703/HztHOHhJU.webp-t.w207.webp.h',
    distinguish: true,
    type: '校园',
  },
  {
    id: 10,
    bookName: '恋是樱草色',
    author: '漫阅优品',
    url: 'https://tn1-f2.kkmh.com/image/161220/txoq04r10.webp-t.w207.webp.h',
    distinguish: true,
    type: '校园',
  },
  {
    id: 11,
    bookName: '拯救我的高一八班',
    author: '葱渣渣',
    url: 'https://tn1-f2.kkmh.com/image/181116/hilFVHrEB.webp-t.w207.webp.h',
    distinguish: true,
    type: '校园',
  },
  {
    id: 12,
    bookName: '朝花惜时',
    author: '壳小杀／夏天岛+左小翎／夏天岛',
    url: 'https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w207.webp.h',
    distinguish: true,
    type: '奇幻',
  },
  {
    id: 13,
    bookName: '成也萧河',
    author: '壳小杀',
    url: 'https://tn1-f2.kkmh.com/image/200703/KYnRXhLuQ.webp-t.w207.webp.h',
    distinguish: true,
    type: '校园',
  },
  {
    id: 14,
    bookName: '被遗忘的7月',
    author: 'muryu',
    url: 'https://tn1-f2.kkmh.com/image/190703/4l7VcZNZN.webp-t.w207.webp.h',
    distinguish: true,
    type: '韩漫',
  },
  {
    id: 15,
    bookName: '我想吃掉你的胰脏',
    author: '住野夜（原作）+桐原泉（作画）',
    url: 'https://tn1-f2.kkmh.com/image/180827/BcP9SZM9B.webp-t.w207.webp.h',
    distinguish: true,
    type: '日漫',
  },
  {
    id: 16,
    bookName: '爱你有些小偏执',
    author: '灿灿/夏天岛',
    url: 'https://tn1-f2.kkmh.com/image/190703/oMEEpgwyl.webp-t.w207.webp.h',
    distinguish: true,
    type: '日漫',
  },
  {
    id: 17,
    bookName: '当校霸爱上学霸',
    author: '灿灿/夏天岛',
    url: 'https://tn1-f2.kkmh.com/image/180705/KD7348uAV.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 18,
    bookName: '晨星未落时',
    author: '葵子',
    url: 'https://tn1-f2.kkmh.com/image/170630/hiwvsfn1p.webp-t.w207.webp.h',
    distinguish: true,
    type: '日漫',
  },
  {
    id: 19,
    bookName: '女王的短裤',
    author: 'Jagyum+saedle',
    url: 'https://tn1-f2.kkmh.com/image/200923/NHCkmCbWm.webp-t.w207.webp.h',
    distinguish: true,
    type: '完结',
  },
  {
    id: 20,
    bookName: '缄默法则',
    author: '好了神文化',
    url: 'https://tn1-f2.kkmh.com/image/201113/oQaocBcCT.webp-t.w207.webp.h',
    distinguish: true,
    type: '完结',
  },
  {
    id: 21,
    bookName: '唯有套路得帝心',
    author: 'jinyagi+Team Neok-bu-rang',
    url: 'https://tn1-f2.kkmh.com/image/200923/DNddytSTG.webp-t.w207.webp.h',
    distinguish: true,
    type: '穿越',
  },
  {
    id: 22,
    bookName: '泽皇录',
    author: 'Brothers without a tomorrow+U-jewel media',
    url: 'https://tn1-f2.kkmh.com/image/200925/iYQGUFVsg.webp-t.w207.webp.h',
    distinguish: true,
    type: '完结',
  },
  {
    id: 23,
    bookName: '昼夜连绵',
    author: 'Anjeo',
    url: 'https://tn1-f2.kkmh.com/image/190305/tmfbQ6DrA.webp-t.w207.webp.h',
    distinguish: true,
    type: '灵异',
  },
  {
    id: 24,
    bookName: '榻上公子',
    author: '百鬼随行',
    url: 'https://tn1-f2.kkmh.com/image/200923/TSEznEQxX.webp-t.w207.webp.h',
    distinguish: true,
    type: '完结',
  },
  {
    id: 25,
    bookName: '今日晴朗，局部掉龙！',
    author: '索索（主笔）+郭晓（编剧）',
    url: 'https://tn1-f2.kkmh.com/image/200923/LUJqMVckn.webp-t.w207.webp.h',
    distinguish: true,
    type: '完结',
  },
  {
    id: 26,
    bookName: '追逐游戏',
    author: '索索（主笔）+郭晓（编剧）',
    url: 'https://tn1-f2.kkmh.com/image/200926/gbTUzFFCl.webp-t.w207.webp.h',
    distinguish: true,
    type: '灵异',
  },
  {
    id: 27,
    bookName: '爱情的样子：心之所向',
    author: '路边张三',
    url: 'https://tn1-f2.kkmh.com/image/200706/MpvYndrLa.webp-t.w207.webp.h',
    distinguish: true,
    type: '灵异',
  },
  {
    id: 28,
    bookName: '重生成恋人的死对头怎么办',
    author: '米花·糖',
    url: 'https://tn1-f2.kkmh.com/image/200928/VlXzkeYPL.webp-t.w207.webp.h',
    distinguish: true,
    type: '灵异',
  },
  {
    id: 29,
    bookName: '谎言先生',
    author: '电鳗漫画工作室',
    url: 'https://tn1-f2.kkmh.com/image/200713/fedBYwzDU.webp-t.w207.webp.h',
    distinguish: true,
    type: '灵异',
  },
  {
    id: 30,
    bookName: '刻在眉眼间',
    author: '梁阿渣',
    url: 'https://tn1-f2.kkmh.com/image/200828/OFrPFVhYR.webp-t.w207.webp.h',
    distinguish: true,
  },
  {
    id: 31,
    bookName: '粉黛',
    author: '七英俊（原著）+博易漫画+Maslow',
    url: 'https://tn1-f2.kkmh.com/image/200713/NcnGRKcOV.webp-t.w207.webp.h',
    distinguish: true,
    type: '灵异',
  },
  {
    id: 32,
    bookName: '那个男人让我无法拒绝',
    author: '鸡精君+守',
    url: 'https://tn1-f2.kkmh.com/image/200108/OgNfzbAsE.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 33,
    bookName: '不如在今天恋爱',
    author: 'Woo Ji Hye + Dur',
    url: 'https://tn1-f2.kkmh.com/image/200911/QwsprxNoK.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 34,
    bookName: '忘忧旅店',
    author: '小白南',
    url: 'https://tn1-f2.kkmh.com/image/200723/Q0HZx0y89.webp-t.w207.webp.h',
    distinguish: true,
    type: '奇幻',
  },
  {
    id: 35,
    bookName: '双杀',
    author: '娜可露露（原著）+欧啦漫画',
    url: 'https://tn1-f2.kkmh.com/image/200706/pvUkRerQd.webp-t.w207.webp.h',
    distinguish: true,
    type: '都市',
  },
  {
    id: 36,
    bookName: '渐近的心跳',
    author: '橘枳',
    url: 'https://tn1-f2.kkmh.com/image/190331/JhZIY8PGd.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 37,
    bookName: '一代灵后',
    author: 'TUTU(主笔）',
    url: 'https://tn1-f2.kkmh.com/image/190103/LyS9fzBt6.webp-t.w207.webp.h',
    distinguish: true,
    type: '古风',
  },
  {
    id: 38,
    bookName: '救赎',
    author: 'MINA + ZIHO',
    url: 'https://tn1-f2.kkmh.com/image/200622/pZiAvkSdc.webp-t.w207.webp.h',
    distinguish: true,
    type: '大女王',
  },
  {
    id: 39,
    bookName: '宇宙琴未响',
    author: '丁冰',
    url: 'https://tn1-f2.kkmh.com/image/190725/zO75c1vV7.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 40,
    bookName: '鬼灭之刃',
    author: '吾峠呼世晴',
    url: 'https://tn1-f2.kkmh.com/image/200109/diEQHgAWn.webp-t.w207.webp.h',
    distinguish: true,
    type: '玄幻',
  },
  {
    id: 41,
    bookName: '佔有姜西',
    author: '鱼不语（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200814/ucPnxkKJD.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 42,
    bookName: '小心哥哥们',
    author: 'Min Iyeong+Plutus+CARROTOON',
    url: 'https://tn1-f2.kkmh.com/image/200706/hybBWBZNd.webp-t.w207.webp.h',
    distinguish: true,
    type: '萌系',
  },
  {
    id: 43,
    bookName: '时光沙漏·逆转命运的少女',
    author: 'antstudio',
    url: 'https://tn1-f2.kkmh.com/image/200702/rYSZESQTA.webp-t.w207.webp.h',
    distinguish: true,
    type: '大女主',
  },
  {
    id: 44,
    bookName: '魔女的逆袭',
    author: 'MinJakk',
    url: 'https://tn1-f2.kkmh.com/image/200709/rAvHoSLMa.webp-t.w207.webp.h',
    distinguish: true,
    type: '穿越',
  },
  {
    id: 45,
    bookName: 'MONSTER沉默野兽的温度',
    author: '六柴',
    url: 'https://tn1-f2.kkmh.com/image/200618/hdHAKBvev.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 46,
    bookName: '逃婚郡主和她的影卫们',
    author: ' Jung hoon+Su Gook',
    url: 'https://tn1-f2.kkmh.com/image/200713/QlyNcTFis.webp-t.w207.webp.h',
    distinguish: true,
    type: '穿越',
  },
  {
    id: 47,
    bookName: '颤抖吧！原著女主',
    author: 'Bae Heejin+Yusoo+Lemi',
    url: 'https://tn1-f2.kkmh.com/image/200713/QPtzOSqhy.webp-t.w207.webp.h',
    distinguish: true,
    type: '大女主',
  },
  {
    id: 48,
    bookName: '本王不要公主抱',
    author: '南岐（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200814/sSFUQwmQF.webp-t.w207.webp.h',
    distinguish: true,
    type: '投搞',
  },
  {
    id: 49,
    bookName: '荒岛蜜月-这个婚约我拒绝！',
    author: 'ByulSatangYang+SaRyong',
    url: 'https://tn1-f2.kkmh.com/image/200713/CGbJlRvQM.webp-t.w207.webp.h',
    distinguish: true,
    type: '搞笑',
  },
  {
    id: 50,
    bookName: '叫我设计师',
    author: '潇湘碧影（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200714/uWfohXxek.webp-t.w207.webp.h',
    distinguish: true,
    type: '投搞',
  },
  {
    id: 51,
    bookName: '明日高校',
    author: '子雾啊',
    url: 'https://tn1-f2.kkmh.com/image/200709/MaJWXHsNB.webp-t.w207.webp.h',
    distinguish: true,
    type: '校园',
  },
  {
    id: 52,
    bookName: '硬核一中',
    author: 'BunnyJobs（主笔）',
    url: 'https://tn1-f2.kkmh.com/image/200707/JSwlpSFPl.webp-t.w207.webp.h',
    distinguish: true,
    type: '校园',
  },
  {
    id: 53,
    bookName: '恋爱铃',
    author: '千桂永',
    url: 'https://tn1-f2.kkmh.com/image/170821/tkjglgra1.webp-t.w207.webp.h',
    distinguish: true,
    type: '恋爱',
  },
  {
    id: 54,
    bookName: '骸骨王座',
    author: 'Cartoon Life+CARROTOON',
    url: 'https://tn1-f2.kkmh.com/image/200714/tPZbayXUS.webp-t.w207.webp.h',
    distinguish: true,
    type: '搞笑',
  },
  {
    id: 55,
    bookName: '养敌为患',
    author: '风与自然（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200714/YYtOoOGdy.webp-t.w207.webp.h',
    distinguish: true,
    type: '正能量',
  },
  {
    id: 56,
    bookName: '拔剑九亿次',
    author: 'YKB+ SOON-Q+ STUDIO KHIT',
    url: 'https://tn1-f2.kkmh.com/image/200611/ZxqCJEgwj.webp-t.w207.webp.h',
    distinguish: true,
    type: '投稿',
  },
  {
    id: 57,
    bookName: '宇宙的星星',
    author: 'KR',
    url: 'https://tn1-f2.kkmh.com/image/200417/OUBnVMBMj.webp-t.w207.webp.h',
    distinguish: true,
    type: '投搞',
  },
  {
    id: 58,
    bookName: '高等灵魂',
    author: '千亮',
    url: 'https://tn1-f2.kkmh.com/image/181113/stfsPy78q.webp-t.w207.webp.h',
    distinguish: true,
    type: '都市',
  },
  {
    id: 59,
    bookName: '反转现实',
    author: '天极焉加',
    url: 'https://tn1-f2.kkmh.com/image/170123/33h3huvuw.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },

  {
    id: 60,
    bookName: '第二模式',
    author: '千幽·灵',
    url: 'https://tn1-f2.kkmh.com/image/170922/43h4885wg.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 61,
    bookName: '甄嬛传·叙花列',
    author: '魏莹/夏天岛',
    url: 'https://tn1-f2.kkmh.com/image/161220/40kx8hu00.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 62,
    bookName: '被自己束缚的金丝雀',
    author: '鱼二（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200923/lLUIYkzhe.webp-t.w207.webp.h',
    distinguish: true,
    type: '唯美',
  },
  {
    id: 63,
    bookName: '不可爱的TA',
    author: 'zero',
    url: 'https://tn1-f2.kkmh.com/image/190103/nJzja4cVQ.webp-t.w207.webp.h',
    distinguish: true,
    type: '唯美',
  },
  {
    id: 64,
    bookName: '伪装小丑的王子',
    author: '月色樱草',
    url: 'https://tn1-f2.kkmh.com/image/190328/8EfY99P3k.webp-t.w207.webp.h',
    distinguish: true,
    type: '唯美',
  },
  {
    id: 65,
    bookName: '最终魂意',
    author: 'MOKF',
    url: 'https://tn1-f2.kkmh.com/image/200424/gKGIggfpl.webp-t.w207.webp.h',
    distinguish: true,
    type: '热血',
  },
  {
    id: 66,
    bookName: '全职高手',
    author: '阅文漫画',
    url: 'https://tn1-f2.kkmh.com/image/201017/kATF6FZEk.webp-t.w207.webp.h',
    distinguish: true,
    type: '热血',
  },
  {
    id: 67,
    bookName: '月光雕刻师',
    author: 'PARK JUNG YEOL',
    url: 'https://tn1-f2.kkmh.com/image/200610/ZunryLzNj.webp-t.w207.webp.h',
    distinguish: true,
    type: '热血',
  },
  {
    id: 68,
    bookName: '我和总裁相了个亲',
    author: 'Yeondam',
    url: 'https://tn1-f2.kkmh.com/image/191107/hYVReVGxF.webp-t.w207.webp.h',
    distinguish: true,
    type: '总裁',
  },
  {
    id: 69,
    bookName: '霸道总裁轻点爱',
    author: '热萌文化',
    url: 'https://tn1-f2.kkmh.com/image/200110/qiiEcSTR6.webp-t.w207.webp.h',
    distinguish: true,
    type: '总裁',
  },
  {
    id: 70,
    bookName: '纯情陆少',
    author: '博易创为动漫',
    url: 'https://tn1-f2.kkmh.com/image/201010/iMd8ZFpcv.webp-t.w207.webp.h',
    distinguish: true,
    type: '总裁',
  },
  {
    id: 71,
    bookName: '整容游戏',
    author: '金丘',
    url: 'https://tn1-f2.kkmh.com/image/171213/rt79rf2bj.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 72,
    bookName: '前任战争',
    author: 'SASA夏蒂（主笔）',
    url: 'https://tn1-f2.kkmh.com/image/180831/l2WcBVX3F.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 73,
    bookName: '哑舅',
    author: '紫陌堂',
    url: 'https://tn1-f2.kkmh.com/image/180119/f7ee10leh.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 74,
    bookName: '万能恋爱杂货店',
    author: '鲤鱼丸一',
    url: 'https://tn1-f2.kkmh.com/image/200202/thKbsYdzJ.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 75,
    bookName: '明日星程',
    author: '金刚圈（原著）',
    url: 'https://tn1-f2.kkmh.com/image/200109/arFWfhJLK.webp-t.w207.webp.h',
    distinguish: true,
    type: '剧情',
  },
  {
    id: 76,
    bookName: '教主，注意名声！',
    author: '鲸鱼合合',
    url: 'https://tn1-f2.kkmh.com/image/170331/ob28qu3re.webp-t.w207.webp.h',
    distinguish: true,
    type: '古风',
  },
  {
    id: 77,
    bookName: '吾凰在上',
    author: '嗷小泽',
    url: 'https://tn1-f2.kkmh.com/image/200528/foq9muA1L.webp-t.w207.webp.h',
    distinguish: true,
    type: '古风',
  },
  {
    id: 78,
    bookName: '月沉吟',
    author: '卿妃（原著）',
    url: 'https://tn1-f2.kkmh.com/image/170718/mscmnmoh3.webp-t.w207.webp.h',
    distinguish: true,
    type: '古风',
  },
  {
    id: 79,
    bookName: '年年有鱼了！',
    author: '汤十碗',
    url: 'https://tn1-f2.kkmh.com/image/200430/kbIRMQdvG.webp-t.w207.webp.h',
    distinguish: true,
    type: '奇幻',
  },
  {
    id: 80,
    bookName: '月沉吟',
    author: '卿妃（原著）',
    url: 'https://tn1-f2.kkmh.com/image/170718/mscmnmoh3.webp-t.w207.webp.h',
    distinguish: true,
    type: '奇幻',
  },
]
//分页功能
const paging = Mock.mock(/\/paging\/img/, 'get', (options) => {
  const pagesize = getQuery(options.url, 'pagesize')
  const pageNum = getQuery(options.url, 'pagenum')
  //总数
  const total = sortImgsList.length
  //截取数据开始位置
  const start = (pageNum - 1) * pagesize
  //截取数据结束位置
  const end = pageNum * pagesize
  //计算总页数
  const totalPage = Math.ceil(total / pagesize)
  //判断当前页数是否大于总页数
  const list = pageNum > totalPage ? [] : sortImgsList.slice(start, end)
  return {
    status: 200,
    msg: '获取数据成功',
    pag: list,
    total: total,
  }
})

//收藏漫画的数据
let collectionList = []
//增加收藏功能
const Collection = Mock.mock('/paging/collection', 'post', (options) => {
  const collections = JSON.parse(options.body)
  collectionList.push(collections)
  console.log(collectionList)
  const id = collections.id
  for (let i = 0; i < sortImgsList.length - 1; i++) {
    if (id === sortImgsList[i].id) {
      sortImgsList[i].distinguish = false
    }
  }
  return {
    msg: '收藏成功',
    status: 200,
  }
})

//取消收藏功能
const CollectionDel = Mock.mock('/paging/collectionDec', 'post', (options) => {
  const collections = JSON.parse(options.body)
  const id = collections.id
  for (let i = 0; i < collectionList.length; i++) {
    if (id === collectionList[i].id) {
      collectionList.splice(i, 1)
      for (let j = 0; j < sortImgsList.length - 1; j++) {
        if (id === sortImgsList[j].id) {
          sortImgsList[j].distinguish = true
        }
      }
    }
  }
  console.log(collectionList)
  return {
    msg: '取消收藏成功',
    status: 200,
  }
})

//查找分类功能
const searchSort = Mock.mock(/\/paging\/sort/, 'post', (options) => {
  const name = JSON.parse(options.body).name
  console.log(name)

  if (name === '恋爱') {
    const love = []
    const total = love.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '恋爱') {
        love.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: love,
      total: total,
    }
  } else if (name === '剧情') {
    const plot = []
    const total = plot.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '剧情') {
        plot.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: plot,
      total: total,
    }
  } else if (name === '古风') {
    const Ancient = []
    const total = Ancient.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '古风') {
        Ancient.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Ancient,
      total: total,
    }
  } else if (name === '校园') {
    const school = []
    const total = school.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '校园') {
        school.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: school,
      total: total,
    }
  } else if (name === '奇幻') {
    const Fantasy = []
    const total = Fantasy.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '奇幻') {
        Fantasy.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Fantasy,
      total: total,
    }
  } else if (name === '唯美') {
    const Aestheticism = []
    const total = Aestheticism.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '唯美') {
        Aestheticism.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Aestheticism,
      total: total,
    }
  } else if (name === '热血') {
    const warm = []
    const total = warm.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '热血') {
        warm.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: warm,
      total: total,
    }
  } else if (name === '日漫') {
    const jan = []
    const total = jan.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '日漫') {
        jan.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: jan,
      total: total,
    }
  } else if (name === '韩漫') {
    const Han = []
    const total = Han.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '韩漫') {
        Han.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Han,
      total: total,
    }
  } else if (name === '大女主') {
    const empress = []
    const total = empress.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '大女主') {
        empress.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: empress,
      total: total,
    }
  } else if (name === '完结') {
    const end = []
    const total = end.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '完结') {
        end.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: end,
      total: total,
    }
  } else if (name === '穿越') {
    const pass = []
    const total = pass.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '穿越') {
        pass.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: pass,
      total: total,
    }
  } else if (name === '萌系') {
    const Adorable = []
    const total = Adorable.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '萌系') {
        Adorable.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Adorable,
      total: total,
    }
  } else if (name === '灵异') {
    const Supernatural = []
    const total = Supernatural.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '灵异') {
        Supernatural.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Supernatural,
      total: total,
    }
  } else if (name === '玄幻') {
    const Fantasy = []
    const total = Fantasy.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '奇幻') {
        Fantasy.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Fantasy,
      total: total,
    }
  } else if (name === '搞笑') {
    const Funny = []
    const total = Funny.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '搞笑') {
        Funny.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: Funny,
      total: total,
    }
  } else if (name === '都市') {
    const urban = []
    const total = urban.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '都市') {
        urban.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: urban,
      total: total,
    }
  } else if (name === '投稿') {
    const touGao = []
    const total = touGao.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '投搞') {
        touGao.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: touGao,
      total: total,
    }
  } else if (name === '总裁') {
    const CEO = []
    const total = CEO.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '总裁') {
        CEO.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: CEO,
      total: total,
    }
  } else if (name === '正能量') {
    const positive = []
    const total = positive.length
    for (let i = 0; i < sortImgsList.length; i++) {
      if (sortImgsList[i].type === '正能量') {
        positive.push(sortImgsList[i])
      }
    }
    return {
      msg: '获取分类成功',
      status: 200,
      list: positive,
      total: total,
    }
  } else {
    return {
      msg: 'ok',
    }
  }
})
/* 作品组件(works)获取作品简介 */
// 数据
let BackArtData = {
  name: '狄奥多之歌',
  autor: '乱步羊羊羊（主笔）+角年千兆（编剧）',
  introduction:
    '活泼好动的西帝国公主希尔娜在年幼时邂逅了来自北方王国的质子拉提奥，两人的心逐渐靠近，而东帝国的少年国王尼亚也在暗中窥视...可惜三国之间只是表面和平，战争一触即发，昔日的青梅竹马也终将面临爱情、责任间的抉择：剑与血，硝烟与眼泪，真心与背叛，共同交织谱写一曲少年少女的“狄奥多之歌”.每周二更新...',
}
/* 作品组件(works)获取漫画章节 */
let backSItemData = [
  {
    id: 0,
    url: 'https://f2.kkmh.com/image/200103/klF8eNuNi.webp-t.w207.webp.h',
    chapter: '序章  硝烟域泪',
    num: '69486',
    time: '01-03',
    likeIf: false,
  },
  {
    id: 1,
    url: 'https://f2.kkmh.com/image/200104/KXXNqCAXU.webp-t.w207.webp.h',
    chapter: ' 第1话  我要你做我仆人！',
    num: '120024',
    time: '01-04',
    likeIf: false,
  },
  {
    id: 2,
    url: 'https://f2.kkmh.com/image/200106/P3VV5iFbK.webp-t.w207.webp.h',
    chapter: '第2话  作为仆人的“惩罚',
    num: '82362',
    time: '01-07',
    likeIf: false,
  },
  {
    id: 3,
    url: 'https://f2.kkmh.com/image/200113/bmowYN7al.webp-t.w207.webp.h',
    chapter: '第3话  骑马教学这么甜？！',
    num: '78106',
    time: '01-14',
    likeIf: false,
  },
  {
    id: 4,
    url: 'https://f2.kkmh.com/image/200203/OnfHiC4Dy.webp-t.w207.webp.h',
    chapter: '第4话  公主的价值',
    num: '571440',
    time: '01-21',
    likeIf: false,
  },
  {
    id: 5,
    url: 'https://f2.kkmh.com/image/200120/BBY4tBVir.webp-t.w207.webp.h',
    chapter: '第5话  鼓励',
    num: '69367',
    time: '01-28',
    likeIf: false,
  },
]
// 接口
const getArtData = Mock.mock('/works/artData', 'get', (options) => {
  return {
    status: 200,
    msg: '获取成功',
    BackArtData,
    backSItemData,
  }
})
// followWorks是关注作品的对象 里面有作品名和作者名
// 关注
let followWorks = {}
const followed = Mock.mock('/works/followed', 'post', (options) => {
  const { id: id } = JSON.parse(options.body)
  if (id == 1) {
    const { name, author } = JSON.parse(options.body)
    followWorks.worksName = name
    followWorks.worksAuthor = author
    console.log(followWorks)
    return {
      status: 200,
      msg: '关注成功咯!!!',
    }
  } else {
    followWorks = {}
    console.log(followWorks)
    return {
      status: 200,
      msg: '已取消关注，记得回来哟!!!',
    }
  }
})


         /* 个人中心接口 */

//获取用户姓名
 
const userOwner =Mock.mock('/userOwner/name','get',(options)=>{
    return{
      msg:'获取成功',
      status:200,
      name:userList[userList.length-1].name,
      userCollection:collectionList
    }
})


/* 搜索功能接口*/

const searchCartoon=Mock.mock('/search/cartoon','post',(options)=>{
  if(options===''){
    return {
      msg:'搜索成功',
        status:200,
        newBookName:[]
    }
  }
  let searchBody=JSON.parse(options.body).title
  let newBook=[]
  sortImgsList.forEach(item=>{
    if(item.bookName.search(searchBody)!==-1){
        newBook.push(item.bookName)
    }
  })
      return{
        msg:'搜索成功',
        status:200,
        newBookName:newBook
      }
})