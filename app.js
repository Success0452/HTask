const express = require('express')
const app = express()

app.use('/', (req, res) => {
   return res.json({
        "slackUsername" : "Famous0452",
        "backend": true,
        "age": 24,
        "bio": "an experiened backend developer"
    });
})

app.listen(3000);