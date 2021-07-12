const db = require("./index");

const init = async () => {
  let getUsers = await db.getAllUsers()
  let allUsers = getUsers[0]

  console.table(allUsers)
  // let allUsers = getUsers.map(eachUser => {
  //   // console.log('here', eachUser[0])

    
  // })

  // const {obj1, obj2} = getUsers
  //   console.log("objone", obj1)
  //   console.log("objtwo", obj2)
  // console.log(allUsers)

  
  // console.table(([getUsers]))
}

init();