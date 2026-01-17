const express = require('express');
const app = express();

const ADMIN_TOKEN = "beareaslkhg3wa($%^&KDare"; 

app.get('/user-data', (req, res) => {
    const userToken = req.headers.authorization;

    if (userToken === ADMIN_TOKEN) {
        const userData = { name: "John", password: "John123!@#", ssn: "123-45-678" };
        res.status(200).send(userData); 
    } 
});

app.listen(3000);
