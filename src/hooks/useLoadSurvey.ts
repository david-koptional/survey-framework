import { readTextFile } from '@tauri-apps/api/fs'
import { downloadDir } from '@tauri-apps/api/path'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import { allQuestionsAtom } from '../store/atoms/questions'
import { allSectionsAtom, currentSectionAtom } from '../store/atoms/section'
import { Question } from '../types'

export const useLoadSurvey = (data: any) => {
  const [, setAllQuestions] = useAtom(allQuestionsAtom)

  const [, setAllSections] = useAtom(allSectionsAtom)

  const [, setCurrentSection] = useAtom(currentSectionAtom)

  const [loaded, setLoaded] = useState('')

  const checkForIncompleteTest = useCallback(async () => {
    const downloadPath = await downloadDir()

    const path = `${downloadPath}/test.json`

    const result = await readTextFile(path)

    const parsedResult = await JSON.parse(result)

    setLoaded(parsedResult)
  }, [])

  useEffect(() => {
    // checkForIncompleteTest()
    const combinedQuestions: Question[] = []

    const questions = Object.values(loaded || data).map((s: any) => s.questions)

    questions.forEach(q => combinedQuestions.push(...(q as any)))

    const sections = Object.values(loaded || data).map((section: any) => {
      const { id, name, next } = section
      return { id, name, next }
    })

    setAllQuestions(combinedQuestions)
    setAllSections(sections)
    setCurrentSection(sections[0])
  }, [data, setAllQuestions, setAllSections, setCurrentSection, loaded])
}
