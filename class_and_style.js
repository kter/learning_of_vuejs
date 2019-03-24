// v-bind:class にオブジェクトを渡すことでクラスを動的に切り替えることができます
var vm = new Vue({
    el: "#hoge",
    data: {
        isActive: true,
        hasError: false
    }
});