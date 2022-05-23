import { Radio } from '@geist-ui/core'
import { useUpdateQuestions } from '../../hooks/useUpdateQuestions'
import { Question } from '../../types'

export const RadioControl = ({ question }: { question: Question }) => {
  const [value, setValue] = useUpdateQuestions(question)

  return (
    <Radio.Group value={value} onChange={val => setValue(val)} useRow={question.options.length < 4} w="100%">
      {question?.options.map(option => (
        <Radio key={`${question.id}-${option}`} value={option} name={option}>
          {option}
        </Radio>
      ))}
    </Radio.Group>
  )
}

export default RadioControl
