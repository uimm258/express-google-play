const express = require('express');
const morgan = require('morgan');



const playData = require('./playData');
const app = express();


app.use(morgan('common'));

app.get('/apps', (req, res) => {
    const{search = ''} = req.query;

    let result = playData.filter(data => data.App.toLowerCase().includes(search));


    res.json(result);
})

app.listen(8000, () => {
    console.log('Something went wrong')
})