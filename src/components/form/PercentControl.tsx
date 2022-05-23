import { Input, Spacer, Text } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { updateAllQuestionsAtom } from '../../store/atoms/questions'
import { Question } from '../../types'

export const PercentControl = ({ question }: { question: Question }) => {
  const [, updateQuestions] = useAtom(updateAllQuestionsAtom)
  const [error, setError] = useState(false)

  const letterRegex = /^[a-zA-Z]$/

  const onChange = (value: any) => {
    if (typeof value !== 'number') {
      setError(true)
    }
    updateQuestions({ id: question.id, value })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '1' }}>
      {error && (
        <>
          <Text type="error" small>
            Please enter a number
          </Text>
          <Spacer h={0.5} />
        </>
      )}
      <Spacer h={0.5} />
      <Input
        w="100%"
        htmlType="number"
        type={error ? 'error' : 'default'}
        label="%"
        onChange={e => {
          if (e.target.value.match(letterRegex)) {
            return setError(true)
          }
          setError(false)
          onChange(parseInt(e.target.value))
        }}
      />
    </div>
  )
}

export default PercentControl
