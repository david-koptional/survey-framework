import { Progress, Spacer, Text } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { progressAtom } from '../../store/atoms/global'

const SurveyProgress = () => {
  const [progress] = useAtom(progressAtom)
  return (
    <div>
      <Progress color="red" value={progress} />
      <Spacer h={0.25} />
      <Text small>{progress}%</Text>
    </div>
  )
}

export default SurveyProgress
