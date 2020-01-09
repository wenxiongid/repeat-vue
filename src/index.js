import Vue from './vue'

let app = new Vue({
  data: {
    t1: 'text',
    t2: 'text2',
    n: 0
  },
  render(){
    console.log(this.t1, this.t2)
  }
})

app.t1 = 't1'
app.t2 = 'my text'
app.n = 2