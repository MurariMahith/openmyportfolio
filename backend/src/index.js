// app.js
const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
require('./db/db')

const app = express();
const PORT_NUM = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.url} Request Method: ${req.method}`)
    next()
})

app.get('/', (req, res) => {
    console.log("User has hit homepage")
    res.json({"msg": "API working..."})
  });

app.use("/user", userRouter)


app.listen(PORT_NUM, () => {
    console.log("Running express server on port 3000");
})

// Routes
// app.use('/users', userRouter);

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/userDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
//   // Start the server
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// })
// .catch(err => console.error('Error connecting to MongoDB:', err));
