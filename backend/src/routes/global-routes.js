import express from 'express'
import { helloWorld } from '../controllers/goblas-controller.js'
import { validateRequest } from '../middlewares/validate-request.js'
import { exampleSchema } from '../utils/schema.js'

const globalRoutes = express.Router()

globalRoutes.get('/hello-world', helloWorld)

globalRoutes.post('/test-validate',validateRequest(exampleSchema), async (req, res) =>{
    return res.json({message: 'Succes'})
})

export default globalRoutes