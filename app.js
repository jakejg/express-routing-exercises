const express = require('express')
const app = express()
const ExpressError = require('./errors')
const { getMean, getMedian, getMode } = require('./statOperations')



app.get('/mean', (req, res, next) => {
    try{
        let numArray = req.query.nums.split(",").map(val => {
            if (val === "") {
                throw new ExpressError('nums are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        })
        respObj = {
            "response": "mean",
            "value": getMean(numArray)
        }
        return res.json(respObj)
    }
    catch(e){
        next(e)
    }
})

app.get('/median', (req, res, next) => {
    try{
        let numArray = req.query.nums.split(",").map(val => {
            if (val === "") {
                throw new ExpressError('nums are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        })
        respObj = {
            "response": "median",
            "value": getMedian(numArray)
        }
        return res.json(respObj)
    }
    catch(e){
        next(e)
    }
})

app.get('/mode', (req, res, next) => {
    try{
        let numArray = req.query.nums.split(",").map(val => {
            if (val === "") {
                throw new ExpressError('nums are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        })
        respObj = {
            "response": "mode",
            "value": getMode(numArray)
        }
        return res.json(respObj)
    }
    catch(e){
        next(e)
    }
})

app.get('/all', (req, res, next) => {
    try{
        let numArray = req.query.nums.split(",").map(val => {
            if (val === "") {
                throw new ExpressError('nums are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        })

        respObj = {
            "operation": "all",
            "mean": getMean(numArray),
            "median": getMedian(numArray),
            "mode": getMode(numArray)
        }
        return res.json(respObj)
    }
    catch(e){
        next(e)
    }
})


app.use((err, req, res, next) => {
    let status = err.status || 500;
    let msg = err.msg;
    return res.status(status).json({
        err
    })
})

app.listen(3000, () =>{
    console.log('Server on port 3000')
})