var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // `methods` オブジェクトの下にメソッドを定義する
    methods: {
        greet: function (event) {
            // メソッド内の `this` は、 Vue インスタンスを参照します
            alert('Hello ' + this.name + '!')
            // `event` は、ネイティブ DOM イベントです
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
});

// JavaScript からメソッドを呼び出すこともできます
example2.greet() // => 'Hello Vue.js!'