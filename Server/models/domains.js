const {Schema, model} = require('mongoose')

const domains = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = model('Domains', domains)
