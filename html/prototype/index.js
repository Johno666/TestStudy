//原型链
//对象描述符--https://tsejx.github.io/javascript-guidebook/object-oriented-programming/object-understand/attributes-object#%E6%95%B0%E6%8D%AE%E5%B1%9E%E6%80%A7
var obj={};
Object.defineProperty(obj, "prop",{
  //前四项表示数据属性
  writable:true,//是否可修改
  configurable:true,//是否可被delete删除
  enumerable:true,//是否可枚举for..in..循环
  value:'123',//它的值
  // 后两项表示访问器属性
  get:function(){//当有人读取属性时调用的函数
    return obj['prop']
  },
  set:function(value){//当有人修改属性时调用的函数
    console.log('set',value)
  }
})

/**
 *  - Prototype是什么？---被称为原型或者原型对象
 * 1. prototype是【函数】的一个属性
 * 2. prototype是一个对象
 * 3. 当创建函数的时候会默认添加prototype属性
 */

/**
 * __proto__又是什么？
 * 1. __proto__是对象上的一个属性,被称为隐式原型
 * 2. 它指向构造函数的prototype---obj.__proto__ === Foo.prototype--true
 * 3. 一个函数的prototype又是一个对象--那么该对象上也有__proto__,也就是Foo.prototype.__proto__
 *       - 那么此时Foo.prototype.__proto__这个指向的是构造函数的prototype
 *                                          - 这个构造函数是Object,那么也就是Foo.prototype.__proto__ ==== Object.prototype      
 *                                                 -此时Object.prototype已经是顶层了，不在有Object.prototype.__proto__为null
 * //因此，这样追溯就形成了原型链，那么原型链的尽头其实就是null                             
 */
function Foo(name) {
    this.name = name;
}
console.dir(Foo.prototype);//Object,函数的prototype是一个对象

const obj = new Foo('张三');//new一个函数就创建这个函数的示例对象
console.log(obj.__proto__ === Foo.prototype)//创建的实例对象上的__proto__指向Foo的构造函数(也就是Foo.prototype)

const a = {}//字面量的方式创建对象
console.log(a.__proto__,Object.getPrototypeOf(a));//两种方式获取原型
//只要记住--对象的__proto__就指向它的构造函数的prototype

let b = Object.create(null);//Object.create创建的对象的__proto__为null
// console.log(b.__proto__);