import { Button } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { sectionQuestionsAtom } from '../../store/atoms/questions'
import { currentSectionAtom, nextSectionAtom } from '../../store/atoms/section'

const NextSection = () => {
  const navigate = useNavigate()

  const [currentSection] = useAtom(currentSectionAtom)

  const [sectionQuestions] = useAtom(sectionQuestionsAtom)

  const allQuestionsAnswered = useMemo(() => sectionQuestions.every(question => question.value), [sectionQuestions])

  const [, set] = useAtom(nextSectionAtom)

  const handleNext = useCallback(() => {
    if (currentSection.next) {
      return set(`${currentSection?.id ? Number(currentSection.id) + 1 : 1}`)
    }
    return navigate('/results')
  }, [currentSection.id, currentSection.next, set])

  return (
    <Button disabled={!allQuestionsAnswered} onClick={handleNext}>
      {currentSection.next ? 'Next Section' : 'Submit'}
    </Button>
  )
}

export default NextSection
