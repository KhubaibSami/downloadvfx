import React from 'react'
import human from '../../assets/human.png'
import Text from './text'

const Different = () => {
  return (
    <> 
     <div className="mt-44">
      <img src={human} alt="" className='absolute  -z-10 bg-cover bg-center object-cover'/>
      <Text />
     </div>
    </>
  )
}

export default Different