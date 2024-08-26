const express = require('express')
const app = express()
const { mean, median, mode } = require('./operation');
const ExpressError = require('./expressError')


app.use(express.json())


// Helper function to convert query parameter to numbers

function convertNums(nums) {
    if (!nums) {
        throw new ExpressError('Nums are required', 400)
    }

    let result = nums.split(',').map(num => {
        let val = Number(num)
        if (isNaN(val)) {
            throw new ExpressError(`${num} is not a number `, 400)
        }
        return val
    })
    return result
}


app.get('/mean', (req, res, next) => {
    try {
        let nums = convertNums(req.query.nums)
        let result = mean(nums)
        return res.json({ response: { operation: "mean", value: result } })
    } catch (err) {
        return next(err)
    }
})

app.get('/median', (req, res, next) => {
    try {
        let nums = convertNums(req.query.nums);
        result = median(nums)
        return res.json({ response: { operation: "median", value: result } })
    } catch (err) {
        return next(err)
    }
})

app.get('/mode', (req, res, next) => {
    try {
        let nums = convertNums(req.query.nums);
        result = mode(nums)
        return res.json({ response: { operation: "mode", value: result } })
    } catch (err) {
        return next(err)
    }
})

app.use((err, req, res, next) => {
    let status = err.status || 500;

    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
})

app.listen(3000, function () {
    console.log('Server running on port 3000');
});

module.exports = app;