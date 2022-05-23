import { Checkbox } from '@geist-ui/core'
import { useUpdateQuestions } from '../../hooks/useUpdateQuestions'
import { Question } from '../../types'

export const CheckboxControl = ({ question }: { question: Question }) => {
  const [value, setValue] = useUpdateQuestions(question)

  return (
    <Checkbox.Group value={value} onChange={val => setValue(val)}>
      {question?.options.map(option => (
        <Checkbox key={`${question.id}-${option}`} value={option} name={option}>
          {option}
        </Checkbox>
      ))}
    </Checkbox.Group>
  )
}

export default CheckboxControl
