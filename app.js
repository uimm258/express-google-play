const express = require('express');
const morgan = require('morgan');



const playData = require('./playData');
const app = express();


app.use(morgan('common'));

app.get('/apps', (req, res) => {
    const{search = ''} = req.query;

    let data = playData.filter(apps => apps.App.includes(search.toLowerCase()));


    res.json(data);
})

app.listen(8000, () => {
    console.log('Something went wrong')
})