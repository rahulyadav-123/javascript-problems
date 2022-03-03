function person(fname, lname) {
    let first_name = fname
    let last_name = lname

    let getdetails_noaccess = function () {
        return (`First name is:${first_name}
        last name is:${last_name}`)
    }

    this.getdetails_access = function () {
        return (`First name is:${first_name},
        last name is:${last_name}`)
    }
}
    let person1 = new person("Rahul", "Yadav")
    console.log(person1.first_name)
    console.log(person1.getdetails_noaccess)
    console.log(person1.getdetails_access())