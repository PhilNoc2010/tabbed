import React from 'react'

const Tabs = (props) => {
    //lift content associated with selected Tab and push to Contents.jsx
    const handleContent = (e, tab) =>{
        e.preventDefault()
        //lift selected content up to app.js
        props.liftContent(tab.content)

    }

  return (
    <fieldset>
        <legend>Tabs.jsx</legend>
        <div className='tabrow'>
            {props.tabs.map((tab, i) => {
                return <div key={i} className='tab' onClick={(e) => handleContent(e, tab)}> Tab {i+1}</div>
            })}
        </div>
    </fieldset>
  )
}

export default Tabs;
