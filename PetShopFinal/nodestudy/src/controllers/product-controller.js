'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async(req, res, next) => {
    try{
        var data = await Product.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await Product.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByTitle = async(req, res, next) => {
    try{
        var data = await Product.find({ title: `${req.params.title}` }, 'title description slug image price');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var product = new Product(req.body);
        await product.save();
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.put = async(req, res, next) => {
    try{
        await Product.findOneAndUpdate(req.params.id , {
            $set:{
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            }
        });
        res.status(201).send({
            message: 'Produto alterado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao tentar update'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await Product.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};