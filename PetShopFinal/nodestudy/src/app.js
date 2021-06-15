'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(require('cors')());
const router = express.Router();

const config = require('./config');

// Conectar ao banco de dados
mongoose.connect('mongodb+srv://kibe:123456kibe@cluster0.j5lbb.gcp.mongodb.net/kibedbex44?retryWrites=true&w=majority', { useNewUrlParser:true,  useFindAndModify: false, useCreateIndex: true,  useUnifiedTopology: true })
.then(conn => console.log("Mongo connection OK"))
.catch(err => console.log("BAD MONGO CONNECTION"));

// Carregar os Models
const User = require('./models/user');
const Product = require('./models/product');
const Service = require('./models/service');
const Carrinho = require('./models/carrinho');
const Pet = require('./models/pet');
const Agendado = require('./models/agendado');
const Funcionario = require('./models/funcionario');

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const productRoute = require('./routes/product-route');
const serviceRoute = require('./routes/service-route');
const carrinhoRoute = require('./routes/carrinho-route');
const petRoute = require('./routes/pet-route');
const agendadoRoute = require('./routes/agendado-route');
const funcionarioRoute = require('./routes/funcionario-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/service', serviceRoute);
app.use('/carrinho', carrinhoRoute);
app.use('/pet', petRoute);
app.use('/agendado', agendadoRoute);
app.use('/funcionario', funcionarioRoute);

module.exports = app;