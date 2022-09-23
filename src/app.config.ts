export default {
  pages: [
    'pages/order/index',
    'pages/home/index',

    'pages/news/index',
    'pages/user/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subpackages: [
    {
      root: 'pagesSub/search',
      pages: ['index']
    },
    {
      root: 'pagesSub/my',
      pages: ['detail/index', 'about/index']
    },
    {
      root: 'pagesSub/book',
      pages: ['detail/index']
    }
  ],
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#d81e06',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '首页'
      },
      {
        pagePath: 'pages/order/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '定单'
      },
      {
        pagePath: 'pages/news/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '消息'
      },
      {
        pagePath: 'pages/user/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '我的'
      }
    ]
  }
}
