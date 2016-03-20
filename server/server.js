import express from 'express'

let app = express()

app.use(express.static('public'))
console.log('haha')
app.listen(3000)