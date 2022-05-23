import { writeFile } from '@tauri-apps/api/fs'
import { downloadDir } from '@tauri-apps/api/path'
import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'
import { allQuestionsAtom } from '../store/atoms/questions'

export const useSaveTestStatus = () => {
  const [allQuestions] = useAtom(allQuestionsAtom)

  const saveTestStatus = useCallback(async () => {
    const downloadPath = await downloadDir()

    const path = `${downloadPath}/test.json`
    await writeFile({ path, contents: JSON.stringify(allQuestions) })
  }, [allQuestions])

  useEffect(() => {
    saveTestStatus()
  }, [saveTestStatus])
}
