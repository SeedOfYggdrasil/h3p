const express = require('express')
const path = require('path')
const config = require('../config/config')

const serveStaticFiles = (app) => {
    if (config.NODE_ENV !== 'production') {
        app.use(express.static(path.join(__dirname, "..", "..", "..", "client", "dist")
        ))
    }

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "..", "client", "dist", "index.html"), {
            cacheControl: true,
        })
    })
}

module.exports = serveStaticFiles;