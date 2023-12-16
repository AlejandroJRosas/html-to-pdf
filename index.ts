/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { PORT } from './src/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import { convertToPDF } from './src/actions/convert'

// App Declaration
const app = express()

// Settings
app.set('port', PORT !== '' ? PORT : 4000)

// Middlewares
app.use(cors())
app.use(bodyParser.text({ type: 'text/html' }))

// Routes
app.get('/ping', (_req, res) => {
  return res.json({ message: 'galapin' })
})

app.post('/convert', async (req, res) => {
  const pdf = await convertToPDF(req.body)
  return res.set('content-type', 'application/pdf').send(pdf)
})

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
