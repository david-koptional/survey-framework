import { Grid } from '@geist-ui/core'
import GridContainer from '@geist-ui/core/esm/grid/grid-container'
import { useAtom } from 'jotai'
import { sectionQuestionsAtom } from '../../store/atoms/questions'
import FormControl from '../form/FormControl'
import NextSection from './NextSection'

const QuestionsList = () => {
  const [sectionQuestions] = useAtom(sectionQuestionsAtom)

  console.log(sectionQuestions)

  return (
    <GridContainer justify="center" direction="column">
      <Grid xs={24} lg={12} justify="center" direction="column">
        {sectionQuestions.map(q => (
          <FormControl key={q.id} question={q} />
        ))}
      </Grid>
      <Grid xs>
        <NextSection />
      </Grid>
    </GridContainer>
  )
}

export default QuestionsList
