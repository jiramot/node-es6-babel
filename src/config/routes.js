import path from 'path'
import express from 'express'
import fs from 'fs'
import hello from '../app/controllers/hello.js'

module.exports = function(app){
    app.get('/', hello.index)
}