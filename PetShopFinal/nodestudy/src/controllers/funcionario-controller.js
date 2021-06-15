'use strict';

const mongoose = require('mongoose');
const Funcionario = mongoose.model('Funcionario');

exports.get = async(req, res, next) => {
    try{
        var data = await Funcionario.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await Funcionario.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var funcionario = new Funcionario(req.body);
        await funcionario.save();
        res.status(201).send({
            message: 'Funcionario cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await Funcionario.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Funcionario removido com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};