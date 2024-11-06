// var employees = [
//     { id: 1, name: 'ali', age: 24, salary: 10000 },
//     { id: 2, name: 'ahmed', age: 24, salary: 10000 },
//     { id: 3, name: 'mohamed', age: 24, salary: 10000 },
//     { id: 4, name: 'aya', age: 24, salary: 10000 },
// ]
// // kareem,22,8000

// for (let index = 0; index < employees.length; index++) {
//     if (employees[index].id == 4) {
//         employees.splice(index, 1)
//     }
// }

// console.log(employees);

// push({
//     id: employees.length, name: 'aya', age: 24, salary: 10000
// })

// =================================================

document.write('test')
// alert();
// window = {
//     alert: function () { },
//     document: {},
//     navigator: {},
//     screen: {},
//     location: {},
//     history: {},
// }

// console.log(window.innerHeight);
// console.log(window.outerHeight);


// alert(window.screenX);
// alert(window.screenY);


// alert(window.scrollY);
// ======================
// Window methods
var window1;
function openWindow() {
    window1 = window.open('', '_blank', 'width=200,height=200,screenX=100,screenY=100');
}
function closeWindow() {
    window1.close();
}
function checkCloseWindow() {
    console.log(window1.closed)
}

function changeColor(color) {
    window1.focus();
    window1.document.bgColor = color;
    window1.document.write(color);
}



function getSelectionText() {
    alert(window.getSelection());
    // window.print();
}

function moveWindow() {
    window1.focus();
    // window1.moveTo(200, 200);
    window1.moveBy(200, 200);
}

function scrollWindow() {
    // window.scrollTo(0, 200);
    // window.scrollBy(0, 100);
}

function scrollToTop() {
    window.scrollTo(0, 0);
}
// ===========================

var count = 0;
// var interval = setInterval(function () {
//     count++;
//     console.log(count);
//     if (count >= 10) {
//         clearInterval(interval);
//     }
// }, 1000);


window.document.bgColor = 'pink';
setTimeout(function () {
    window.document.bgColor = 'white';
    // console.log('test settimeout');
}, 3000);

var date1;
// console.log(date1.toLocaleTimeString());

var time = document.getElementById('time');
setInterval(function () {
    date1 = new Date();
    time.innerHTML = date1.toLocaleTimeString();
}, 1000)
console.log(time);

// =============================
// Screen
console.log(screen.availWidth);
console.log(screen.availHeight);

console.log(screen.width);
console.log(screen.height);

// ===================
// Navigator

// console.log(navigator.appName);
// console.log(navigator.appCodeName);
// console.log(navigator.appVersion);
// console.log(navigator.language);
// console.log(navigator.cookieEnabled);
// console.log(navigator.platform);
// console.log(navigator.onLine);
// console.log(navigator.geolocation);

// ===========================
// Location
console.log(location.href);
console.log(location.hash);
console.log(location.search);

function replaceLocation() {
    location.replace('http://linkedIn.com');
    // location.assign('http://google.com');
}

function getHistory() {
    // console.log(history.length);
    // history.back();
    // history.forward();
    // history.go(2);
}
// ===========================
// Events

function clickAction(e) {
    // console.log(e.target.id);
    // console.log(e.type);
}

function mouseOverAction(e) {
    // console.log(e.screenX);
    // console.log(e.clientX);
    // console.log(e.pageX);
    // console.log(e.offsetX);

    // console.log(e.screenY);
    // console.log(e.clientY);
    // console.log(e.pageY);
    // console.log(e.offsetY);

    console.log(e.altKey);

    console.log(e.button);


}

function printKey(e) {
    if (e.key == ' ' || e.key == '@') {
        e.preventDefault();
    }
    console.log(e.key);
    console.log(e.code);
}

function submitForm(e) {
    e.preventDefault();
    console.log(e);
}

function fun(e) {
    console.log('dkkjd');
    e.preventDefault();
}

function getParentInfo() {
    console.log('parent');
}
function getChildInfo() {
    console.log('child');
}
var parent = document.getElementById('parent');
var child = document.getElementById('child');

// parent.addEventListener('click', getParentInfo, true);
// child.addEventListener('click', function () {
//     console.log('child');
// }, true);
parent.addEventListener('click', getParentInfo);
child.addEventListener('click', function (event) {
    console.log('child');
    event.stopPropagation();
});

var saveBtn = document.getElementById('save');
console.log(saveBtn);

// saveBtn.addEventListener('click', saveAction)
// function saveAction() {
//     console.log('save test');
// }


// try {
//     alertd();
// } catch (error) {
//     alert(error);
// }

window.onerror = function (event) {
    alertt();
    console.log(console.error());
}