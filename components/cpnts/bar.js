// components/cpnts/bar.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  data: {
    counter: 0
  },
  properties: {
    title: {
      type: String,
      value: '我是默认值',
      observers (newv, oldv){
        console.log(newv)
        console.log(old)
      }
    }
  },
  methods: {
    // 修改数据
    incrementCounter (num) {
      this.setData({
        counter: this.data.counter + num
      })
    },
    handlerEmit (e) {
      console.log(e)
      // 子组件传递父组件事件
      this.triggerEvent('increment', {}, {})
    }
  }
})
