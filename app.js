const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const start = (req, res) => {
    const { operation, x, y } = req.body;
    let result = 0;
    if(operation === "+"){
        result = x + y;
    }
    if(operation === "-"){
        result = Number(x) - Number(y);
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
   start(req, res);
})

app.listen(3000);