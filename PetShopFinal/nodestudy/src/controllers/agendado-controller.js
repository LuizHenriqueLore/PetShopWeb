'use strict';

const mongoose = require('mongoose');
const Agendado = mongoose.model('Agendado');

exports.get = async(req, res, next) => {
    try{
        var data = await Agendado.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await Agendado.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByUsername = async(req, res, next) => {
    try{
        var data = await Agendado.find({ username: `${req.params.username}` }, 'username title petName price day hour');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByDay = async(req, res, next) => {
    try{
        var data = await Agendado.find({ day: `${req.params.day}` }, 'username title petName price day hour');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var agendado = new Agendado(req.body);
        await agendado.save();
        res.status(201).send({
            message: 'Serviço agendado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await Agendado.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Serviço removido da agenda com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};