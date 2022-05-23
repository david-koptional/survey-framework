import { Grid, Spacer, Text, Tooltip } from '@geist-ui/core'
import { QuestionCircle } from '@geist-ui/icons'
import { useAtom } from 'jotai'
import { useIsVisible } from '../../hooks/useIsVisible'
import { useToggleOptional } from '../../hooks/useToggleOptional'
import { allQuestionsAtom } from '../../store/atoms/questions'
import { Question } from '../../types'
import CheckboxControl from './CheckboxControl'
import DateControl from './DateControl'
import NumberControl from './NumberControl'
import PercentControl from './PercentControl'
import RadioControl from './RadioControl'
import YesNoControl from './YesNoControl'

export const FormControl = ({ question }: { question: Question }) => {
  const [allQuestions] = useAtom(allQuestionsAtom)
  const [visible] = useIsVisible(question, allQuestions)
  useToggleOptional(question.id, visible)

  const returnFormControl = () => {
    if (question.type === 'radio') {
      return <RadioControl question={question} />
    }
    if (question.type === 'checkbox') {
      return <CheckboxControl question={question} />
    }
    if (question.type === 'yes/no') {
      return <YesNoControl question={question} />
    }
    if (question.type === 'date') {
      return <DateControl question={question} />
    }
    if (question.type === 'number') {
      return <NumberControl question={question} />
    }
    if (question.type === 'percent') {
      return <PercentControl question={question} />
    }
  }

  return (
    <Grid
      style={{ display: visible ? 'flex' : 'none' }}
      key={question.id}
      direction="column"
      alignItems="center"
      justify="center"
      xs={24}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        {question.extraInfo && (
          <>
            <Tooltip text={question.extraInfo}>
              <QuestionCircle size={16} />
            </Tooltip>

            <Spacer w={0.5} />
          </>
        )}
        <Text b>{question.id}</Text>
        <Spacer w={0.5} />
        <Text my={0}>{question.name}</Text>
      </div>
      <Spacer h={1} />
      <div style={{ width: '100%', display: 'flex' }}>{returnFormControl()}</div>
      <Spacer h={2} />
    </Grid>
  )
}

export default FormControl
