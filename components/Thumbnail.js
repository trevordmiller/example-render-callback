import React from 'react'
import Toggle from './Toggle'

const Thumbnail = ({src, alt}) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <img
        src={src}
        alt={alt}
        onClick={handleToggleClick}
        style={{
          maxWidth: isOpen ? 1000 : 150
        }}
      />
    )}
  </Toggle>
)

export default Thumbnail
