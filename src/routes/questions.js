import express from 'express'
import questions from '../services/questions'
import { randomQuestion } from '../util/index'
import postToSlack from '../services/slack'

const routes = express.Router()
routes.post('/', async (req, res) => {
  const getQuestions = questions.filter(question => question.status !== 'sent')
  const questionToSend = randomQuestion(getQuestions)
  const slackRes = await postToSlack(questionToSend)
  console.log('slack res', slackRes)
  return res.json(questionToSend)
})

export default routes
