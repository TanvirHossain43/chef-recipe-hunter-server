const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefData = require('./data/chef.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send('chef recipe hunter server is ok ')
});

app.get('/chefdata', (req, res) => {
    res.send(chefData)
});

app.listen(port, () => {
    console.log(`chef ApI is running on Port:${port}`)
})