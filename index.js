const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefData = require('./data/chef.json')
const recipes = require('./data/recipe.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send('chef recipe hunter server is ok ')
});

app.get('/chefdata', (req, res) => {
    res.send(chefData)
});

app.get('/chef', (req, res) => {
    res.send(recipes)
})


// to get specific data 

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedChef = recipes.find(n => n.id == id)
    res.send(selectedChef)
})


// app.get('/chefdata/:id',(req,res)=>{
//     const id = req.params.id;
//     console.log(id);
//     const job = chefData.find(n => n.id == id)
//     res.send(job)
// })

app.get('/chefdata/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(chefData)
    }
    else {
        const chefDetails = chefData.filter(n => n.id == id)
        res.send(chefDetails)
    }
})

app.listen(port, () => {
    console.log(`chef ApI is running on Port:${port}`)
})

