const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('chef recipe hunter server is ok ')
});

app.listen(port, () => {
console.log(`chef ApI is running on Port:${port}`)
})