import { Divider, Spacer, Tabs, Text } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { completedSectionsAtom, setCurrentSectionAtom } from '../../store/atoms/section'

const NavigateSections = () => {
  const [completedSections] = useAtom(completedSectionsAtom)

  const [, setCurrentSection] = useAtom(setCurrentSectionAtom)

  return (
    <>
      <Spacer h={2} />
      <Text b>Completed Sections:</Text>
      <Divider />
      <Tabs leftSpace={0} hoverWidthRatio={1} onChange={val => setCurrentSection({ id: val })}>
        {completedSections?.map(section => (
          <Tabs.Item value={section.id} label={section.name} key={section.id}>
            {section.name}
          </Tabs.Item>
        ))}
      </Tabs>
    </>
  )
}

export default NavigateSections
