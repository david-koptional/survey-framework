import { useAtom } from 'jotai'
import { allQuestionsAtom } from '../store/atoms/questions'

const ResultsPage = () => {
  const [allQuestions] = useAtom(allQuestionsAtom)

  return <>{JSON.stringify(allQuestions)}</>
}

export default ResultsPage
