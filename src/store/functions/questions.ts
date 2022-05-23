import { Question } from '../../types'

export const getQuestionById = (questions: Question[], id: string): Question | undefined => {
  return questions.find(question => question.id === id)
}

export const getQuestionByIndex = (questions: Question[], index: number): Question | undefined => {
  return questions[index]
}

export const checkIfQuestionSkips = (question: Question, value: any): boolean => {
  if (!question.skipsTo) return false
  if (question?.skipsTo?.length === 0) return false
  const skips = question.skipsTo.find(skip => skip.value === value)
  if (!skips) return false

  return true
}

export const checkIfQuestionRequiresAnswer = (question: Question): boolean => {
  return !!(question.requiresAnswer && question.requiresAnswer.length)
}

export const getPreviousQuestions = (questions: Question[], id: string): Question[] => {
  const index = questions.findIndex(question => question.id === id)

  console.log(index, id)

  return questions.slice(0, index)
}

export const updateQuestion = (questions: Question[], id: string, value: any): Question | undefined => {
  const question = questions.find(question => question.id === id)

  if (!question) return question

  const updatedQuestion = { ...question, value }

  return updatedQuestion
}

export const updateAllQuestions = (questions: Question[], id: string, value: any): Question[] => {
  const updatedQuestion = updateQuestion(questions, id, value)

  if (!updatedQuestion) return questions

  return questions.map(question => {
    if (question.id === id) {
      return updatedQuestion
    }

    return question
  })
}

export const checkIfAllQuestionsAnswered = (questions: Question[]): boolean => {
  return questions.every(question => question.value)
}

export const checkIfAllQuestionsInSectionAnswered = (questions: Question[], section?: Question['section']): boolean => {
  if (!questions) return false
  if (!section) return false

  return questions.every(question => question.value && question.section === section)
}
