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

// 
var vm3 = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
});

var vm4 = new Vue({
    el: '#demo2',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    }
});

var vm5 = new Vue({
    el: '#demo3',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
        fullName: {
          // getter 関数
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
          // setter 関数
          set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        }
    }
});