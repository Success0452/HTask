const express = require('express')
const app = express()

const start = () => {
    const { operation, x, y } = req.body;
    const result = 0;
    if(operation === "+"){
        result = x + y;
    }
    if(operation === "-"){
        result = x - y;
    }
    if(operation === "/"){
        result = x/y
    }
    if(operation === "%"){
        result = x % y
    }
    if(operation === "*"){
        result = x * y;
    }

    res.status(200).json({
        "slackUsername" : "Famous0452",
        "operation_type": operation,
        "result": result
    })
}

app.post('/', (req, res) => {
   start();
})

app.listen(3000);