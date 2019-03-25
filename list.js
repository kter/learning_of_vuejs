var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var example3 = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

var example4 = new Vue({
    el: '#v-for-key',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

var example5 = new Vue({
    el: '#v-for-index',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

// JavaScript の制約のため、Vue はプロパティの追加や削除を検出することはできません。
var vm = new Vue({
    data: {
      a: 1
    }
  })
  // `vm.a` はリアクティブです
  
  vm.b = 2
  // `vm.b` はリアクティブではありません


var vm2 = new Vue({
    el: '#filter',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
});

var vm3 = new Vue({
    el: '#filter2',
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
      },
      methods: {
        even: function (numbers) {
          return numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
      }
});