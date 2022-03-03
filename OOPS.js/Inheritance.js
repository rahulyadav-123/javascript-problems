class person {
    constructor(name) {
        this.name = name
    }
    //method to return the string
    tostring() {
        return (`Name of person is : ${this.name}`)
    }

}
class student extends person {
    constructor(name, id) {
        super(name)      //super keyword to for calling above class constructor
        this.id = id
    }
    tostring() {
        return (`${super.tostring()} Student Id: ${this.id}`)
    }


}
let result = new student("Rahul", 10)
console.log(result.tostring())

