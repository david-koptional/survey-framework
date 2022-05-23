import { atom } from 'jotai'
import { Section } from '../../types'
import { getCompletedSections } from '../functions/sections'
import { allQuestionsAtom, sectionQuestionsAtom } from './questions'

export const allSectionsAtom = atom<Section[]>([])

export const completedSectionsAtom = atom<Section[]>(get => {
  const allSections = get(allSectionsAtom)

  return getCompletedSections(allSections, get(allQuestionsAtom))
})

export const currentSectionAtom = atom<Section>({
  name: '',
  id: '',
  skipped: false,
  next: null,
})

export const nextSectionAtom = atom(
  () => '',
  (get, set) => {
    const { next } = get(currentSectionAtom)

    if (!next) return

    const nextSection = get(allSectionsAtom).find(section => section.id === next)

    if (!nextSection) return

    const allSectionQuestions = get(sectionQuestionsAtom)

    const allSectionQuestionsAnswered = allSectionQuestions.every(question => question.value)

    if (!allSectionQuestionsAnswered) return

    if (next) return set(currentSectionAtom, nextSection)
  }
)
