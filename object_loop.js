var memberArray = ['egoing', 'graphittie', 'leezche'];
console.log(memberArray[2]);

console.group('array loop');
for(i = 0; i < memberArray.length; i++){
    console.log(i, memberArray[i]);
}
console.groupEnd('array loop');

var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}

console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');