grammar tablero;

//----------PARSER------------
programa : TABLERO identificador LBRACE elemento* RBRACE;
elemento : fuente | metrica | grafico | filtro | alerta;
fuente : FUENTE identificador TIPO tipo_fuente RUTA cadena SEMICOLON;
tipo_fuente : CSV | API | JSON;
metrica : METRICA identificador EQ agregacion LPAREN campo RPAREN SEMICOLON;
agregacion : SUMA | PROMEDIO | MAXIMO | MINIMO | CONTAR;
grafico : GRAFICO identificador LBRACE TIPO EQ tipo_grafico SEMICOLON USAR EQ identificador SEMICOLON RBRACE;
tipo_grafico : BARRAS | LINEAS | TORTA | TABLA;
filtro : FILTRO campo operador valor SEMICOLON;
operador : DOUBLE_EQ | EXCLAM_EQ | MAYOR | MENOR | MAYOR_EQ | MENOR_EQ;
alerta : ALERTA SI identificador operador valor ENTONCES cadena SEMICOLON;
campo : identificador (DOT identificador)*;
valor : cadena | numero | booleano;
booleano : VERDADERO | FALSO;
identificador : LETRA (LETRA | DIGITO | UNDERSCORE)*;
cadena : CADENA;   
numero : DIGITO+ (DOT DIGITO+)?;

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
MAYOR : '>';
MENOR : '<';
MAYOR_EQ : '>=';
MENOR_EQ : '<=';

LETRA : [a-zA-Z];
DIGITO : [0-9];
WS : [ \t\r\n]+ -> skip;