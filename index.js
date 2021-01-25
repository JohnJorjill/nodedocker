const express = require('express');
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`App listening at: ${port}`);
});

app.get('/foo',(req,res) => res.json({"foo":"bar"}));

app.use(express.urlencoded({
    extended: true
}));

app.post('/bar', (req,res) => {
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo);
});
