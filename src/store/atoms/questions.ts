import { writeFile } from '@tauri-apps/api/fs'
import { downloadDir } from '@tauri-apps/api/path'
import { atom } from 'jotai'
import { Question } from '../../types'
import { updateAllQuestions } from '../functions/questions'
import { currentSectionAtom } from './section'

export const allQuestionsAtom = atom<Question[]>([])

// Derived getter for allQuestionsAtom
export const sectionQuestionsAtom = atom<Question[]>(get => {
  const { id } = get(currentSectionAtom)

  return get(allQuestionsAtom).filter(question => question.section === id)
})

export const allSectionQuestionsAnswered = atom<boolean>(get => {
  const allQuestions = get(sectionQuestionsAtom)

  return allQuestions.every(question => question.value)
})

// Setter for allQuestionsAtom
export const updateAllQuestionsAtom = atom(
  () => '',
  async (get, set, { id, value }) => {
    const downloadPath = await downloadDir()

    const path = `${downloadPath}/test.json`

    const updatedQuestions = updateAllQuestions(get(allQuestionsAtom), id, value)

    await writeFile({ path, contents: JSON.stringify(updatedQuestions) })

    set(allQuestionsAtom, updateAllQuestions(get(allQuestionsAtom), id, value))
  }
)

export const toggleQuestionVisibility = atom(
  () => '',
  (get, set, { id, value }) => {
    set(allQuestionsAtom, updateAllQuestions(get(allQuestionsAtom), id, value))
  }
)
