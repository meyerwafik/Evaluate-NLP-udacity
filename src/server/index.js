const dotenv=require('dotenv')
dotenv.config()
var path=require('path')
const express=require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')

const axios = require("axios");
const PORT = 8081



const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
app.use(express.static('dist'))
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
 // res.sendFile(path.resolve('src/client/views/index.html'))
})

const API_KEY = process.env.API_KEY;
app.get('/url-addition/*', async (req, res) => {
    try {
        const url_inp=req.params[0]
     
      const api_sol=await axios.get(`${BASE_API_URL}?key=${API_KEY}&url=${url_inp}&lang=en`)
    
        const { agreement, subjectivity, confidence, irony,score_tag } = api_sol.data;
         res.send({
           agreement,
          subjectivity,
          confidence,
          irony,
          score_tag
         });
         res.status(200)
 
    } catch (error) {
        
        console.log(error.message)
    }
})



app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
app.get("/test", function (req, res) {
    res.send(mockAPIResponse);
  });
module.exports=app


