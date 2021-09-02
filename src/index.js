const express = require('express')

const app = express()

app.use(express.json())

const allClass = ['Class 1', 'Class 2']

app.get('/class', (req, res) => {
    return res.json(allClass)
})

app.get('/class/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    return res.status(200).json({
        message: `Chosen Class: ${id}`
    })
})

app.post('/class', (req, res) => {
    const bodyParams = req.body
    console.log(bodyParams)
    return res.status(200).json([
        bodyParams
    ])
})

app.put('/class/:id', (req, res) => {
    const { id } = req.params
    const { name, semester } = req.body
    return res.status(200).json({
        message: `Changes on Class ${id} listed below`,
        changes: {
            name: name,
            semester: semester
        }
    })
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})