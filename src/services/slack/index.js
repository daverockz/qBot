import axios from 'axios'
import config from './config'

const { slack: { webhook } } = config

export default async question => {
  const { options } = question
  const formatedOptions = formatOptions(options)

  const data = {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: question.question
        },
        accessory: {
          type: 'radio_buttons',
          action_id: 'this_is_an_action_id',
          options: formatedOptions
        }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Submit'
            },
            value: 'click_me_123',
            action_id: 'actionId-0'
          }
        ]
      }
    ],
    type: 'home'
  }
  try {
    return await axios.post(webhook, data)
  } catch (error) {
    console.log('error---', error)
  }
}

export const formatOptions = options => {
  const formatedOptions = []
  options.forEach(option => {
    const tempOption = {
      text: {
        type: 'plan_text',
        text: option,
        emoji: true
      },
      value: option
    }
    formatedOptions.push(tempOption)
  })

  return formatedOptions
}
