const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api/warnlet', (req, res) => {
    res.json({
        name: "Nguyen Le Ngoc Huy",
        money: {
            cash: 75000,
            EWallet: 0,
            banking: 2100000 
        }
    })
})

app.listen(4000, () => {
    console.log("Server run at port 4000")
})