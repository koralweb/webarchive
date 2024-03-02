const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
    res.status(200)
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})


const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})

