// mongoDB
require('./config/db')


const express=require("express")
const port =5000
const userRouter=require('./routes/userRouter')
// var jwt = require('jsonwebtoken');
var cors = require('cors')
const cookieSession = require('cookie-session')
const passportSetup=require('./passport')
const passport = require('passport')
const authRoute=require("./routes/auth")
const app = express()


// For accepting post form data
const bodyParser=require('express').json;
app.use(bodyParser())

app.use(express.urlencoded())
app.use(cors())
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         methods:"GET,POST,PUT,DELETE",
//         credentials:true
//     })
// )

app.use(cookieSession(
    {
        name:"session",
        keys:["lama"],
        maxAge:24 * 60 * 60 * 100
    }
))
app.use(passport.initialize())
app.use(passport.session())


// const http = require('http');
// const server = http.createServer(app);


app.use("/api/user",userRouter)
app.use("/auth",authRoute)


// server.listen(8080, () => {
//     console.log('listening on *:8088');
//   });

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})