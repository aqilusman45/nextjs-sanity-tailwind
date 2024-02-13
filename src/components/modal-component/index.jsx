import classnames from 'classnames'
import { useEffect } from 'react'

import { hideBodyScroll, showBodyScroll } from '../../utils/helpers'

export default function ModalComponent({
  otherClasses,
  show,
  handleClose,
  children,
  additionalClass,
}) {
  const modalComponentClasses = classnames(
    otherClasses,
    'flex justify-center fixed top-0 left-0 bottom-0 right-0 transition-all duration-500 bg-blue/90 overflow-auto',
    show ? 'opacity-100 z-50 visible' : 'invisible -z-10 opacity-0',
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClick, false)
    return () => {
      document.removeEventListener('keydown', handleEscapeClick, false)
    }
    // eslint-disable-next-line
  }, [])

  const handleEscapeClick = (event) => {
    if (event.keyCode === 27) handleClose()
  }

  useEffect(() => {
    if (show) {
      hideBodyScroll()
    } else {
      showBodyScroll()
    }
  }, [show])

  return (
    <div className={modalComponentClasses} data-testid="modal-component">
      <button
        aria-label="button"
        className={
          'modal-overlay absolute  left-2/4 top-2/4 z-[-1] h-full w-full translate-x-[-50%] translate-y-[-50%] cursor-auto '
        }
        onClick={() => handleClose()}
      />
      <div
        className={classnames(
          'modal-wrapper my-auto h-auto overflow-auto',
          additionalClass,
        )}
      >
        {children}
      </div>
    </div>
  )
}
