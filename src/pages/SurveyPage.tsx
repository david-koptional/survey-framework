import { Page, Spacer } from '@geist-ui/core'
import QuestionsList from '../components/display/QuestionsList'
import SectionHeader from '../components/display/SectionHeader'
import SkipModal from '../components/display/SkipModal'
import SurveyProgress from '../components/display/SurveyProgress'
import facilitySurvey from '../data/surveys/facility.json'
import { useLoadSurvey } from '../hooks/useLoadSurvey'

const SurveyPage = () => {
  useLoadSurvey(facilitySurvey)

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
