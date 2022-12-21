const bcrypt = require('bcryptjs')
const users = [ 
      //username: username.value,
      //email: email.value,
      //firstName: firstName.value,
      //lastName: lastName.value,
      //password: password.value
  
]

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body;
        for(let i=0; i<users.length; i++) {
          const existingPwd = bcrypt.compareSync(password, users[i].password)
            if(existingPwd) {
              users[i].username.push(username)
              users[i].email.push(email)
              users[i].firstName.push(firstName)
              users[i].lastName.push(lastName)
            }

        }

        users.push(req.body)
        res.status(200).send(req.body)
    }
}