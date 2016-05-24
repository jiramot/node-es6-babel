/**
 * Created by jiramot on 5/24/2016 AD.
 */

import express from 'express'
import routes from './config/routes'

const app = express()

module.exports = app
routes(app)

app.listen(3000, function(){
    console.log('starting at port 3000')
})