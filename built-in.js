console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("math.floor(3,9)", Math.floor(3.9)); //truncates;


var MyMath = {
    PI : Math.PI, 
    random:function() {
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor", MyMath.floor(3.8));
