import React from "react";

const ReservationDetails = ({ formData }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content bg-bg-info">
        <h1>Detalles de la Reserva</h1>
        {formData ? (
          <>
            <p>
              <strong>Nombre:</strong> {formData.name}
            </p>
            <p>
              <strong>Apellido:</strong> {formData.lastName}
            </p>

            <p>
              <strong>Email:</strong> {formData.email}
            </p>

            {/* Otros detalles de la reserva */}
          </>
        ) : (
          <p>No se encontraron detalles para esta reserva</p>
        )}
      </div>
    </div>
  );
};

export default ReservationDetails;
