import { Button } from '@geist-ui/core'
import { writeFile, BaseDirectory } from '@tauri-apps/api/fs'
import { downloadDir } from '@tauri-apps/api/path'
import { useAtom } from 'jotai'
import { allQuestionsAtom } from '../store/atoms/questions'

const ResultsPage = () => {
  const [allQuestions] = useAtom(allQuestionsAtom)

  const exportResults = async () => {
    const downloadPath = await downloadDir()

    const path = `${downloadPath}/results.json`

    await writeFile({ path, contents: JSON.stringify(allQuestions) })
  }

  return <Button onClick={() => exportResults()}>Get Results</Button>
}

export default ResultsPage
