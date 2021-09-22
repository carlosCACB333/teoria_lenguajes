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
  { lexema: "parseFloat", token: "reservada", codigo: "100" },
  { lexema: "break", token: "reservada", codigo: "100" },
  { lexema: "textContent", token: "reservada", codigo: "100" },
  { lexema: "innerHTML", token: "reservada", codigo: "100" },
  { lexema: "document", token: "reservada", codigo: "100" },
  { lexema: "getElementById", token: "reservada", codigo: "100" },
  { lexema: "return", token: "reservada", codigo: "100" },
  { lexema: "continue", token: "reservada", codigo: "100" },
  { lexema: "try", token: "reservada", codigo: "100" },
  { lexema: "catch", token: "reservada", codigo: "100" },
  { lexema: "console", token: "reservada", codigo: "100" },
  { lexema: "log", token: "reservada", codigo: "100" },
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

  { lexema: "(", token: "simbolo", codigo: "1" },
  { lexema: ")", token: "simbolo", codigo: "2" },
  { lexema: "[", token: "simbolo", codigo: "1" },
  { lexema: "]", token: "simbolo", codigo: "2" },
  { lexema: "{", token: "simbolo", codigo: "6" },
  { lexema: "=", token: "simbolo", codigo: "8" },
  { lexema: ";", token: "simbolo", codigo: "5" },
  { lexema: ",", token: "simbolo", codigo: "5" },
  { lexema: ":", token: "simbolo", codigo: "4" },
  { lexema: "}", token: "simbolo", codigo: "7" },
  { lexema: ".", token: "simbolo", codigo: "3" },

  { lexema: "+", token: "operador", codigo: "103" },
  { lexema: "-", token: "operador", codigo: "103" },
  { lexema: "*", token: "operador", codigo: "103" },
  { lexema: "/", token: "operador", codigo: "103" },
  { lexema: "%", token: "operador", codigo: "103" },
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
