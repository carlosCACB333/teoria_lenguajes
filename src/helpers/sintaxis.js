const lexemas = [
  {
    patron: "import,function,if,...",
    lexema: "import",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "true",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "false",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "function",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "from",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "var",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "let",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "const",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "switch",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "case",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "if",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "else",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "for",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "while",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "break",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "return",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "continue",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "try",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "catch",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "default",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "delete",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "do",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "finally",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "in",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "instanceof",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "new",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "this",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "throw",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "typeof",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "void",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "with",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "class",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "boolean",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "char",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "byte",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "debugger",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "double",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "native",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "null",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "protected",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "get",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "yield",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "super",
    token: "reservada",
    codigo: "100",
  },
  {
    patron: "import,function,if,...",
    lexema: "float",
    token: "reservada",
    codigo: "100",
  },

  { patron: "(", lexema: "(", token: "parentesis_apertura", codigo: "1" },
  { patron: ")", lexema: ")", token: "parantesis_cierre", codigo: "2" },
  { patron: "[", lexema: "[", token: "corchete_aperture", codigo: "3" },
  { patron: "]", lexema: "]", token: "corchete_cierre", codigo: "4" },
  { patron: "{", lexema: "{", token: "llaves_apertura", codigo: "5" },
  { patron: "}", lexema: "}", token: "llaves_cierre", codigo: "6" },
  { patron: ">, <, =, ...", lexema: ".", token: "simbolo", codigo: "200" },
  { patron: ">, <, =, ...", lexema: ":", token: "simbolo", codigo: "200" },
  { patron: ">, <, =, ...", lexema: ";", token: "simbolo", codigo: "200" },
  { patron: ">, <, =, ...", lexema: "=", token: "simbolo", codigo: "200" },
  { patron: ">, <, =, ...", lexema: ",", token: "simbolo", codigo: "200" },
  { patron: ">, <, =, ...", lexema: "<", token: "simbolo", codigo: "200" },
  { patron: ">, <, =, ...", lexema: ">", token: "simbolo", codigo: "200" },
  { patron: "+, -, *, ...", lexema: "+", token: "operador", codigo: "300" },
  { patron: "+, -, *, ...", lexema: "-", token: "operador", codigo: "300" },
  { patron: "+, -, *, ...", lexema: "*", token: "operador", codigo: "300" },
  { patron: "+, -, *, ...", lexema: "/", token: "operador", codigo: "300" },
  { patron: "+, -, *, ...", lexema: "%", token: "operador", codigo: "300" },

  { patron: "&&,||,!", lexema: "&&", token: "operador_logico", codigo: "400" },
  { patron: "&&,||,!", lexema: "||", token: "operador_logico", codigo: "400" },
  { patron: "&&,||,!", lexema: "!", token: "operador_logico", codigo: "400" },
];

let lexemas_encontrados = [];

export const sintaxis = (contenido) => {
  const reg = new RegExp(/\/\*{1,2}[\s\S]*?\*\//g);
  const reg2 = new RegExp(/\/\/[\s\S]*?\n/g);

  contenido = contenido.replace(reg2, "");
  contenido = contenido.replace(reg, "");

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
  let tokens = filtrarRepetido(lexemas_encontrados);
  let tablaSin = contarLexemas(tokens);
  return [tokens, lexemas_encontrados, tablaSin];
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
          patron: "[0-9]",
          lexema: cadena,
          token: "numerico",
          codigo: "500",
        });
      } else if (
        (cadena[0] === "'" && cadena[cadena.length - 1] === "'") ||
        (cadena[0] === '"' && cadena[cadena.length - 1] === '"')
      ) {
        lexemas_encontrados.push({
          patron: "[a-z,'-']",
          lexema: cadena,
          token: "cadena",
          codigo: "600",
        });
      } else if (
        !cadena[0].match(/^[0-9]+$/) ||
        cadena[0] === "_" ||
        cadena[0] === "$"
      ) {
        lexemas_encontrados.push({
          patron: "[a-z]",
          lexema: cadena,
          token: "identificador",
          codigo: "700",
        });
      } else {
        lexemas_encontrados.push({
          patron: "",
          lexema: cadena,
          token: "desconocido",
          codigo: "000",
        });
      }
    }
  }
};

const filtrarRepetido = (array = []) => {
  let miArray = [];
  array.forEach((value) => {
    let bandera = false;
    for (let i = 0; i < miArray.length; i++) {
      if (miArray[i].token === value.token) {
        bandera = true;
      }
    }

    if (!bandera) {
      miArray.push(value);
    }
  });
  return miArray;
};

const contarLexemas = (tokens) => {
  let tablasim = [];
  tokens.forEach((token) => {
    let contador = 0;
    lexemas_encontrados.forEach((lexema) => {
      if (token.token === lexema.token) {
        contador++;
        tablasim.push({ ...token, cantidad: contador });
      }
    });
  });

  return tablasim;
};
