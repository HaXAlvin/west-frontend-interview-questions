// Question: What's the result?


const promise = new Promise((res, rej) => {
    console.log('first line');
    setTimeout(() => {
        res("foo");
    }, 0);
    console.log('????')
});

promise.then((n) => console.log(n))
