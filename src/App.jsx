import { useState, useEffect } from 'react'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadoPaciente from './Components/ListadoPaciente'

function App() {
  const initialLS = JSON.parse(localStorage.getItem('pacientes')) || []
  const [pacientes, setPacientes] = useState(initialLS)
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (idData) => {
    const nuevosPacientes = pacientes.filter(
      (pacienteToFilter) => pacienteToFilter.id !== idData
    )
    setPacientes(nuevosPacientes)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='md:flex mt-20'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
