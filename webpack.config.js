const path = require('path')
const plugin1 = require('./hello-plugin/plugin1')
const plugin2 = require('./hello-plugin/plugin2')
const plugin3 = require('./hello-plugin/plugin3')
const plugin4 = require('./hello-plugin/plugin4')
module.exports = {
    mode:'development',
    plugins:[
        new plugin1({
            words:'Plugin1！'
        }),
        new plugin2({
            words:'Plugin2！'
        }),
        new plugin3({
            words:'Plugin3！'
        }),
        new plugin4({
            words:'Plugin4！'
        })
    ]
}