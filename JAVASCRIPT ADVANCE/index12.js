function setPersmissionLevel(PersmissionLevel,...names){
    // console.log(`${name1} now has ${PersmissionLevel} level access.`)
    // console.log(`${name2} now has ${PersmissionLevel} level access.`)
    // console.log(`${name3} now has ${PersmissionLevel} level access.`)

    names.forEach((name)=> 
        console.log(`${name} now has ${PersmissionLevel} level access.`))
}

setPersmissionLevel('admin','sahil','ram','shyam')


