const mongoose = require('mongoose')

const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose
    .connect(process.env.MONGODB_URI, dbOptions)
    .then(_ => console.log("mongodb connected ..."))
    .catch(err => console.log(err))