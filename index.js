const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefData = require('./data/chef.json')
const recipes = require('./data/recipe.json')
const popularFood =require('./data/popularFood.json')


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

app.get('/popularfood',(req,res) =>{
    res.send(popularFood)
})


// to get specific data 

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    if (id === 0) {
        res.send(recipes)
    }
    else {
        const selectedChef = recipes.filter(n => n.id == id)
        res.send(selectedChef)
    }

})

app.get('/chefdata/:id', (req, res) => {
    const id = req.params.id;
    if (id === 0) {
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

