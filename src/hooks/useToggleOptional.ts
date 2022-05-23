import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'
import { updateAllQuestionsAtom } from '../store/atoms/questions'

export const useToggleOptional = (id: string, visible: boolean) => {
  const [, set] = useAtom(updateAllQuestionsAtom)

  const toggleVisibility = useCallback(() => {
    if (visible) return set({ id: id, value: null })
    if (!visible) return set({ id: id, value: 'optional' })
  }, [id, set, visible])

  useEffect(() => {
    toggleVisibility()
  }, [toggleVisibility])
}
