'use strict';

var fs = require('fs');
var path = require('path');
var bower;

fs.readFile(process.cwd()+"/bower.json", 'utf8', function(err, data) {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    bower= JSON.parse(data);
    getBower();
})

function getBower() {
    return bower
}

module.exports = {
    getBower: getBower
};
