var first = [1, 2, 23, 4, 5];
var second = [];
console.log(first);
for (var i = first.length - 1; i >= 0; i--)
    second.push(first[i]);
console.log(second);

var union = [];
for (var i = 0; i < first.length; i++) {
    if (union.indexOf(first[i])==-1){
        union.push(first[i]);}
}
for (var i = 0; i < second.length; i++){
    if (union.includes(second[i]) == false)
        union.push(second[i]);
}

console.log(union);