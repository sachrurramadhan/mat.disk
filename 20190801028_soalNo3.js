var key = require('readline-sync');

var fak = 1;
var n = 0;
var n = parseInt(key.question('Input Nilai : '));
for(var i=1; i<=n; i++){
    fak = i*fak;
}
console.log("Faktorial Dari "+n+" adalah " +fak);