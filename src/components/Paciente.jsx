

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
           
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
    <span className="font-normal normal-case">Hook</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
    <span className="font-normal normal-case">Alexander</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
    <span className="font-normal normal-case">alexander123@gmial.com</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">FEcha alta: {''}
    <span className="font-normal normal-case">10/12/2022</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintmomas: {''}
    <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod laborum nostrum temporibus sapiente consequuntur, blanditiis maxime iusto! Amet molestiae pariatur eum, nam similique quo dignissimos ducimus obcaecati facilis vel nesciunt.</span>
    </p>
</div>
  )
}

export default Paciente