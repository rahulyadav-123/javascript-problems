 //why This keyword
let laptop ={
    cpu:'i7',
    ram:'8',
    processor:'qualcom',

     getFunction:function() {
        return(`${this.cpu}`)
    }

}
console.log(laptop.getFunction())