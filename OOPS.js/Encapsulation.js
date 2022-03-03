class person{
    constructor(name,id){
        this.name=name
        this.id=id
       
    }
    add_address(add){
        this.add=add
    }
    getfunction = function(){
        return(`Name is ${this.name},Address is:${this.add}`)
    }
}
let person1 = new person("Rahul","412")
console.log(person1.add_address("delhi"))
console.log(person1.getfunction())