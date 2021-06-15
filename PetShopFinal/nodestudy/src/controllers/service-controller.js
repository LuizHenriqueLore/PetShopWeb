'use strict';

const mongoose = require('mongoose');
const Service = mongoose.model('Service');

exports.get = async(req, res, next) => {
    try{
        var data = await Service.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await Service.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByTitle = async(req, res, next) => {
    try{
        var data = await Service.find({ title: `${req.params.title}` }, 'title description slug image price');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var service = new Service(req.body);
        await service.save();
        res.status(201).send({
            message: 'Serviço cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.put = async(req, res, next) => {
    try{
        await Service.findOneAndUpdate(req.params.id , {
            $set:{
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            }
        });
        res.status(201).send({
            message: 'Serviço alterado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao tentar update'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await Service.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Serviço removido com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};