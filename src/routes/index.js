import express from 'express'
import config from '../config'
import questions from './questions'

const { baseUrl } = config

const router = express.Router()

router.use(`${baseUrl}/questions`, questions)

export default router
