Component({
  properties: {
    types: Boolean, // true 展示加载动画 不展示加载动画
    values: String // 加载文字
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