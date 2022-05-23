import { atom } from 'jotai'
import { checkIfAllQuestionsAnswered, checkIfQuestionSkips, getPreviousQuestions } from '../functions/questions'
import { allQuestionsAtom, sectionQuestionsAtom } from './questions'
import { allSectionsAtom, completedSectionsAtom, currentSectionAtom } from './section'

export const skipAtom = atom<{ skip: boolean; question: any | null; skippingFrom: any | null }>({
  skip: false,
  question: null,
  skippingFrom: null,
})

export const setSkipAtom = atom(
  () => '',
  (get, set, { id, value }) => {
    const allQuestions = get(allQuestionsAtom)

    const question = allQuestions.find(q => q.id === id)

    if (!question)
      return set(skipAtom, {
        skip: false,
        question: null,
        skippingFrom: null,
      })

    const skips = checkIfQuestionSkips(question, value)

    return set(skipAtom, {
      skip: skips,
      question: question.skipsTo?.find(q => q.value === value) ?? null,
      skippingFrom: question,
    })
  }
)

export const confirmSkipAtom = atom(
  () => '',
  (get, set, { id, questionId }) => {
    const allSections = get(allSectionsAtom)

    const section = allSections.find(s => s.id === id)

    const previousQuestions = getPreviousQuestions(get(sectionQuestionsAtom), questionId)

    if (!previousQuestions.length)
      return set(skipAtom, {
        skip: false,
        question: null,
        skippingFrom: null,
      })

    if (!checkIfAllQuestionsAnswered(previousQuestions)) return

    if (!section) return

    set(skipAtom, {
      skip: false,
      question: null,
      skippingFrom: null,
    })
    return set(currentSectionAtom, section)
  }
)

export const progressAtom = atom(get => {
  const totalSectionLength = get(allSectionsAtom).length

  const completedSectionLength = get(completedSectionsAtom).length

  return Math.round((completedSectionLength / totalSectionLength) * 100)
})
