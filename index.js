const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api/warnlet', (req, res) => {
    res.json({
        name: "Nguyen Le Ngoc Huy",
        money: {
            cash: 0,
            EWallet: 0,
            banking: 2127000 
        },
        history: [
            {"date": "10-02-2023", "content": "mua monsgeeks m1"},
            {"date": "10-03-2023", "content": "mua keycap Chicago"}
        ],
        transaction:{
            "Uyên Nguyệt Chúc Phúc genshin": 109000,
            "Phí Netflix": 89000
        }
    })
})

app.listen(4000, () => {
    console.log("Server run at port 4000")
})