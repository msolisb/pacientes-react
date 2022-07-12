import React from 'react'

const Error = ({ mensaje }) => {
  return (
    <>
      <p className='bg-red-600 text-center font-bold uppercase rounded-md text-white p-3 mb-3'>
        {mensaje}
      </p>
    </>
  )
}

export default Error
