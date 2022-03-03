class vehicle{
    constructor(name,maker,engine){
        this.name=name
        this.maker=maker
        this.engine=engine
    }
    getdetails = function(){
        return(`the name of the bike is ${this.name}`)
        
    }
}

let bike1 = new vehicle("pulser","bajaj","998cc")
let bike2 = new vehicle("passion","Honda","120cc")
console.log(bike1.name)
console.log(bike2.maker)
console.log(bike1.getdetails())                                     