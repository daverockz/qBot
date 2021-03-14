import express from 'express'
import questions from '../services/questions'
import { randomQuestion } from '../util/index'

const routes = express.Router()
routes.post('/', async (req, res) => {
  const getQuestions = questions.filter(question => question.status !== 'sent')
  const questionToSend = randomQuestion(getQuestions)

  // send question to slack
  return res.json(questionToSend)
})

export default routes
