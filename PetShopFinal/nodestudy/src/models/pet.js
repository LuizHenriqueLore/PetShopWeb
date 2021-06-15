'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    animalType: {
        type: String,
        required: true
    },
    race: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Pet', schema);