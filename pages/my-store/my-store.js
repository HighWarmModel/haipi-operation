var app = getApp()
Page({
  data: {
    storeData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    lowerThreshold: '60rpx',
    types: false, // 2 3
    values: '加载更多……' // 加载中 没有更多数据了
  },
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
  // 滚动到底部触发
  handleScrollLower() {
    console.log('开始滚动')
  }
})