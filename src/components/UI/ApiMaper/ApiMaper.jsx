import React from 'react'

export const ApiMaper = ( { gif = [] } ) => {
  return (
    <>
    <div className='contgiphy'>
        {
            gif.map( (item) => (
              <div className='cartGiphy' key={item.images.id}>
                <img src={item.images.downsized.url} alt="giphy" className='imgGiphy' />
              </div>
            ))
        }
    </div>
</>
  )
}
