import React from 'react'
import Toggle from './Toggle'

const Modal = ({teaser, details}) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <div onClick={handleToggleClick}>
        {teaser}
        {isOpen
          ? <div>
              <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
                {details}
              </div>
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.3)',
              }} />
            </div>
          : null
        }
      </div>
    )}
  </Toggle>
)

export default Modal
