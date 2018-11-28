import Promise from '../utils/es6-promise.min.js'
import INTERFACE_ADDRESS from './interfaceAddress.js'
const contentType = ['application/x-www-form-urlencoded', 'application/json']
function postRequest (baseUrl, pathName, data, success, fail, head, type) {
  const app = getApp()
  const token = app.globalData.token
  if (!token) {
    wx.reLaunch({
      url: 'pages/login/login'
    })
    return
  }
  let url
  if (Object.prototype.toString.call(url) === '[object Object]') {
    type = head
    head = fail
    fail = success
    success = data
    data = pathName
    pathName = baseUrl
    url = INTERFACE_ADDRESS.ONLINE_NAME + pathName
  }
  type = type || 0
  const header = head ? {
    'content-type': contentType[type],
    'Accept-Language': 'charset=utf-8',
    'token': app.globalData.token,
    ...head
  } : {
    'content-type': contentType[type],
    'Accept-Language': 'charset=utf-8',
    'token': app.globalData.token,
  }
  wx.request({
    url,
    data,
    header,
    method: 'POST',
    success,
    fail
  })
}
function apiUserLogin (data) {
 return new Promise ((reslove, reject) => postRequest(INTERFACE_ADDRESS.USER_LOGIN, data, reslove, reject))
}
