console.log('I said hello...');

var timeInMilliseconds = 1000 * 5;

setTimeout(() => {
    alert('stalling');
}, timeInMilliseconds);