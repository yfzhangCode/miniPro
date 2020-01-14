// 引入 api 类
import userApi from '../../http/index/user'
const SCROLL_TOPDIS = 1000
Page({
  /**
   * 定义基础数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    tabIndex: 0,
    tabs: ['流行', '精选', '新款'],
    goodsKey: ['sell', 'new', 'pop'],
    goodsList: {
      'sell': {page: 0, list: []},
      'new': {page: 0, list: []},
      'pop': {page: 0, list: []}
    },
    currentType: 'sell',
    showBackTop: false
  },
  /**
   * 监听页面得加载
   * 
   */
  // 登录
  onLoad () {
    // 获取数据
    this.getHomeData()
    // 获取商品数
    this.getGoodsData(this.data.currentType)
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
    // 改变type
    this.setData({
      currentType: this.data.goodsKey[currentIndex]
    })
    // 获取商品数
    this.getGoodsData(this.data.currentType)
  },
  // 获取商品数据
  getGoodsData(type) {
    // 获取数据
    const page = this.data.goodsList[type].page + 1
    let opt = {
      type: type,
      page: page
    }
    userApi._getHomeRecommendData(opt).then((res) => {
      console.log(res)
      // 获取首页数据
      const goodsLists = res.data.list
      // 保存数据
      const oldData = this.data.goodsList[type].list
      oldData.push(...goodsLists)
      // 获取key
      const key = `goodsList.${type}.list`
      const pageKey = `goodsList.${type}.page`
      // 保存数据
      this.setData({
        [key]: oldData,
        [pageKey]: page
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  // 上拉加载更多
  onReachBottom () {
    console.log('上拉加载更多')
    this.getGoodsData(this.data.currentType)
  },
  // 商品查看详情
  itemClick(e) {
    console.log(e)
    // 跳转至详情页面
    const url = `../goodsDetail/goodsDetail?iid=${e.detail.iid}`
    wx.navigateTo({ url })
  },
  // 监听页面的滚动
  onPageScroll(options) {
    const disTop = options.scrollTop
    const flag = disTop > SCROLL_TOPDIS
    if (flag !== this.data.showBackTop) {
      this.setData({
        showBackTop: flag
      })
    }
  },
  // 点击返回顶部
  bakTop() {
    console.log("回到顶部")
    wx.pageScrollTo({
      scrollTop: 0,
    })
  }
})