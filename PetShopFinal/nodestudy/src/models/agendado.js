'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    petName: {
        type: String
    },
    price: {
        type: Number
    },
    day: {
        type: Number,
        required: true
    },
    hour: {
        type: Number
    }
});

module.exports = mongoose.model('Agendado', schema);