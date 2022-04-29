// 20 mins
var fs = require('fs');
var { of } = require('rxjs');

fs.readFile("TestFile.txt"), function (err, data) {
    if (err) throw err;
    console.log(data.toString());
}

var question1 = async () => {
    // -- put code which is listed above into here -- //
};

var question2$ = of("hello");
// Find a way to combine the question1 into question2$
