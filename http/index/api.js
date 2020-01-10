export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        token: options.token
      },
      success(res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}