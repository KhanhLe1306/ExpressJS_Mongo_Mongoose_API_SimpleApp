import express from 'express';
import routes from './src/routes/crmRoutes'
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';

const app = express()
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise   //allow mongoose to return promise
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser set up
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// serve static files
app.use(express.static('public/images'))

routes(app)


app.get('/', (req, res) => {
    res.send(`Node and Express server running on port ${PORT}`)
})


app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
})