import React, { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const handleClean = () => {
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  const idUnico = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validación de Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return
    }

    setError(false)

    //Objeto Pacientes
    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      nuevoPaciente.id = paciente.id

      const nuevosPacientes = pacientes.map((pacienteIterar) =>
        nuevoPaciente.id === pacienteIterar.id ? nuevoPaciente : pacienteIterar
      )
      setPacientes(nuevosPacientes)
      paciente.id = null
    } else {
      nuevoPaciente.id = idUnico()
      setPacientes([...pacientes, nuevoPaciente])
    }

    handleClean()
  }

  return (
    <div className='md:w-3/5 p-5'>
      <h2 className='font-black text-3xl text-center'>
        Seguimiento Pacientes y
      </h2>
      <p className=' text-xl text-center mt-3 mb-10'>
        Añade Pacientes{' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form
        className='bg-white shadow-md rounded-md py-10 px-5 mb-10 mx-5'
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje='Todos los campos son Obligatorios' />}
        <div className='mb-5'>
          <label
            htmlFor='nombre'
            className='block text-gray-700 uppercase font-bold mb-1'
          >
            Nombre Mascota
          </label>
          <input
            type='text'
            id='nombre'
            value={nombre}
            placeholder='Nombre Mascota'
            className='bg-gray-100 p-2 w-full pl-1 rounded-md border-2 placeholder-indigo-400 outline-none'
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='block text-gray-700 uppercase font-bold mb-1'
          >
            Propietario
          </label>
          <input
            type='text'
            id='propietario'
            value={propietario}
            placeholder='Nombre Propietario'
            className='bg-gray-100 p-2 w-full pl-1 rounded-md border-2 placeholder-indigo-400 outline-none'
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold mb-1'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            placeholder='Correo Propietario'
            className='bg-gray-100 p-2 w-full pl-1 rounded-md border-2 placeholder-indigo-400 outline-none'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='fecha'
            className='block text-gray-700 uppercase font-bold mb-1'
          >
            Fecha de Ingreso
          </label>
          <input
            type='date'
            id='fecha'
            value={fecha}
            className='bg-gray-100 p-2 w-full pl-1 rounded-md border-2 placeholder-indigo-400 outline-none'
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold mb-1'
          >
            Síntomas
          </label>
          <textarea
            id='sintomas'
            placeholder='Escribe los síntomas'
            value={sintomas}
            className='bg-gray-100 p-2 w-full pl-1 rounded-md border-2 placeholder-indigo-400 outline-none'
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          className='bg-indigo-600 py-3 w-2/3 mx-auto block rounded-md text-white uppercase font-bold hover:bg-indigo-700 transition-colors cursor-pointer'
        />
      </form>
    </div>
  )
}

export default Formulario
