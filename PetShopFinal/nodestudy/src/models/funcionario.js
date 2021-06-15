'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    competencia: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Funcionario', schema);