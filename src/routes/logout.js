const express = require('express')
const {Router} = express
const {loggerError} = require('../utils/loggers')

const logoutRouter = Router()

logoutRouter.get('/', (req, res)=>{
    // let name = req.user
    // req.logout(err =>{
    //     if(err){ loggerError.error(`Error al cerrar sesion: ${err}`) }
    // })
    // res.render('logout', {name: name.firstName, lastName: name.lastName})
    if (req.isAuthenticated()) {
        let name = req.user;
        req.logout(err =>{
            if(err){ loggerError.error(`Error al cerrar sesion: ${err}`) }
        })
        res.render('logout', {name: name.firstName, lastName: name.lastName, session: true})
    } else {
        res.render('logout', {session: false})
    }
})


module.exports= logoutRouter