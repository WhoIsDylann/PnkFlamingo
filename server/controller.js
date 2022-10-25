const path = require('path')

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.js'))
    }

}