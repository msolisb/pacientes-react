import React from 'react'

const Paciente = ({ el, paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = el

  const handleDelete = () => {
    const deletePaciente = confirm(
      `Esta seguro que quiere eliminar el paciente con ID: ${id}`
    )

    if (deletePaciente) {
      eliminarPaciente(id)
    }
  }

  return (
    <>
      <div className='bg-white font-bold shadow-md mb-5 py-6 px-5 rounded-md'>
        <p className='mb-3'>
          Nombre: <span className='font-normal'>{nombre}</span>
        </p>
        <p className='mb-3'>
          Nombre Propietario: <span className='font-normal'>{propietario}</span>
        </p>
        <p className='mb-3'>
          Email: <span className='font-normal'>{email}</span>
        </p>
        <p className='mb-3'>
          Fecha de Alta: <span className='font-normal'>{fecha}</span>
        </p>
        <p>
          Sintomas: <span className='font-normal'>{sintomas}</span>
        </p>
        <div className='flex justify-evenly mt-10'>
          <button
            className='bg-indigo-600 py-2 px-10 text-white font-bold rounded-md hover:bg-indigo-700 transition-colors'
            onClick={() => {
              setPaciente(el)
            }}
          >
            Editar
          </button>
          <button
            className='bg-red-500 py-2 px-10 text-white font-bold rounded-md hover:bg-red-600 transition-colors'
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  )
}

export default Paciente
