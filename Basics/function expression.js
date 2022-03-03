//function return and passing
function greet() {
    return (`hello  ${user}`)
}
let user = 'rahul'
let str = greet()
console.log(str)


//function expression in javascript
let add = function (num1, num2) {
    return num1 + num2
}
let sum = add
let result = sum(5, 6)
console.log(result)