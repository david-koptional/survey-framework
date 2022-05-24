import { Page, Spacer } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import NavigateSections from '../components/display/NavigateSections'
import QuestionsList from '../components/display/QuestionsList'
import SectionHeader from '../components/display/SectionHeader'
import SkipModal from '../components/display/SkipModal'
import SurveyProgress from '../components/display/SurveyProgress'
import facilitySurvey from '../data/surveys/facility.json'
import residentSurvey from '../data/surveys/resident.json'
import { useLoadSurvey } from '../hooks/useLoadSurvey'
import { currentSectionAtom } from '../store/atoms/section'

const SurveyPage = ({ survey }: { survey: 'resident' | 'facility' }) => {
  useLoadSurvey(survey === 'facility' ? facilitySurvey : residentSurvey)

  const [currentSection] = useAtom(currentSectionAtom)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentSection])

  return (
    <Page>
      <Page.Header>
        <Spacer h={1} />
        <SurveyProgress />
        <Spacer h={1} />
        <NavigateSections />
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
