const nhentai = require('nhentai-js')
// const api = new API();
const express = require('express')
const app = express()
let port = process.env.PORT || 3000 

app.listen(port, () => { console.log(`app listening at http://localhost:${port}`)
    app.get('/:code', (req, res) => {
        async function getDoujin(id){
            try{ // try/catch is the equivalent of Promise.catch() in async/await
                const val = await nhentai.getDoujin(id)
                res.send(val)
                // console.log(val);
            }catch(err){
                res.send(err)
            }
        }getDoujin(req.params.code)
    })
    app.get('/', (req, res) => {
        res.send('to use: com/(nhentai code)')
    })
})
    
