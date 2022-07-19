import React from 'react'

export const Input = ({styles, event, descrip, tipo, requerido, nameId}) => {
    
  return (
    <div className='conteneInputt'>
        <input id='contInput' className={styles} onKeyDown={event} placeholder={descrip} type={tipo} required={requerido} name={nameId}/>
    </div>
  )
}
