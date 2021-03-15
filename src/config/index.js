export default {
  baseUrl: process.env.BASE_URL,
  port: process.env.PORT,
  env: process.env.ENV,
  host: process.env.HOSTNAME,
  slack: {
    webhook: process.env.SLACK_WEBHOOK
  }
}
