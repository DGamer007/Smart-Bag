const express = require('express')
const { readFileSync } = require('fs')
const path = require('path')
const cors = require('cors')
const { fetchNecessaryData } = require('../firebase/dataManipulation')

const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))
app.use(express.json())
app.use(cors())

app.get('/userdata/:id', async (req, res) => {
    const data = await fetchNecessaryData(req.params.id)
    res.send(data)
})

app.get('/defaultData', (req, res) => {
    try {
        const data = JSON.parse(readFileSync(path.join(__dirname, 'defaultProducts.json')).toString())
        res.status(200).send(data)
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, () => {
    console.log('Server is up on PORT...', port)
})