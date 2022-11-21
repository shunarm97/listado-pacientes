import {useState, useEffect} from 'react'
import Error from './Error'


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sinotomas, setSintomas] = useState('')
  
  const [error, setError] = useState(false)
  

useEffect(()=> {
  if(Object.keys(paciente).length > 0) {
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sinotomas)
  } 
},[paciente])



  const generarid = () => {
    const randon = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return randon + fecha
  }
  const handleSubmit = (e) => {
    e.preventDefault()


    //*validacion del Formulario
    if([nombre, propietario, email, fecha, sinotomas].includes('')) {
      setError(true)
      return
    } 
    setError(false)


    //*Objeto de pacientes
    
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sinotomas,
    }

    if(paciente.id) {
      //* editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActulizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActulizados)
      setPaciente({})
    
    } else {
      //* nuevo registro
      objetoPaciente.id = generarid()
      setPacientes([...pacientes, objetoPaciente])
    }
    
    
    //* reinicio de form
    setNombre('')
    setEmail('')
    setFecha('')
    setPropietario('')
    setSintomas('')
  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Añade pacientes y {""}
          <span className='text-indigo-600 font-bold'>Administralos</span>  
        </p>
        <form 
              onSubmit={handleSubmit}
              className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          {error && <Error> <p>todos los campos son obligatorios</p></Error>}
{/* Nombre de la Mascota */}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="mascota">
              Nombre de la Mascota</label>
            <input type="text"
                    id='mascota'
                    placeholder='Nombre de la mascota'
                    className="border-2, w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
          </div>

{/* Propietario de la Mascota*/}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="propietario">
              Propietario de la Mascota</label>
            <input type="text"
                    id='propietario'
                    placeholder='Propietario de la mascota'
                    className="border-2, w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
          </div>

{/* Email propietario */}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="email">
              Email propietario</label>
            <input type="email"
                    id='email'
                    placeholder='Email Propietario'
                    className="border-2, w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   />
          </div>

{/*Fecha de Alta*/}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="alta">
              Fecha de Alta</label>
            <input type="date"
                    id='alta'
                    className="border-2, w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                   />
          </div>

{/* Sintomas*/}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="sintomas">
              sintomas</label>
            <textarea 
                     id="sintomas"
                     className="border-2, w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     placeholder="Describe los sintomas"
                     value={sinotomas}
                     onChange={(e) => setSintomas(e.target.value)}
                     />
          </div>


{/* submit*/}
          <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value={paciente.id ? 'editar paciente' : 'agregar paciente'}
                />


        </form>
    </div>
  )
}

export default Formulario