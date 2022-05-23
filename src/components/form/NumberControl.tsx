import { Input, Spacer, Text } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { updateAllQuestionsAtom } from '../../store/atoms/questions'
import { Question } from '../../types'

export const NumberControl = ({ question }: { question: Question }) => {
  const [, updateQuestions] = useAtom(updateAllQuestionsAtom)
  const [error, setError] = useState(false)

  const letterRegex = /^[a-zA-Z]$/

  const onChange = (value: any) => {
    updateQuestions({ id: question.id, value })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {error && (
        <>
          <Text type="error" small>
            Please enter a number
          </Text>
          <Spacer h={0.5} />
        </>
      )}
      <Input
        type={error ? 'error' : 'default'}
        w="100%"
        name={question.id}
        value={question.value || ''}
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

export default NumberControl
