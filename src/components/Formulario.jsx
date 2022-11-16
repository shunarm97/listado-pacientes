import {useState, useEffect} from 'react'



const Formulario = () => {
  const [nombre, setNombre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviando formulario')
  }


  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Añade pacientes y {""}
          <span className='text-indigo-600 font-bold'>Administralos</span>  
        </p>
        <form 
              onSubmit={handleSubmit}
              className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          
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
                     />
          </div>


{/* submit*/}
          <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value="Agregar Paciente"
                />


        </form>
    </div>
  )
}

export default Formulario