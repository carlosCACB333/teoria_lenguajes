import React, { useState } from "react";
import Input from "../components/formControl/Input";
import TextArea from "../components/formControl/TextArea";
import Table from "../components/Table";
import { sintaxis } from "../helpers/sintaxis";

const Sintaxis = () => {
  const [contenido, setContenido] = useState(null);
  const [lexemas, setLexemas] = useState([]);
  const handleChange = (e) => {
    let archivo = e.target.files[0];
    if (archivo) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let cont = e.target.result;
        setContenido(cont);
      };

      reader.readAsText(archivo);
    }
  };

  const handleChangeArea = (e) => {
    setContenido(e.target.value);
  };

  const handleCalculate = () => {
    if (contenido) {
      let lex = sintaxis(contenido);
      setLexemas(lex);
    }
  };
  return (
    <div className="mx-3">
      <div className="row ">
        <div className="col-xl-6 mx-auto ">
          <div className=" shadow rounded-5 bg-gradient-gray p-5 ">
            <h1>Simulador de análisis sintáctico </h1>
            <div className="mb-2">
              <Input
                attr={{ name: "archivo", type: "file", accept: ".js" }}
                label="Seleccione un archivo js"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <TextArea
                attr={{
                  name: "contenido",
                  rows: 10,
                  placeholder: "Ingrese el programa aquí",
                  value: contenido || "",
                }}
                label="Codigo fuente en javaScript"
                onChange={handleChangeArea}
              />
            </div>
            <div className="m-2">
              <button className="btn btn-primary" onClick={handleCalculate}>
                Analizar programa
              </button>
            </div>
          </div>
        </div>

        {lexemas.length > 0 && <Table data={lexemas} />}
      </div>
    </div>
  );
};

export default Sintaxis;
