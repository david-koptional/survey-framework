import { Input } from '@geist-ui/core'
import { useUpdateQuestions } from '../../hooks/useUpdateQuestions'
import { Question } from '../../types'

export const DateControl = ({ question }: { question: Question }) => {
  const [value, setValue] = useUpdateQuestions(question)

  return (
    <Input
      htmlType="date"
      value={value}
      required
      name={question.id}
      onChange={e => setValue(e.target.value)}
      w="100%"
    />
  )
}

export default DateControl
