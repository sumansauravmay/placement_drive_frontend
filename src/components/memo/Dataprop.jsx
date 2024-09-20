import React from 'react'

const Dataprop = ({name}) => {
  return (
    <div>
      My name is {name}
    </div>
  )
}

export default React.memo(Dataprop);
