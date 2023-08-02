// timers
//setTimeout(function, delay)

const delay = 1000;
function print() {
    console.log('Russell')
}
setTimeout(print, delay)


function print2(value, value2) {
    console.log(value, value2)
}
setTimeout(print2, delay, 'Russell', 'Edward')

//setInterval(function, delay)

function print3() {
    console.log('Russell')
}
setInterval(print3, delay)

let counter = 1;
let intervalId = null;
function print4() {
    console.log('Russell', counter)
    counter++;
    if (counter > 10) {
        clearInterval(intervalId)
    }
}
intervalId = setInterval(print4, delay)