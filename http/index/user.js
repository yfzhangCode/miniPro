/**
 * 用户 业务 api
 * 
 */
import baseapi from './api'
import * as config from '../config'
// console.log(config)
/**
 * 定义用户api类
 *
 * @export
 * @class userApi
 */
export default class userApi extends baseapi {
  /**
  * 获取首页数据
  * @static _getHomeData
  * @param options
  * @return this.request
  *
  * @memberOf userApi
  */
  static _getHomeData(options) {
    let opt = {
      url: config.hostUrl + 'home/multidata',
      method: 'GET',
      token: options.token
    }
    return this.request(opt)
  }

  /**
   * @static _getHomeRecommendData
   * @returns this.request
   * @param options
   * 
   * @memberOf userApi
   */
  static _getHomeRecommendData(options) {
    let opt = {
      url: config.hostUrl + 'home/data',
      method: 'GET',
      data: {
        type: options.type,
        page: options.page
      },
      token: options.token
    }
    return this.request(opt)
  }
}