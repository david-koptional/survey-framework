import { Radio, Text } from '@geist-ui/core'
import { useUpdateQuestions } from '../../hooks/useUpdateQuestions'
import { Question } from '../../types'

export const YesNoControl = ({ question }: { question: Question }) => {
  const [value, setValue] = useUpdateQuestions(question)

  return (
    <Radio.Group value={value} onChange={val => setValue(val)} useRow>
      <Radio value="yes" name={'Yes'}>
        <Text font="14px">Yes</Text>
      </Radio>
      <Radio value="no" name={'No'}>
        <Text font="14px">No</Text>
      </Radio>
    </Radio.Group>
  )
}

export default YesNoControl
