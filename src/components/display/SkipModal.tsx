import { Modal } from '@geist-ui/core'
import { useAtom } from 'jotai'
import { confirmSkipAtom, skipAtom } from '../../store/atoms/global'

const SkipModal = () => {
  const [{ skip, question, skippingFrom }] = useAtom(skipAtom)

  const [, confirmSkip] = useAtom(confirmSkipAtom)

  return (
    <Modal visible={skip} onClose={() => ''}>
      <Modal.Title font="18px">You are about to skip to another Question</Modal.Title>
      <Modal.Content>
        <p>skip to question {question?.id}? </p>
      </Modal.Content>
      <Modal.Action passive>Cancel</Modal.Action>
      <Modal.Action onClick={() => confirmSkip({ id: question.section, questionId: skippingFrom.id })}>
        Submit
      </Modal.Action>
    </Modal>
  )
}

export default SkipModal
