export const randomQuestion = questions => {
  const random = Math.floor(Math.random() * questions.length)
  return questions[random]
}
