import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
//Cors
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


export default app