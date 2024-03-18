require('dotenv').config()
const app = require("./app.js");
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello words bienvenue!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})