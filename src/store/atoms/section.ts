import { atom } from 'jotai'
import { Section } from '../../types'
import { sectionQuestionsAtom } from './questions'

export const allSectionsAtom = atom<Section[]>([])

export const completedSectionsAtom = atom<Section[]>(get => {
  return get(allSectionsAtom).filter(s => s.completed)
})

export const currentSectionAtom = atom<Section>({
  name: '',
  id: '',
  skipped: false,
  next: null,
})

export const setCurrentSectionAtom = atom(
  () => '',

  (get, set, { id }) => {
    const allSections = get(allSectionsAtom)

    const section = allSections.find(s => s.id === id)

    if (!section) return

    set(currentSectionAtom, section)
  }
)

export const nextSectionAtom = atom(
  () => '',
  (get, set) => {
    const { next } = get(currentSectionAtom)

    if (!next) return

    const nextSection = get(allSectionsAtom).find(section => section.id === next)

    const currentSection = get(currentSectionAtom)

    if (!nextSection) return

    const allSectionQuestions = get(sectionQuestionsAtom)

    const allSectionQuestionsAnswered = allSectionQuestions.every(question => question.value)

    if (!allSectionQuestionsAnswered) return

    set(allSectionsAtom, [
      ...get(allSectionsAtom).map(section => {
        if (section.id === currentSection.id) {
          return {
            ...section,
            completed: true,
          }
        }
        return section
      }),
    ])

    if (next) return set(currentSectionAtom, nextSection)
  }
)
