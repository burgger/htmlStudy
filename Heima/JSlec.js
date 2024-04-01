//js is case sensitive
// ; is optional

// window.alert: output a message to the user
if (1 > 2) {
    alert('1 is greater than 2')
}
else {
    alert('2 is greater than 1')
}

// console.log: output a message to the console
console.log('a message to the console')

// document.write: output a message to the HTML document
document.write('a message to the HTML document')



// Variables
// var: declare a variable
var x = 10
//var can store any type of data
var y = 'hello'
//re-declared a variable
var x = 20

// let: declare a variable, cannot be re-declared, local variable
{
    let a = 11
    document.write(a, '<br>')
    //let a = 12 ->error
    
}
let a = 12
document.write(a)



// const: declare a constant, cannot be modified
const b = 10
b=11 //error in consle


// Data types
// number
var num = 10
var num = 10.5
var num = 10e3
var num = NaN
alert(typeof num)
// string
var str = 'hello'
// boolean
var bool = true
// object
var obj = {name: 'John', age: 20}
// array
var arr = [1, 2, 3]
//undefined
var und
//null : null is an object
var nul = null

// Operators
// ===: equal value and equal type 内容且类型相等
var x = 10
var y = '10'
if (x === y) {
    alert('equal')
}
else {
    alert('not equal')
}
// ==: equal value 会进行类型转换比较

// parse
var num = '10'
num = parseInt(num)
alert(typeof num) //number
var num = '10a.5'
num = parseInt(num) //10 从左到右解析，遇到非数字字符停止
var num='aa1' 
num=parseInt(num) //NaN

// parsebool
var bool = 'false'
bool = parseBool(bool) //true
//除了false,0,'',null,undefined,NaN,其他都是true



// Function

// function declaration
function myFunction() {
    alert('hello')
}

function add(a,b){
    return a+b
}

var sum=add(1,2)
alert(sum) //3

// function expression
var FunctionName = function(a,b) {
    return a+b
}
var sum=FunctionName(1,2) //3
var sum=FunctionName(1,2,3) //3:调用时可以传入多个参数，但只取函数定义时的参数个数



// Object

//array
var arr = [1, 2, 3]
var arr = new Array(1, 2, 3)
var arr = new Array(3) //创建一个长度为3的数组
arr[0] = 1
arr[4] = 2
alert(arr.length) //5
alert(arr[3]) //undefined
//array长度会自增, 未被定义的索引的value为undefined
arr.push()
arr.pop()
arr.length
arr.splice() //删除数组元素 arr.splice(1,2) 从索引1开始删除2个元素
arr.forEach() //遍历数组 自动向括号内的内容传入遍历出来的内容


//string
var str = 'hello'
str.length
str.indexOf('l') //2
str.lastIndexOf('l') //3
str.substring(1,3) //el
str.trim() //去掉首尾空格
str.charAt(1) //e


// object
var obj = {name: 'John', age: 20}
var obj = {
    name: 'John',
    age: 20,
    address: {
        city: 'Beijing',
        street: 'Chaoyang'
    },
    show: function() {
        alert(this.name)
    }
};


// json: JavaScript Object Notation
//用javascript对象表示数据的文本,本质是字符串所以用单引号
//使用json.parse()将json字符串转换为js对象
//json字符串必须用双引号
var json='{"name":"John","age":20}'
json.name //undefined
var jsonObj=JSON.parse(json)
jsonObj.name //John


// bom: Browser Object Model
// 允许javascript与浏览器交互
// 将浏览器的各个部分封装成对象

// window: 代表浏览器窗口 window 可以省略
window.alert('hello')
alert('hello')
// window.location: 代表浏览器的地址栏
// window.history: 代表浏览器的历史记录
// window.navigator: 代表浏览器的信息
// window.screen: 代表屏幕的信息
var confirmValue= window.confirm('are you sure?')//弹出确认框:确定返回true,取消返回false
alert(confirmValue) //true
window.prompt('please input your name')//弹出输入框
window.setInterval(function(){},2000)//定时器: 每隔一段时间执行一次function
window.setTimeout()//延时器: 一段时间后只执行一次function
location.href='http://www.baidu.com'//设置跳转到百度
alert(location.href)//显示当前页面的url


// dom: Document Object Model
// 将网页组成部分封装成对象
// document: 代表整个网页
var img= document.getElementById('img1')//通过id属性获取元素

document.getElementsByClassName('class')//通过class属性获取元素

var Elements= document.getElementsByTagName('div')//通过标签名获取元素组
for(var i=0;i<Elements.length;i++){
    alert(Elements[i])
}

document.getElementsByName('name')//通过name属性获取元素

// Element: 代表网页的元素 <>...</>
Element.innerHTML//获取或设置元素的内容
Element.value//获取或设置元素的值
// Attribute: 代表网页元素对象的属性如 <img src=""> src就是属性

// Text: 代表网页元素的文本内容

// Comment: 代表网页元素的注释



// Event: 代表用户与网页交互的动作

// onclick: 鼠标点击
// onmouseover: 鼠标移入
// onmouseout: 鼠标移出
// onkeydown: 某个键按下
// onkeyup: 键抬起
// onsubmit: 表单提交
// onfocus: 元素获取焦点 :输入框被选中
// onblur: 元素失去焦点 :输入框未被选中
// onload: 页面加载完成
// onunload: 页面关闭
// onresize: 窗口大小改变
// onscroll: 滚动条滚动
// onerror: 加载错误
// oncontextmenu: 右键点击
// onselect: 文本选中
// oninput: 输入框输入
// onchange: 输入框内容改变
// onmousedown: 鼠标按下
// onmouseup: 鼠标抬起
// onmousemove: 鼠标移动
// ondblclick: 双击
// ondragstart: 拖拽开始
// ondragend: 拖拽结束
// ondragenter: 拖拽进入
// ondragleave: 拖拽离开
// ondragover: 拖拽悬停
// ondrop: 拖拽放下
// ondrag: 拖拽中





