'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');
const ValidationContract = require('../validators/validator');

exports.get = async(req, res, next) => {
    try{
        var data = await User.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await User.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByUsername = async(req, res, next) => {
    try{
        var data = await User.find({ username: `${req.params.username}` }, 'name username password email address token');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasWhiteSpace(req.body.username, 'O Usuário não pode ter espaços em branco');
    contract.isEmail(req.body.email, 'Email mal formatado');
    contract.hasWhiteSpace(req.body.password, 'A senha não pode ter espaços em branco');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        console.log(contract.errors());
        return;
    }
    
    try{
        var user = new User(req.body);
        await user.save();
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.put = async(req, res, next) => {
    try{
        await User.findOneAndUpdate(req.params.id , {
            $set:{
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                address: req.body.address
            }
        });
        res.status(201).send({
            message: 'Usuário alterado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao tentar update'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await User.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Cliente removido com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};