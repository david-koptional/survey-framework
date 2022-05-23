import { Progress } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { progressAtom } from '../../store/atoms/global'

const SurveyProgress = () => {
  const [progress] = useAtom(progressAtom)
  return <Progress value={progress} />
}

export default SurveyProgress
