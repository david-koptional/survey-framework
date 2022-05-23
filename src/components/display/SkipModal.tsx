import { Modal } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { confirmSkipAtom, skipAtom } from '../../store/atoms/global'

const SkipModal = () => {
  const [{ skip, question, skippingFrom }] = useAtom(skipAtom)

  const [, confirmSkip] = useAtom(confirmSkipAtom)

  return (
    <Modal visible={skip} onClose={() => ''}>
      <Modal.Title>Modal</Modal.Title>
      <Modal.Subtitle>This is a modal</Modal.Subtitle>
      <Modal.Content>
        <p>skip to aQuestion {question?.id}? </p>
      </Modal.Content>
      <Modal.Action passive>Cancel</Modal.Action>
      <Modal.Action onClick={() => confirmSkip({ id: question.section, questionId: skippingFrom.id })}>
        Submit
      </Modal.Action>
    </Modal>
  )
}

export default SkipModal
