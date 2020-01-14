// pages/goodsDetail/goodsDetail.js
import userApi from '../../http/index/user.js'
import { GoodsStoreInfo, GoodsDetailParams } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '', // 商品id
    goodsDetailInfo: {},
    topImageList: [],
    userRateData: {},
    goodsParamData: {},
    detailRecommendData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 获取数据
    let opt = {
      iid: options.iid
    }
    this.getGoodsDetailInfo(opt)
    // 获取推荐数据
    this.getRecommendData()
  },
  // 获取商品详情数据
  getGoodsDetailInfo (opt) {
    userApi._getGoodsDetailInfo(opt).then((res) => {
      console.log(res)
      // 获取商品详情数据
      const goodsDetailInfos = new GoodsStoreInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo)
      // 获取店铺信息
      console.log(goodsDetailInfos)
      const topImages = res.result.itemInfo.topImages
      // 获取商品规格信息
      const goodsParamObj = new GoodsDetailParams(res.result.itemParams)
      this.setData({
        goodsDetailInfo: goodsDetailInfos,
        topImageList: topImages,
        userRateData: res.result.rate,
        goodsParamData: goodsParamObj
      }) 
    }).catch((err) => {
      console.log(err)
    })
  },
  // 详情推荐数据
  getRecommendData () {
    let opt = {}
    userApi._getDetailRecommend(opt).then((res) => {
      console.log(res)
      // 获取推荐数据
      const dataList = res.data.list
      console.log(dataList)
      this.setData({
        detailRecommendData: dataList
      })
    }).catch((err) => {
      console.log(err)
    })
  }
})