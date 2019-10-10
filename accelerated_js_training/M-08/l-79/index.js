//79. Timers & Intervals

var interval = setInterval(function() {
    console.log('Ping!')
}, 500)

setTimeout(function() {
    clearInterval(interval)
}, 2500)