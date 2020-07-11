const boot = () => {
    const express = require('express')
    const cors = require('cors')
    const bodyParser = require('body-parser');
    const app = express()
    const port = 7845

    app.use(cors())
    app.use(bodyParser.json());

    app.post('/api/set-language', (req, res) => {
        const key = req.body.language

        require('../lib/set-language')({
            key: key
        })

        res.send({
            status: 'ok'
        })
    })

    app.listen(port, () => console.log(`P3X Redis UI listening at http://localhost:${port}`))
}

module.exports = boot
