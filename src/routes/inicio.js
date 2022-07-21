const express = require('express')
const {Router} = express

const inicioRouter = Router()

inicioRouter.get('/', (req, res)=>{
    if(req.isAuthenticated()){
        res.redirect('admin')
    }else{
        res.render('main')
    }
    //res.render('main')
})

module.exports = inicioRouter