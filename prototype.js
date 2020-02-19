function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third
    
}
Person.prototype.sum = function(){
    return "prototype : " + (this.first + this.second + this.third);
}



var park = new Person("park", 10, 20, 30);

park.sum = function(){
    return "specific : " + (this.first + this.second);
}

var choi = new Person("choi", 10, 20, 40);

console.log("park.sum()", park.sum());
console.log("choi.sum()", choi.sum());
