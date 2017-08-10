const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}))

app.use(webpackHotMiddleware(compiler))
// serve our static stuff like index.css
app.use('/dist', express.static(__dirname + '/dist', { redirect: false }))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, (err) => {
  if (err) {
    return console.error(err) // eslint-disable-line no-console
  }
  console.log('Listening at http://localhost:8080') // eslint-disable-line no-console
})
