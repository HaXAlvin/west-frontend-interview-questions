// 10 mins
// Question 1: Something wrong, tell us why?

const fn1 = () => "It's";
const fn2 = () => "completed";

const main = () => {
    const logA = fn1();
    const logB = fn2();

    logging(logA, logB);
};

main();


// Question 2: Transfer this function to be a curry function
const logging = (logA, logB) => {
    console.log(`${logA}_${logB}`);
};
