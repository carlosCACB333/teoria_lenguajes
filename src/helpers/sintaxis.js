const lexemas = [
  { lexema: "function", token: "reservada", codigo: "100" },
  { lexema: "import", token: "reservada", codigo: "100" },
  { lexema: "from", token: "reservada", codigo: "100" },
  { lexema: "var", token: "reservada", codigo: "100" },
  { lexema: "let", token: "reservada", codigo: "100" },
  { lexema: "const", token: "reservada", codigo: "100" },
  { lexema: "switch", token: "reservada", codigo: "100" },
  { lexema: "case", token: "reservada", codigo: "100" },
  { lexema: "if", token: "reservada", codigo: "100" },
  { lexema: "else", token: "reservada", codigo: "100" },
  { lexema: "for", token: "reservada", codigo: "100" },
  { lexema: "while", token: "reservada", codigo: "100" },
  { lexema: "break", token: "reservada", codigo: "100" },
  { lexema: "return", token: "reservada", codigo: "100" },
  { lexema: "continue", token: "reservada", codigo: "100" },
  { lexema: "try", token: "reservada", codigo: "100" },
  { lexema: "catch", token: "reservada", codigo: "100" },
  { lexema: "default", token: "reservada", codigo: "100" },
  { lexema: "delete", token: "reservada", codigo: "100" },
  { lexema: "do", token: "reservada", codigo: "100" },
  { lexema: "finally", token: "reservada", codigo: "100" },
  { lexema: "in", token: "reservada", codigo: "100" },
  { lexema: "instanceof", token: "reservada", codigo: "100" },
  { lexema: "new", token: "reservada", codigo: "100" },
  { lexema: "this", token: "reservada", codigo: "100" },
  { lexema: "throw", token: "reservada", codigo: "100" },
  { lexema: "typeof", token: "reservada", codigo: "100" },
  { lexema: "void", token: "reservada", codigo: "100" },
  { lexema: "with", token: "reservada", codigo: "100" },
  { lexema: "class", token: "reservada", codigo: "100" },
  { lexema: "boolean", token: "reservada", codigo: "100" },
  { lexema: "char", token: "reservada", codigo: "100" },
  { lexema: "byte", token: "reservada", codigo: "100" },
  { lexema: "debugger", token: "reservada", codigo: "100" },
  { lexema: "double", token: "reservada", codigo: "100" },
  { lexema: "native", token: "reservada", codigo: "100" },
  { lexema: "null", token: "reservada", codigo: "100" },
  { lexema: "protected", token: "reservada", codigo: "100" },
  { lexema: "get", token: "reservada", codigo: "100" },
  { lexema: "yield", token: "reservada", codigo: "100" },
  { lexema: "super", token: "reservada", codigo: "100" },
  { lexema: "float", token: "reservada", codigo: "100" },

  { lexema: "(", token: "parentesis_apertura", codigo: "1" },
  { lexema: ")", token: "parantesis_cierre", codigo: "2" },
  { lexema: ".", token: "simbolo", codigo: "3" },
  { lexema: ":", token: "simbolo", codigo: "4" },
  { lexema: ";", token: "simbolo", codigo: "5" },
  { lexema: "{", token: "llaves_apertura", codigo: "6" },
  { lexema: "}", token: "llaves_cierre", codigo: "7" },
  { lexema: "=", token: "simbolo", codigo: "8" },
  { lexema: "[", token: "corchete_aperture", codigo: "9" },
  { lexema: "]", token: "corchete_cierre", codigo: "10" },
  { lexema: ",", token: "simbolo", codigo: "11" },
  { lexema: "<", token: "simbolo", codigo: "12" },
  { lexema: ">", token: "simbolo", codigo: "13" },

  { lexema: "+", token: "operador", codigo: "103" },
  { lexema: "-", token: "operador", codigo: "103" },
  { lexema: "*", token: "operador", codigo: "103" },
  { lexema: "/", token: "operador", codigo: "103" },
  { lexema: "%", token: "operador", codigo: "103" },

  { lexema: "&&", token: "operador_logico", codigo: "104" },
  { lexema: "||", token: "operador_logico", codigo: "104" },
  { lexema: "!", token: "operador_logico", codigo: "104" },
];

let lexemas_encontrados = [];

export const sintaxis = (contenido) => {
  lexemas_encontrados = [];
  let cadena = "";
  for (let i = 0; i < contenido.length; i++) {
    if (
      contenido[i] === " " ||
      contenido[i] === "(" ||
      contenido[i] === ")" ||
      contenido[i] === "[" ||
      contenido[i] === "]" ||
      contenido[i] === "{" ||
      contenido[i] === "}" ||
      contenido[i] === "=" ||
      contenido[i] === ";" ||
      contenido[i] === "," ||
      contenido[i] === ":" ||
      contenido[i] === "." ||
      contenido[i] === "+" ||
      contenido[i] === "-" ||
      contenido[i] === "*" ||
      contenido[i] === "/"
    ) {
      buscar(cadena);
      cadena = "";
      if (contenido[i] !== " ") {
        buscar(contenido[i]);
      }
    } else {
      cadena += contenido[i];
    }
  }

  return lexemas_encontrados;
};

const buscar = (cadena) => {
  cadena = cadena.replace("\\s", "");
  cadena = cadena.trim();
  let existe = false;
  lexemas.forEach((value) => {
    if (value.lexema === cadena) {
      existe = true;
      lexemas_encontrados.push(value);
      return;
    }
  });
  if (!existe) {
    if (cadena.trim()) {
      if (cadena.match(/^[0-9]+$/)) {
        lexemas_encontrados.push({
          lexema: cadena,
          token: "numerico",
          codigo: "102",
        });
      } else if (
        (cadena[0] === "'" && cadena[cadena.length - 1] === "'") ||
        (cadena[0] === '"' && cadena[cadena.length - 1] === '"')
      ) {
        lexemas_encontrados.push({
          lexema: cadena,
          token: "cadena",
          codigo: "102",
        });
      } else if (
        !cadena[0].match(/^[0-9]+$/) ||
        cadena[0] === "_" ||
        cadena[0] === "$"
      ) {
        lexemas_encontrados.push({
          lexema: cadena,
          token: "identificador",
          codigo: "101",
        });
      } else {
        lexemas_encontrados.push({
          lexema: cadena,
          token: "desconocido",
          codigo: "000",
        });
      }
    }
  }
};
