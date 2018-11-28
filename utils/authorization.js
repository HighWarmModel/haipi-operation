import Promise from 'es6-promise.min.js'
export default class Authorization {
  // 获取微信code
  static getCode () {
    return new Promise((resolve, reject) => {
      wx.login({
        success: resolve,
        fail: reject
      })
    })
  }
  // 获取用户信息(不会弹出授权窗口了)
  static getUserInfo () {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success: resolve,
        fail: reject
      })
    })
  }
  /**
   * 获取用户的当前设置
   * @param {Array} typeArr 例如['scope.userInfo', 'scope.userLocation'] 具体参考微信小程序授权页： https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html
   */
  static getSetting (typeArr) {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success (res) {
          let bool = true
          let arr = []
          typeArr.forEach(v => {
            if (res.authSetting[v] === false) {
              bool = false
            } else if (res.authSetting[v] === undefined) {
              arr.push(v)
            }
          })
          return resolve(arr.length > 0 ? arr : bool)
        },
        fail: reject
      })
    })
  }
}