const express = require('express')
const path = require('path')
const { database } = require('../firebase/firebase')

const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))
app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/userdata/:id', async (req, res) => {
    database.ref(`/users/${req.params.id}/history`).once('value').then((snapshot) => {
        let data = ''
        snapshot.forEach((date) => {
            date.forEach((product) => {
                const { productName, category = '', subCategory = '' } = product.val()
                data += (`${date.key},${product.key},${productName},${category},${subCategory} \n`)
            })
        })
        res.status(200).send(data)
    })
})

app.post('/add-data', async (req, res) => {
    await database.ref(`/users/${req.body.uid}/history/${req.body.date}/${req.body.pid}`).set({
        productName: req.body.name,
        category: req.body.category,
        subCategory: req.body.subCategory
    })
    res.status(200).send()
})

app.listen(port, () => {
    console.log('Server is up on PORT...', port)
})