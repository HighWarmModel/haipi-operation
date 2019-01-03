Component({
  properties: {
    type: Number, // 类型 用来区分展示列表哪一块 1门店 2工单
    listData: Array, // 列表数据
    classes: String, // 类
    styles: String // 样式
  },
  methods: {
    handleTapCall (e) {
      const phoneNumber = e.currentTarget.dataset.phone
      wx.makePhoneCall({
        phoneNumber
      })
     }
   },
  lifetimes: {
    created () {
    },
    attached () {
      // 在组件实例进入页面节点树时执行
      console.log(this.properties.type === 1, 'attached')
    },
    moved () {
      console.log(this.properties.type === 1, 'moved')
    },
    ready () {
      console.log(this.properties.type === 1, 'ready')
    },
    detached () {
      // 在组件实例被从页面节点树移除时执行
    },
    error () {

    },
    pageLifetimes: {
      show () {},
      hide () {},
      resize () {}
    }
  }
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  // attached: function() {
  //   // 在组件实例进入页面节点树时执行
  // },
  // detached: function() {
  //   // 在组件实例被从页面节点树移除时执行
  // },
  // // ...
})