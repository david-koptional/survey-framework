import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { setSkipAtom } from '../store/atoms/global'
import { updateAllQuestionsAtom } from '../store/atoms/questions'
import { Question } from '../types'

export const useUpdateQuestions = (question: Question) => {
  const [value, setValue] = useState<any>(question.value || '')
  const [, updateQuestions] = useAtom(updateAllQuestionsAtom)
  const [, checkForSkip] = useAtom(setSkipAtom)

  useEffect(() => {
    checkForSkip({ id: question.id, value })
    updateQuestions({ id: question.id, value })
  }, [checkForSkip, question.id, updateQuestions, value])

  return [value, setValue]
}
