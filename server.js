// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')



const simpleApiRoute = require('./routes/simpleApiRoute')
const itemsRouter = require("./routes/itemsRoute")
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")



const app = express();
app.use(bodyParser.json());

const MONGO_URI = 'mongodb://127.0.0.1:27017/testdatabase'; // Update as needed
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));




app.use('/api/simpleApi',simpleApiRoute)
app.use("/api/items",itemsRouter)
app.use("/api/products",productRouter)
app.use("/api/users",userRouter)



var port = 3000;
app.listen(port)

module.exports = app
