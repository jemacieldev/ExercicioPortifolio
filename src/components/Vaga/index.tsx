import React from 'react'

interface VagaProps {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga: React.FC<VagaProps> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{localizacao}</p>
      <p>{nivel}</p>
      <p>{modalidade}</p>
      <p>
        R${salarioMin} - R${salarioMax}
      </p>
      <ul>
        {requisitos.map((requisito, index) => (
          <li key={index}>{requisito}</li>
        ))}
      </ul>
    </div>
  )
}

export default Vaga
