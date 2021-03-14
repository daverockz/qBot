import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes'
import config from './config'

const { port, host } = config
const app = express()
const defaultPort = port
const defaultHostname = host

app.use(cors())
app.use(bodyParser.json())

app.use(routes)
app.listen(port, () => {
  console.log(`Running on ${defaultHostname}:${defaultPort}`)
})

export default app
