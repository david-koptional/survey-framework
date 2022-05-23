import { useCallback, useEffect, useState } from 'react'
import { Question } from '../types'

export const useIsVisible = (question: Question, allQuestions: Question[]) => {
  const [visible, setVisible] = useState(true)

  const toggleVisibility = useCallback(() => {
    if (!question.requiresAnswer) return true

    if (question.requiresAnswer) {
      question.requiresAnswer.forEach(req => {
        const reqQuestion = allQuestions.find(q => q.id === req.id)
        if (!reqQuestion?.value) {
          return setVisible(false)
        }
        if (reqQuestion?.value === req.value) {
          return setVisible(true)
        } else {
          return setVisible(false)
        }
      })
    }
    return false
  }, [allQuestions, question])

  useEffect(() => {
    toggleVisibility()
  }, [toggleVisibility])

  return [visible]
}
