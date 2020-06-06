const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://rlftn510:qwe123@cluster0-shard-00-00-pybch.mongodb.net:27017,cluster0-shard-00-01-pybch.mongodb.net:27017,cluster0-shard-00-02-pybch.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
}).then(() => console.log('good!'))
   .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!!!!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

