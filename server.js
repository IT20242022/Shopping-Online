const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')

const path = require('path')
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require("./routes/UserRoutes");

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))
 
// Use routes
app.use('/user', userRoutes);

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))