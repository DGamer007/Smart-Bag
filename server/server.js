const express = require('express')
const path = require('path')
const { database } = require('../firebase/firebase')

const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))
app.use(express.urlencoded({ extended: true }))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post('/add-data', (req, res) => {
    database.ref(`/users/${req.body.uid}/history/${req.body.date}/${req.body.pid}`).set({
        productName: req.body.name,
        category: req.body.category,
        subCategory: req.body.subcategory
    }).then(() => {
        console.log("Data Saved.")
        res.sendFile(publicDir + '/index.html')
    })
})

app.listen(port, () => {
    console.log('Server is up on PORT...', port)
})