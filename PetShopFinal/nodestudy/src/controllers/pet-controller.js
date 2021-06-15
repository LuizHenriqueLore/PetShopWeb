'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

exports.get = async(req, res, next) => {
    try{
        var data = await Pet.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await Pet.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByUsername = async(req, res, next) => {
    try{
        var data = await Pet.find({ username: `${req.params.username}` }, 'name animalType race image');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var pet = new Pet(req.body);
        await pet.save();
        res.status(201).send({
            message: 'Pet cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await Pet.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Pet removido com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};