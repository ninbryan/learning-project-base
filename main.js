console.log('I said hello...');

var timeInMilliseconds = 1000 * 5;

setTimeout(function() {
    alert('stalling');
}, timeInMilliseconds);