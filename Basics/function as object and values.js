let car = {
    brand: 'BMW',
    wheel: 'MRF',
    start: function () {
        console.log(this)
        console.log(`started ${this.brand} ,${this.wheel}`)

    },
    stop: () => {
        console.log(this)
        console.log(`stopped ${this.brand},${this.wheel}`)
    }
}
car.start()
car.stop()





const add = (a  , b=9 ,  c = 4) => {
    return (` the addiotion is ${a + b + c}`);
}
console.log(add(4));

