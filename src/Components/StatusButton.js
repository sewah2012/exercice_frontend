import './Styles/StatusButton.css'
import React from 'react'

const StatusButton = ({ status }) => {
  return (
    <div>
      {status === 'En validation' ? (
        <div className="statusButton onValidation">En Validation</div>
      ) : status === 'Validé' ? (
        <div className="statusButton valide"> Validé </div>
      ) : (
        <div className="statusButton rejected">Rejeté </div>
      )}
    </div>
  )
}

export default StatusButton
