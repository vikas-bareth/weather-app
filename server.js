const express = require('express')
const axios = require('axios')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.status(200).json({msg:`Weather app listening on ${PORT}`})
})

app.listen(PORT,()=> {
    console.log(`SERVER LISTENING ON ${PORT}`)
    console.log(`Live Link: http://127.0.0.1:${PORT}`)
})