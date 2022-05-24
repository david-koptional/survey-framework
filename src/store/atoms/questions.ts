// import { writeFile } from '@tauri-apps/api/fs'
// import { downloadDir } from '@tauri-apps/api/path'
import { atom } from 'jotai'
import { Question } from '../../types'
import { updateAllQuestions } from '../functions/questions'
import { currentSectionAtom } from './section'

export const allQuestionsAtom = atom<Question[]>([])

// Derived getter for allQuestionsAtom
export const sectionQuestionsAtom = atom<Question[]>(get => {
  const { id } = get(currentSectionAtom)
  const questionsToHide: Question[] = []

  const allQuestions = get(allQuestionsAtom).filter(question => question.section === id)

  const optionalQuestions = allQuestions
    .filter(question => question.section === id)
    .filter(question => question.requiresAnswer)
    .flatMap(question => {
      return {
        id: question.id,
        requiresAnswer: question.requiresAnswer,
      }
    })

  if (optionalQuestions) {
    optionalQuestions.forEach(optionalQuestion => {
      optionalQuestion.requiresAnswer?.forEach(dependentQuestion => {
        const questionToHide = allQuestions.find(question => question.id === optionalQuestion.id)

        const question = allQuestions.find(question => question.id === dependentQuestion.id)

        if (!questionToHide) return

        if (question?.value === dependentQuestion.value) return

        questionToHide.value = null

        if (question?.value !== dependentQuestion.value) questionsToHide.push(questionToHide)
      })
    })
  }

  if (!questionsToHide.length) return allQuestions

  return allQuestions.filter(question => !questionsToHide.includes(question))
})

export const allSectionQuestionsAnswered = atom<boolean>(get => {
  const allQuestions = get(sectionQuestionsAtom)

  return allQuestions.every(question => question.value)
})

// Setter for allQuestionsAtom
export const updateAllQuestionsAtom = atom(
  () => '',
  async (get, set, { id, value }) => {
    // const downloadPath = await downloadDir()

    // const path = `${downloadPath}/test.json`

    const updatedQuestions = updateAllQuestions(get(allQuestionsAtom), id, value)

    // await writeFile({ path, contents: JSON.stringify(updatedQuestions) })

    set(allQuestionsAtom, updateAllQuestions(get(allQuestionsAtom), id, value))
  }
)

export const toggleQuestionVisibility = atom(
  () => '',
  (get, set, { id, value }) => {
    set(allQuestionsAtom, updateAllQuestions(get(allQuestionsAtom), id, value))
  }
)
