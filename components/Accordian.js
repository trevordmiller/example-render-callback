import React from 'react'
import Toggle from './Toggle'

const Accordian = ({title, details}) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <section>
        <a onClick={handleToggleClick}>
          <h3>
            {`${isOpen ? '-' : '+'} ${title}`}
          </h3>
        </a>
        {isOpen ? details : null}
      </section>
    )}
  </Toggle>
)

export default Accordian
