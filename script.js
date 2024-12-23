let count = 0;

let interval = setInterval(() => {
    count += 1;
    console.log('hi', count);
    if (count === 4) clearInterval(interval);
}, 1000);
