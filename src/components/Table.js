import React from "react";

const Table = ({ data }) => {
  return (
    <div className="col-xl-6 mx-auto mb-2">
      <div
        className="shadow rounded-5 bg-gradient-gray p-5 table-responsive scroll"
        style={{ maxHeight: "85vh" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">lexema</th>
              <th scope="col">Token</th>
              <th scope="col">Código</th>
            </tr>
          </thead>
          <tbody>
            {data.map((valor, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{valor.lexema}</td>
                <td>{valor.token}</td>
                <td>{valor.codigo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
