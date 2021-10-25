import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import postAllRouter from './route/posts.js'

const app = express();
dotenv.config();

//express Middle Setup
app.use(express.json({limit : "30mb", extended : true}));
app.use(express.urlencoded({limit : "30mb", extended : true}));
app.use(cors());

//Routes
app.use('/posts', postAllRouter)


// const DB_URL = 'mongodb+srv://tridentGM:adeebshah1234@socialfront.f3cle.mongodb.net/socialFront?retryWrites=true&w=majority'
// const PORT = 5000;

//Database setup
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT, () => console.log(`Server Running on PORT : ${process.env.PORT}`)))
.catch(err => console.error(err));
