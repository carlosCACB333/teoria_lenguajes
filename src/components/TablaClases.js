import React from "react";

const TablaClases = ({ data }) => {
  return (
    <div className="col-xl-4 mx-auto mb-2">
      <div
        className="shadow rounded-5 bg-gradient-gray p-5 table-responsive scroll"
        style={{ maxHeight: "85vh" }}
      >
        <h6>Clases</h6>

        {data.map((valor, index) => (
          <span key={index} className="badge bg-secondary mx-1">
            {"Token: " + valor.token + "   Clase: " + valor.codigo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TablaClases;
