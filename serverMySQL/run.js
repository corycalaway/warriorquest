const db = require("./index");

const init = async () => {
  let getUsers = await db.getAllUsers()
  console.log(getUsers)
}

init();