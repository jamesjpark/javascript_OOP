function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third,
    this.sum = function(){
        return this.first + this.second + this.third ;
    }
}

var park = new Person("park", 10, 20, 30);

var choi = new Person("choi", 10, 20, 30);

console.log("park.sum()", park.sum());
console.log("choi.sum()", choi.sum());
//constructor
console.log("new Person()", new Person("lee", 10,40,50));