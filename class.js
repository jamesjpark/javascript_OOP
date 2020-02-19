class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        
    }
    sum(){
        return (this.first+this.second);
    }
}
   

class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
        
    }
    sum(){
        return (super.sum()+this.third);
    }
    avg(){
        return "average = " + (this.first+this.second+this.third)/2;
    }
}


var park = new PersonPlus("park", 10, 30, 40);
console.log("park.sum() ", park.sum());
console.log("park.avg() ", park.avg());

