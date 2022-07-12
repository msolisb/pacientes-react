import React from 'react'
import Paciente from './Paciente'

const ListadoPaciente = ({
  pacientes,
  paciente,
  setPaciente,
  eliminarPaciente,
}) => {
  return (
    <div className='md:w-2/3 p-5 md:h-screen md:overflow-y-scroll mx-5'>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center mb-3'>
            Listado de Pacientes
          </h2>
          <p className='text-xl text-center mb-10'>
            Adminsitras tus{' '}
            <span className='text-indigo-600 font-bold'>Pacietes y Citas</span>
          </p>

          {pacientes.map((el) => (
            <Paciente
              el={el}
              key={el.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center mb-3'>
            No hay Pacientes
          </h2>
          <p className='text-xl text-center mb-10'>
            Favor agregar Pacientes{' '}
            <span className='text-indigo-600 font-bold'>
              y se mostrarán aquí
            </span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPaciente
