// 引入配置文件
/**
 * 定义api基类
 * 
 * @export
 * @param {any} options
 * @returns
 */
export default class baseapi {
  // 自定义 request 请求
  static request (options) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: options.url,
        method: options.method || 'GET',
        data: options.data || {},
        header: {
          token: options.token
        },
        success(res) {
          resolve(res.data)
        },
        fail (err) {
          reject(err.data)
        }
      })
    })
  }
}