const express = require('express')
const zod = require('zod');
const app = express();
const schema = zod.array(zod.number())

app.use(express.json())

app.post('/health-checkup', function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.send('wrong inputs')
    }
    res.send({response})
})

app.listen(3000);