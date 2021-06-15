'use strict';

const mongoose = require('mongoose');
const Carrinho = mongoose.model('Carrinho');

exports.get = async(req, res, next) => {
    try{
        var data = await Carrinho.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await Carrinho.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByUsername = async(req, res, next) => {
    try{
        var data = await Carrinho.find({ username: `${req.params.username}` }, 'username title price');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var carrinho = new Carrinho(req.body);
        await carrinho.save();
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await Carrinho.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};