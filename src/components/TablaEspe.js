import React from "react";

const TablaEspe = ({ data }) => {
  return (
    <div className="col-xl-4 mx-auto mb-2">
      <div
        className="shadow rounded-5 bg-gradient-gray p-5 table-responsive scroll"
        style={{ maxHeight: "85vh" }}
      >
        <h6>Especificaciones</h6>
        <div>
          {data.map((valor, index) => (
            <span key={index} className="badge bg-secondary mx-1">
              {"< " + valor.token + " , ' " + valor.lexema + " '>"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TablaEspe;
