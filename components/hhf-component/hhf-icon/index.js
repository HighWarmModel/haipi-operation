Component({
  properties: {
    icon: String, // 字体图标名字
    info: String, // 标题名字
    color: String, // 字体颜色
    size: String, // 字体大小
    width: String // 宽度大小
  },
  methods: {
    handleTap: function handleTap(e) {
       this.$emit('click');
     }
   },
  lifetimes: {
    created () {

    },
    attached () {
      // 在组件实例进入页面节点树时执行
    },
    moved () {

    },
    ready () {

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