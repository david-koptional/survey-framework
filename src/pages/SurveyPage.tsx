import { Page, Spacer } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import NextSection from '../components/display/NextSection'
import QuestionsList from '../components/display/QuestionsList'
import SectionHeader from '../components/display/SectionHeader'
import SkipModal from '../components/display/SkipModal'
import SurveyProgress from '../components/display/SurveyProgress'
import facilitySurvey from '../data/surveys/facility.json'
import { allQuestionsAtom } from '../store/atoms/questions'
import { allSectionsAtom, currentSectionAtom } from '../store/atoms/section'
import { Question } from '../types'

const SurveyPage = () => {
  const [, setAllQuestions] = useAtom(allQuestionsAtom)

  const [, setAllSections] = useAtom(allSectionsAtom)

  const [, setCurrentSection] = useAtom(currentSectionAtom)

  useEffect(() => {
    const combinedQuestions: Question[] = []

    const questions = Object.values(facilitySurvey).map(s => s.questions)

    questions.forEach(q => combinedQuestions.push(...(q as any)))

    const sections = Object.values(facilitySurvey).map(section => {
      const { id, name, next } = section
      return { id, name, next }
    })

    setAllQuestions(combinedQuestions)
    setAllSections(sections)
    setCurrentSection(sections[0])
  }, [setAllQuestions, setAllSections, setCurrentSection])

  return (
    <Page>
      <Page.Header>
        <Spacer h={1} />
        <SurveyProgress />
        <Spacer h={1} />
        <SectionHeader />
      </Page.Header>
      <Page.Content>
        <QuestionsList />
        <SkipModal />
      </Page.Content>
    </Page>
  )
}

export default SurveyPage
