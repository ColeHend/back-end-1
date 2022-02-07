const express = require('express');
const cors = require('cors');
const app = express();

const SERVER_PORT = 4000

app.use(express.json())
app.use(cors())

app.get('/api/users',(req,res)=>{
    const users = ["bob","mary","jeff"]
    res.status(200).send(users)
})

app.get('/weather/:temp',(req,res)=>{
    let message = `<h3>It was ${req.params.temp} today</h3>`;
    res.status(200).send(message);
})

app.listen(SERVER_PORT, ()=>{console.log(`running on port: ${SERVER_PORT}`);})