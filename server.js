// const api = new API();
const nhentai = require('nhentai-js');
const express = require('express');
const fs = require('fs');
const fetch = require('node-fetch');
const app = express();


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

