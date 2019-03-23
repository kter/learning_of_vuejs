document.addEventListener("DOMContentLoaded", function(event) {
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
})

document.addEventListener("DOMContentLoaded", function(event) {
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
})