//maps in javascript      //maps is basically correction of keys and value
let map=new Map()
map.set("rahul", "java")
map.set("rohit","javascript")
map.set("rohan","android")

map.forEach((v,k) =>{
    console.log(k,":",v)  
})

// another way
let map=new Map()
map.set("rahul", "java")
map.set("rohit","javascript")
map.set("rohan","android")

for(let [k,v] of map){                  //using for of loop method
    console.log(k,":",v)
}