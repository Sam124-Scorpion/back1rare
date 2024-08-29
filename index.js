const { name } = require("ejs");
const express = require("express");
const app = express();
const path = require("path")
const port = 3000;


app.use(express.static('./public'))

app.set("view engine","ejs")

// app.use((req,res,next)=>{
//     // console.log(req)
//     next()
// })
app.get('/view',(req,res)=>{
    res.render("cat",{name : "sam"})
})

app.get('/about/:name',(req,res)=>{
    res.send(`the name is :: ${req.params.name}`)
})

app.get('/engine',(req,res)=>{
    res.render("cat1",{age : 50})
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'ind.html'))
})

app.get('/',(req,res)=>{
    res.send("Hello Sam")
})

app.get('/about',(req,res)=>{
    res.send("i am about!")
})

app.get('/contacts',(req,res)=>{
    try {
        res.send("i am contact!")
    } catch (error) {
        throw Error("sorry for the error")
    }
  
})

app.get('/error',(req,res)=>{
    throw Error("sorry for the error")
})
app.use(function errorHandler(err, req, res, next){
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render("error", { error: err })
  })


app.listen(port , () =>{
    console.log(`listening at port http://localhost:${port}/`)
})