require('dotenv').config()
var cors = require('cors')
const app = require("./app.js");

const port = process.env.PORT

// app.get('', (req, res) => {
//   res.send('Hello words bienvenue!')
// })

var corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus:process.env.OPTIONSSUCCESSSTATUS,
}
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

