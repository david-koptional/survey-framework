import { Radio, Text } from '@geist-ui/core'
import { useUpdateQuestions } from '../../hooks/useUpdateQuestions'
import { Question } from '../../types'

export const RadioControl = ({ question }: { question: Question }) => {
  const [value, setValue] = useUpdateQuestions(question)

  return (
    <Radio.Group value={value} onChange={val => setValue(val)} useRow={question.options.length < 5}>
      {question?.options.map(option => {
        // if (option === 'other') {
        //   return (
        //     <Input
        //       htmlType="text"
        //       placeholder="other"
        //       style={{ background: 'red', padding: 0, margin: 0, border: 'none' }}
        //       onChange={e => setValue(e.target.value)}
        //     />
        //   )
        // }
        return (
          <Radio key={`${question.id}-${option}`} value={option} name={option}>
            <Text font="14px">{option}</Text>
          </Radio>
        )
      })}
    </Radio.Group>
  )
}

export default RadioControl
