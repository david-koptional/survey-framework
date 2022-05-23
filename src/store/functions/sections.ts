import { Section, Question } from '../../types'

export const getCompletedSections = (sections: Section[], questions: Question[]) => {
  const completedSections = sections.filter(section => {
    const sectionQuestions = questions.filter(question => question.section === section.id)
    return sectionQuestions.every(question => question.value)
  })

  return completedSections
}
