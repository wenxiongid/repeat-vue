import Vue from './core/instance'

let app = new Vue({
  data: {
    t1: 'text',
    t2: 'text2',
    n: 0
  },
  computed: {
    t1t2: function(){
      console.log(this.t1, this.t2)
      return `${this.t1}, ${this.t2}`
    }
  },
  render(){
    console.log('start render')
    console.log('render:', this.t1, this.t2, this.n)
    return {
      t1: this.t1,
      t2: this.t2,
      n: this.n
    }
  }
})

app.t1 = 't01'
window.app = app
// app.t1 = 't11'
// app.t2 = 't22'
// setTimeout(() => {
//   console.log('my text')
// }, 1000)
// app.n = 2