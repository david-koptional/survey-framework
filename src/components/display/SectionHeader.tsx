import { Text } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { currentSectionAtom } from '../../store/atoms/section'

const SectionHeader = () => {
  const [{ name }] = useAtom(currentSectionAtom)
  return <Text h3>{name}</Text>
}

export default SectionHeader
