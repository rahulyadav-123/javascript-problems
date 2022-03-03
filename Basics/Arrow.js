let person ={
    first_name:'Rohit',
    last_name:'Yadav',

    phone_number: {
        mobile:'12345',
        landline:'78945',

    }
}

    const getFunction =()=>{
        return(`The name of person is
        ${person.first_name} ${person.last_name}`)

        }
    
    console.log(getFunction())
    console.log(person.phone_number.mobile)
