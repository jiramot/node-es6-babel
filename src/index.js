/**
 * Created by jiramot on 5/24/2016 AD.
 */

import express from 'express'

const app = express()

app.get('/', function(req, res){
   res.send('hello world')
});

app.listen(3000, function(){
    console.log('starting server at port 3000')
})