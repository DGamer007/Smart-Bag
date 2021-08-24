const express = require('express')
const { readFileSync } = require('fs')
const path = require('path')
const cors = require('cors')
const { fetchNecessaryDataPythonAPI } = require('../firebase/dataManipulation')

const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))
app.use(express.json())
app.use(cors())

app.get('/userdata/:id', async (req, res) => {
    const data = await fetchNecessaryDataPythonAPI(req.params.id)
    res.send(data)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, () => {
    console.log('Server is up on PORT...', port)
})