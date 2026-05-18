grammar Tablero;

//----------PARSER------------
programa : TABLERO id LBRACE elemento* RBRACE;

elemento
    : fuente
    | metrica
    | grafico
    | filtro
    | alerta
    ;

fuente
    : FUENTE id TIPO tipo_fuente RUTA cadena SEMICOLON
    ;

tipo_fuente
    : CSV
    | API
    | JSON
    ;

metrica
    : METRICA id EQ agregacion LPAREN campo RPAREN SEMICOLON
    ;

agregacion
    : SUMA
    | PROMEDIO
    | MAXIMO
    | MINIMO
    | CONTAR
    ;

grafico
    : GRAFICO id LBRACE
      TIPO EQ tipo_grafico SEMICOLON
      USAR EQ id SEMICOLON
      RBRACE
    ;

tipo_grafico
    : BARRAS
    | LINEAS
    | TORTA
    | TABLA
    ;

filtro
    : FILTRO campo operador valor SEMICOLON
    ;

operador
    : DOUBLE_EQ
    | EXCLAM_EQ
    | MAYOR
    | MENOR
    | MAYOR_EQ
    | MENOR_EQ
    ;

alerta
    : ALERTA SI id operador valor ENTONCES cadena SEMICOLON
    ;

campo
    : id (DOT id)*
    ;

valor
    : cadena
    | NUMERO
    | booleano
    ;

booleano
    : VERDADERO
    | FALSO
    ;

cadena
    : CADENA
    ;

// Regla auxiliar para permitir palabras clave como nombres/identificadores
id
    : IDENTIFICADOR
    | TABLERO | FUENTE | TIPO | RUTA | METRICA | GRAFICO | USAR | FILTRO | ALERTA | SI | ENTONCES
    | VERDADERO | FALSO | CSV | API | JSON | SUMA | PROMEDIO | MAXIMO | MINIMO | CONTAR
    | BARRAS | LINEAS | TORTA | TABLA
    ;

//----------LEXER------------

TABLERO : 'tablero';
FUENTE : 'fuente';
TIPO : 'tipo';
RUTA : 'ruta';
METRICA : 'metrica';
GRAFICO : 'grafico';
USAR : 'usar';
FILTRO : 'filtro';
ALERTA : 'alerta';
SI : 'si';
ENTONCES : 'entonces';

VERDADERO : 'verdadero';
FALSO : 'falso';

CSV : 'csv';
API : 'api';
JSON : 'json';

SUMA : 'suma';
PROMEDIO : 'promedio';
MAXIMO : 'maximo';
MINIMO : 'minimo';
CONTAR : 'contar';

BARRAS : 'barras';
LINEAS : 'lineas';
TORTA : 'torta';
TABLA : 'tabla';

CADENA : '"' .*? '"';

LBRACE : '{';
RBRACE : '}';
LPAREN : '(';
RPAREN : ')';
SEMICOLON : ';';
COLON : ':';
SLASH : '/';
EQ : '=';
COMMA : ',';
UNDERSCORE : '_';
GUION : '-';
DOT : '.';

DOUBLE_EQ : '==';
EXCLAM_EQ : '!=';
MAYOR_EQ : '>=';
MENOR_EQ : '<=';
MAYOR : '>';
MENOR : '<';

WS : [ \t\r\n]+ -> skip;

IDENTIFICADOR : [a-zA-Z][a-zA-Z0-9_]*;
NUMERO : [0-9]+ ('.' [0-9]+)?;