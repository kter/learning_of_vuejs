var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // 算出 getter 関数
      reversedMessage: function () {
        // `this` は vm インスタンスを指します
        return this.message.split('').reverse().join('')
      }
    }
});
// console.log(vm.reversedMessage) // => 'olleH'
// vm.message = 'Goodbye'
// console.log(vm.reversedMessage) // => 'eybdooG'


// 上記算出メソッドと同じ結果だが、算出メソッドは値が更新されるまで結果がキャッシュされるのに対して、下記のようなメソッドはキャッシュされず都度実行される
var vm2 = new Vue({
    el: '#example2',
    data: {
      message: 'Hello'
    },
    methods: {
        reverseMessage: function () {
          return this.message.split('').reverse().join('')
        }
}});
