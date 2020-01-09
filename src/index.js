import Vue from './vue'

let app = new Vue({
  data: {
    t1: 'text',
    t2: 'text2',
    n: 0
  },
  render(){
    console.log(app._data.t1, app._data.t2, app._data.n)
  }
})

app._data.t1 = 't1'
setTimeout(() => {
  app._data.t2 = 'my text'
}, 1000)