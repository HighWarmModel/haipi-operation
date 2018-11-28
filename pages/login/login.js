var app = getApp()
Page({
  data: {
    loginData: [
      {
        phone1: '',
        psw: ''
      },
      {
        phone2: '',
        code: ''
      }
    ],
    index: 0, // 用于判断是密码还是验证码登录 默认密码登录
    active: '', // 聚焦动画
    loading: false,
    countDown: 60, // 倒计时
    sendContent: '发送验证码'
  },
  timer: null, // 计时器
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
console.log(getCurrentPages())

  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  // 改变tabs
  handleChange (e) {
    this.setData({
      index: e.detail.index
    })
  },
  // 输入框聚焦动画
  handleFocus (e) {
    this.setData({
      'active': e.target.dataset.type
    })
  },
  // 数据框离开
  handleBlur (e) {
    this.setData({
      [e.target.dataset.type]: e.detail.value,
      'active': ''
    })
  },
  // 发送验证码
  handleSend (e) {
    if (this.data.countDown === 60) {
      this.setData({
        countDown: 59,
        sendContent: `还剩59s`
      })
      this.timer = setInterval(() => {
        this.setData({
          countDown: this.data.countDown - 1
        }, () => {
          this.setData({
            sendContent: `还剩${this.data.countDown}s`
          })
          if (this.data.countDown <= 0) {
            clearInterval(this.timer)
            this.setData({
              sendContent: '发送验证码',
              countDown: 60
            })
          }
        })
      }, 1000)
    }
  },
  // 获取用户信息
  getUserInfo (e) {
    console.log(e)
  }
})