import React from 'react'

const Contents = (props) => {
  return (
    <fieldset>
        <legend>Content.jsx</legend>
        <p>{props.content}</p>
    </fieldset>
  )
}

export default Contents;