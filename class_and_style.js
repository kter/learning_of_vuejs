// v-bind:class にオブジェクトを渡すことでクラスを動的に切り替えることができます
var vm = new Vue({
    el: "#hoge",
    data: {
        isActive: true,
        hasError: false
    }
});

// 配列でクラスを渡すこともできる
var vm2 = new Vue({
    el: "#hoge2",
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
      }
});

var vm3 = new Vue({
    el: "#hoge3",
    data: {
        activeColor: 'red',
        fontSize: 30
    }
});

var vm4 = new Vue({
    el: "#hoge4",
    data: {
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
    }
});