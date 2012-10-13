/*globals require:true, process:true, console:true*/
(function () {
    'use strict';

    var exec = require('child_process').exec;

    exec('./test.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
}());