// const api = new API();
const nhentai = require('nhentai-js');
const express = require('express');
const fs = require('fs');
const fetch = require('node-fetch');
const app = express();

var cloudinary = require('cloudinary').v2;
let port = process.env.PORT || 3000 

cloudinary.config({
    cloud_name:'dodfnzma6',
    api_key:'155611464359442',
    api_secret:'fD8fDl3REM408_fDT5gUlk39lRQ',
    api_environment_variable:'CLOUDINARY_URL=cloudinary://155611464359442:fD8fDl3REM408_fDT5gUlk39lRQ@dodfnzma6'
})

app.listen(port, () => { console.log(`app listening at http://localhost:${port}`)
app.get('/popular/', (req, res) => {
    async function homePage(){
        try{ // try/catch is the equivalent of Promise.catch() in async/await
            let val = await nhentai.getHomepage(1)
            res.send(val)
        }catch(err){
            res.send(err)
        }
    }homePage()
})
app.get('/', (req, res) => {
    res.send('to use: com/(nhentai code)')
})
app.get('/:code', (req, res) => {
    async function getDoujin(id){
        try{ // try/catch is the equivalent of Promise.catch() in async/await
            let val = await nhentai.getDoujin(id)
            res.send(val)
        }catch(err){
            res.send(err)
        }
    }getDoujin(req.params.code)
})
})

