// 引入 api 类
import userApi from '../../http/index/user'
Page({
  /**
   * 定义基础数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    tabIndex: 0,
    tabs: ['流行', '精选', '新款']
  },
  /**
   * 监听页面得加载
   * 
   */
  // 登录
  onLoad () {
    // 获取数据
    this.getHomeData()
  },
  // 获取首页数据
  getHomeData() {
    // 获取数据
    let opt = {
      token: ''
    }
    userApi._getHomeData(opt).then((res) => {
      console.log(res)
      // 获取首页数据
      const bannerL = res.data.banner.list
      const recommendL = res.data.recommend.list

      // 保存数据
      this.setData({
        bannerList: bannerL,
        recommendList: recommendL
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  // tab 切换
  tabClick (e) {
    // 设置当前标题
    const currentIndex = e.detail.index
    this.setData({
      tabIndex: currentIndex
    })
  }
})