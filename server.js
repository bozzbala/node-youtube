const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const {urlencoded} = require("express");

const methodOverride = require('method-override')

const mongoose = require('mongoose');

const postRoutes = require("./routes/post-routes")
const apiPostRoutes = require("./routes/api-post-routes")
const contactRoutes = require("./routes/contact-routes")
const createPath = require("./Helpers/create-path")

const app = express();

mongoose
    .connect(process.env.MONGO_DB)
    .then((res) => {console.log("Connected  successfully")})
    .catch((error) => {console.log(error)})

app.set('view engine', 'ejs')

app.listen(process.env.PORT, (error) =>{
    if(error){
        throw error;
    }
    else{
        console.log(`listening to port ${process.env.PORT}`);
    }
})

app.use(express.urlencoded({extended:false}))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static('styles'))

app.use(methodOverride('_method'))


app.get('/', (req, res)=>{
    const title = "Home"
    res.render(createPath('index'), {title})
})

app.use(postRoutes);
app.use(contactRoutes);
app.use(apiPostRoutes);

app.get('/about-us', (req, res)=>{
    res.redirect('/contacts')
})


app.use((req, res)=>{
    const title = "Error page"
    res
        .status(404)
        .render(createPath('error'), {title})
})