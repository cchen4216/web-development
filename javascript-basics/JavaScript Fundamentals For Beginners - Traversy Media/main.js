// 视频教程的网址
// https://www.youtube.com/watch?v=vEROU2XtPR8&t=885s

/*
## 01 What is Javascript?
- A programming lanuage that is used to make web pages interactive
- Interpreted lanuage, scripting language
- Runs on the client's computer/browser
- object based
/*
/*
## 02 Programming Fundamentals
- Variables
- Comparison and Operators
- Data Types
- Arrays
- Objects
- Prototypes    ****
- Loops
- Functions
- Events        ****
- Conditionals
- Program Flow
*/
/*
## 03 What can I do with Javascript?
- Put content in an HTML page on the fly
- Make webpages responsive
- Detect a user browser & other info
- Create cookies
- Validate Forms
- Create Animations, Slideshows, Scrollers, etc
- Build Apps with JavaScript Framworks (AngularJS, ReatJS, BackboneJS etc)
*/

// 命令行输出，每种编程语言必备
// console.log('hi');
// alert('Hello world');

///////////////////////////////////////////////////////////
//               Variables and Data Types
///////////////////////////////////////////////////////////
/**
 * variables name contains letters, number, underscores, dollar-sign
 * begin with a letter, _ or $
 * case sensitive
 * you can declare first without initial value
 */

// Number
// var number1 = 35;
// var number2 = 40;
// console.log(number1 + number2);
// console.log('my number is ' + number1);

// String
// var number1 = '35';
// var number2 = '40';
// console.log(number1 + number2);

// Arrays
// var colors = ['red', 'blue', 'green'];
// var colors = new Array('red', 'blue', 'green');
// console.log(colors);
// console.log(colors[1]);
// console.log(colors[3]);    // print undefined

// colors[5] = 'orange';
// console.log(colors);
// colors[4] = 'magenta';
// console.log(colors);

// var numbers = [5,77,6,43];
// console.log(numbers[0] + numbers[3]);
// console.log(numbers.length);
// console.log(numbers.sort());   // Some problem here
// numbers.push('seven');
// numbers.push(1);
// console.log(numbers);
// console.log(numbers.sort());
// console.log(numbers.reverse());

////////////////////////////////////////////////////////////
//                            Loops
////////////////////////////////////////////////////////////
// for (var i = 0; i < 10; i++) {
//     console.log('I love the number ' + i);
// }

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// var numbers = [3,33,54,65,78,2,55];
// numbers.forEach(function(number){
//     console.log(number);
// });

/////////////////////////////////////////////////////////
//                       Conditionals
/////////////////////////////////////////////////////////
// var var1 = 3;
// var var2 = 4;
// if (var1 == var2 || var1==3) {
//     console.log('This is true.');
// } else {
//     console.log('This is false.');
// }

// var fruit = 'grape';
// switch (fruit) {
//     case 'banana': 
//         console.log('i hate banana');
//         break;
//     case 'apple':
//         console.log('i love apples');
//         break;
//     case 'orange':
//         console.log('oranges are ok');
//         break;
//     default:
//         console.log('I love all other fruites');
//         break;
// }

////////////////////////////////////////////////////////
//                Object
/////////////////////////////////////////////////////////
var person = {
    firstName: 'Brad',
    lastName: 'Traversy',
    age: 34,
    children: ['Brianna', 'Nicholas'],
    address: {
        street: '555 something st',
        city: 'Boston',
        state: 'MA'
    },
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

// console.log(person.firstName);
// console.log(person.age);
// console.log(person.children[0]);
// console.log(person.address.state);
// console.log(person.fullName());

// Object constructor
// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'round';
// apple.describe = function() {
//     return 'An apple is the color ' + this .color + ' and is the shape ' + this.shape;
// };

// console.log(apple.describe());

// Constructor pattern
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function() {
        return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}

var apple = new Fruit('apple', 'red', 'round');
var melon = new Fruit('melon', 'green', 'round');
// console.log(melon.shape);
// console.log(melon.describe());

var users = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Smith',
        age: 44
    },
    {
        name: 'Williams',
        age: 20
    },
];

// console.log(users[0].name);

//////////////////////////////////////////////////////////
//                      Events
//////////////////////////////////////////////////////////
function doClick() {
    // console.log('You Clicked!');
    // this.innerHTML = 'You clicked!';
}

function changeText(id) {
    id.innerHTML = 'you clicked agian';
}

function changeText() {
    var heading = document.getElementById('heading');
    heading.innerHTML = 'you clicked agian';
}

function showDate() {
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate() {
    var time = document.getElementById('time');
    time.innerHTML = '';
}

// body onload='showDate()'

//////////////////////////////////////////////////////////
//                      Forms
//////////////////////////////////////////////////////////
function changeBackground(x) {
    // console.log(x);
    // console.log(x.value);
    // var body = document.getElementById('body');
    // body.style.backgroundColor = x.value;

    var heading = document.getElementById('heading');
    heading.style.color = x.value;
}

// 这里现在有点问题，当点了 submit 按钮之后，会执行 action 而不是 onsubmit
// action 要给一个文件而不是 function。。。。
function validateForm() {
    var firstName = document.forms['mtForm']['firstName'].value;
    if (firstName ==null || firstName=="") {
        console.log('First name is required.');
        return false;
    }
}



