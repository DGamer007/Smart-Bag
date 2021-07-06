const express = require('express')
const path = require('path')
const { fetchNecessaryData } = require('../firebase/dataManipulation')

const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))
app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/userdata/:id', async (req, res) => {
    const data = fetchNecessaryData(req.params.id)
    res.send(data)
})

app.listen(port, () => {
    console.log('Server is up on PORT...', port)
})