// Generated from tablero.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import tableroListener from './tableroListener.js';
import tableroVisitor from './tableroVisitor.js';

const serializedATN = [4,1,47,143,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,0,5,0,39,8,0,10,0,
12,0,42,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,
8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,5,
11,109,8,11,10,11,12,11,112,9,11,1,12,1,12,1,12,3,12,117,8,12,1,13,1,13,
1,14,1,14,5,14,123,8,14,10,14,12,14,126,9,14,1,15,1,15,1,16,4,16,131,8,16,
11,16,12,16,132,1,16,1,16,4,16,137,8,16,11,16,12,16,138,3,16,141,8,16,1,
16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,6,1,0,14,16,1,
0,17,21,1,0,22,25,1,0,39,44,1,0,12,13,2,0,36,36,45,46,137,0,34,1,0,0,0,2,
50,1,0,0,0,4,52,1,0,0,0,6,60,1,0,0,0,8,62,1,0,0,0,10,71,1,0,0,0,12,73,1,
0,0,0,14,86,1,0,0,0,16,88,1,0,0,0,18,94,1,0,0,0,20,96,1,0,0,0,22,105,1,0,
0,0,24,116,1,0,0,0,26,118,1,0,0,0,28,120,1,0,0,0,30,127,1,0,0,0,32,130,1,
0,0,0,34,35,5,1,0,0,35,36,3,28,14,0,36,40,5,27,0,0,37,39,3,2,1,0,38,37,1,
0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,40,1,0,
0,0,43,44,5,28,0,0,44,1,1,0,0,0,45,51,3,4,2,0,46,51,3,8,4,0,47,51,3,12,6,
0,48,51,3,16,8,0,49,51,3,20,10,0,50,45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,
0,50,48,1,0,0,0,50,49,1,0,0,0,51,3,1,0,0,0,52,53,5,2,0,0,53,54,3,28,14,0,
54,55,5,3,0,0,55,56,3,6,3,0,56,57,5,4,0,0,57,58,3,30,15,0,58,59,5,31,0,0,
59,5,1,0,0,0,60,61,7,0,0,0,61,7,1,0,0,0,62,63,5,5,0,0,63,64,3,28,14,0,64,
65,5,34,0,0,65,66,3,10,5,0,66,67,5,29,0,0,67,68,3,22,11,0,68,69,5,30,0,0,
69,70,5,31,0,0,70,9,1,0,0,0,71,72,7,1,0,0,72,11,1,0,0,0,73,74,5,6,0,0,74,
75,3,28,14,0,75,76,5,27,0,0,76,77,5,3,0,0,77,78,5,34,0,0,78,79,3,14,7,0,
79,80,5,31,0,0,80,81,5,7,0,0,81,82,5,34,0,0,82,83,3,28,14,0,83,84,5,31,0,
0,84,85,5,28,0,0,85,13,1,0,0,0,86,87,7,2,0,0,87,15,1,0,0,0,88,89,5,8,0,0,
89,90,3,22,11,0,90,91,3,18,9,0,91,92,3,24,12,0,92,93,5,31,0,0,93,17,1,0,
0,0,94,95,7,3,0,0,95,19,1,0,0,0,96,97,5,9,0,0,97,98,5,10,0,0,98,99,3,28,
14,0,99,100,3,18,9,0,100,101,3,24,12,0,101,102,5,11,0,0,102,103,3,30,15,
0,103,104,5,31,0,0,104,21,1,0,0,0,105,110,3,28,14,0,106,107,5,38,0,0,107,
109,3,28,14,0,108,106,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,
0,0,0,111,23,1,0,0,0,112,110,1,0,0,0,113,117,3,30,15,0,114,117,3,32,16,0,
115,117,3,26,13,0,116,113,1,0,0,0,116,114,1,0,0,0,116,115,1,0,0,0,117,25,
1,0,0,0,118,119,7,4,0,0,119,27,1,0,0,0,120,124,5,45,0,0,121,123,7,5,0,0,
122,121,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,29,1,
0,0,0,126,124,1,0,0,0,127,128,5,26,0,0,128,31,1,0,0,0,129,131,5,46,0,0,130,
129,1,0,0,0,131,132,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,140,1,0,
0,0,134,136,5,38,0,0,135,137,5,46,0,0,136,135,1,0,0,0,137,138,1,0,0,0,138,
136,1,0,0,0,138,139,1,0,0,0,139,141,1,0,0,0,140,134,1,0,0,0,140,141,1,0,
0,0,141,33,1,0,0,0,8,40,50,110,116,124,132,138,140];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tableroParser extends antlr4.Parser {

    static grammarFileName = "tablero.g4";
    static literalNames = [ null, "'tablero'", "'fuente'", "'tipo'", "'ruta'", 
                            "'metrica'", "'grafico'", "'usar'", "'filtro'", 
                            "'alerta'", "'si'", "'entonces'", "'verdadero'", 
                            "'falso'", "'csv'", "'api'", "'json'", "'suma'", 
                            "'promedio'", "'maximo'", "'minimo'", "'contar'", 
                            "'barras'", "'lineas'", "'torta'", "'tabla'", 
                            null, "'{'", "'}'", "'('", "')'", "';'", "':'", 
                            "'/'", "'='", "','", "'_'", "'-'", "'.'", "'=='", 
                            "'!='", "'>'", "'<'", "'>='", "'<='" ];
    static symbolicNames = [ null, "TABLERO", "FUENTE", "TIPO", "RUTA", 
                             "METRICA", "GRAFICO", "USAR", "FILTRO", "ALERTA", 
                             "SI", "ENTONCES", "VERDADERO", "FALSO", "CSV", 
                             "API", "JSON", "SUMA", "PROMEDIO", "MAXIMO", 
                             "MINIMO", "CONTAR", "BARRAS", "LINEAS", "TORTA", 
                             "TABLA", "CADENA", "LBRACE", "RBRACE", "LPAREN", 
                             "RPAREN", "SEMICOLON", "COLON", "SLASH", "EQ", 
                             "COMMA", "UNDERSCORE", "GUION", "DOT", "DOUBLE_EQ", 
                             "EXCLAM_EQ", "MAYOR", "MENOR", "MAYOR_EQ", 
                             "MENOR_EQ", "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "programa", "elemento", "fuente", "tipo_fuente", 
                         "metrica", "agregacion", "grafico", "tipo_grafico", 
                         "filtro", "operador", "alerta", "campo", "valor", 
                         "booleano", "identificador", "cadena", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tableroParser.ruleNames;
        this.literalNames = tableroParser.literalNames;
        this.symbolicNames = tableroParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tableroParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(tableroParser.TABLERO);
	        this.state = 35;
	        this.identificador();
	        this.state = 36;
	        this.match(tableroParser.LBRACE);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 868) !== 0)) {
	            this.state = 37;
	            this.elemento();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
	        this.match(tableroParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elemento() {
	    let localctx = new ElementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tableroParser.RULE_elemento);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.fuente();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.metrica();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.grafico();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.filtro();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.alerta();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fuente() {
	    let localctx = new FuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tableroParser.RULE_fuente);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(tableroParser.FUENTE);
	        this.state = 53;
	        this.identificador();
	        this.state = 54;
	        this.match(tableroParser.TIPO);
	        this.state = 55;
	        this.tipo_fuente();
	        this.state = 56;
	        this.match(tableroParser.RUTA);
	        this.state = 57;
	        this.cadena();
	        this.state = 58;
	        this.match(tableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo_fuente() {
	    let localctx = new Tipo_fuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tableroParser.RULE_tipo_fuente);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	metrica() {
	    let localctx = new MetricaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tableroParser.RULE_metrica);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(tableroParser.METRICA);
	        this.state = 63;
	        this.identificador();
	        this.state = 64;
	        this.match(tableroParser.EQ);
	        this.state = 65;
	        this.agregacion();
	        this.state = 66;
	        this.match(tableroParser.LPAREN);
	        this.state = 67;
	        this.campo();
	        this.state = 68;
	        this.match(tableroParser.RPAREN);
	        this.state = 69;
	        this.match(tableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	agregacion() {
	    let localctx = new AgregacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tableroParser.RULE_agregacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4063232) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	grafico() {
	    let localctx = new GraficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tableroParser.RULE_grafico);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(tableroParser.GRAFICO);
	        this.state = 74;
	        this.identificador();
	        this.state = 75;
	        this.match(tableroParser.LBRACE);
	        this.state = 76;
	        this.match(tableroParser.TIPO);
	        this.state = 77;
	        this.match(tableroParser.EQ);
	        this.state = 78;
	        this.tipo_grafico();
	        this.state = 79;
	        this.match(tableroParser.SEMICOLON);
	        this.state = 80;
	        this.match(tableroParser.USAR);
	        this.state = 81;
	        this.match(tableroParser.EQ);
	        this.state = 82;
	        this.identificador();
	        this.state = 83;
	        this.match(tableroParser.SEMICOLON);
	        this.state = 84;
	        this.match(tableroParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo_grafico() {
	    let localctx = new Tipo_graficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tableroParser.RULE_tipo_grafico);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filtro() {
	    let localctx = new FiltroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tableroParser.RULE_filtro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(tableroParser.FILTRO);
	        this.state = 89;
	        this.campo();
	        this.state = 90;
	        this.operador();
	        this.state = 91;
	        this.valor();
	        this.state = 92;
	        this.match(tableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador() {
	    let localctx = new OperadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tableroParser.RULE_operador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        _la = this._input.LA(1);
	        if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alerta() {
	    let localctx = new AlertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tableroParser.RULE_alerta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(tableroParser.ALERTA);
	        this.state = 97;
	        this.match(tableroParser.SI);
	        this.state = 98;
	        this.identificador();
	        this.state = 99;
	        this.operador();
	        this.state = 100;
	        this.valor();
	        this.state = 101;
	        this.match(tableroParser.ENTONCES);
	        this.state = 102;
	        this.cadena();
	        this.state = 103;
	        this.match(tableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tableroParser.RULE_campo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.identificador();
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 106;
	            this.match(tableroParser.DOT);
	            this.state = 107;
	            this.identificador();
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, tableroParser.RULE_valor);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.cadena();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.numero();
	            break;
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, tableroParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, tableroParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(tableroParser.LETRA);
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 1537) !== 0)) {
	            this.state = 121;
	            _la = this._input.LA(1);
	            if(!(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 1537) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, tableroParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(tableroParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, tableroParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 129;
	            this.match(tableroParser.DIGITO);
	            this.state = 132; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===46);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 134;
	            this.match(tableroParser.DOT);
	            this.state = 136; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 135;
	                this.match(tableroParser.DIGITO);
	                this.state = 138; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===46);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

tableroParser.EOF = antlr4.Token.EOF;
tableroParser.TABLERO = 1;
tableroParser.FUENTE = 2;
tableroParser.TIPO = 3;
tableroParser.RUTA = 4;
tableroParser.METRICA = 5;
tableroParser.GRAFICO = 6;
tableroParser.USAR = 7;
tableroParser.FILTRO = 8;
tableroParser.ALERTA = 9;
tableroParser.SI = 10;
tableroParser.ENTONCES = 11;
tableroParser.VERDADERO = 12;
tableroParser.FALSO = 13;
tableroParser.CSV = 14;
tableroParser.API = 15;
tableroParser.JSON = 16;
tableroParser.SUMA = 17;
tableroParser.PROMEDIO = 18;
tableroParser.MAXIMO = 19;
tableroParser.MINIMO = 20;
tableroParser.CONTAR = 21;
tableroParser.BARRAS = 22;
tableroParser.LINEAS = 23;
tableroParser.TORTA = 24;
tableroParser.TABLA = 25;
tableroParser.CADENA = 26;
tableroParser.LBRACE = 27;
tableroParser.RBRACE = 28;
tableroParser.LPAREN = 29;
tableroParser.RPAREN = 30;
tableroParser.SEMICOLON = 31;
tableroParser.COLON = 32;
tableroParser.SLASH = 33;
tableroParser.EQ = 34;
tableroParser.COMMA = 35;
tableroParser.UNDERSCORE = 36;
tableroParser.GUION = 37;
tableroParser.DOT = 38;
tableroParser.DOUBLE_EQ = 39;
tableroParser.EXCLAM_EQ = 40;
tableroParser.MAYOR = 41;
tableroParser.MENOR = 42;
tableroParser.MAYOR_EQ = 43;
tableroParser.MENOR_EQ = 44;
tableroParser.LETRA = 45;
tableroParser.DIGITO = 46;
tableroParser.WS = 47;

tableroParser.RULE_programa = 0;
tableroParser.RULE_elemento = 1;
tableroParser.RULE_fuente = 2;
tableroParser.RULE_tipo_fuente = 3;
tableroParser.RULE_metrica = 4;
tableroParser.RULE_agregacion = 5;
tableroParser.RULE_grafico = 6;
tableroParser.RULE_tipo_grafico = 7;
tableroParser.RULE_filtro = 8;
tableroParser.RULE_operador = 9;
tableroParser.RULE_alerta = 10;
tableroParser.RULE_campo = 11;
tableroParser.RULE_valor = 12;
tableroParser.RULE_booleano = 13;
tableroParser.RULE_identificador = 14;
tableroParser.RULE_cadena = 15;
tableroParser.RULE_numero = 16;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_programa;
    }

	TABLERO() {
	    return this.getToken(tableroParser.TABLERO, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LBRACE() {
	    return this.getToken(tableroParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(tableroParser.RBRACE, 0);
	};

	elemento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementoContext);
	    } else {
	        return this.getTypedRuleContext(ElementoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_elemento;
    }

	fuente() {
	    return this.getTypedRuleContext(FuenteContext,0);
	};

	metrica() {
	    return this.getTypedRuleContext(MetricaContext,0);
	};

	grafico() {
	    return this.getTypedRuleContext(GraficoContext,0);
	};

	filtro() {
	    return this.getTypedRuleContext(FiltroContext,0);
	};

	alerta() {
	    return this.getTypedRuleContext(AlertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterElemento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitElemento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitElemento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_fuente;
    }

	FUENTE() {
	    return this.getToken(tableroParser.FUENTE, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	TIPO() {
	    return this.getToken(tableroParser.TIPO, 0);
	};

	tipo_fuente() {
	    return this.getTypedRuleContext(Tipo_fuenteContext,0);
	};

	RUTA() {
	    return this.getToken(tableroParser.RUTA, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	SEMICOLON() {
	    return this.getToken(tableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterFuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitFuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitFuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tipo_fuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_tipo_fuente;
    }

	CSV() {
	    return this.getToken(tableroParser.CSV, 0);
	};

	API() {
	    return this.getToken(tableroParser.API, 0);
	};

	JSON() {
	    return this.getToken(tableroParser.JSON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterTipo_fuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitTipo_fuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitTipo_fuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetricaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_metrica;
    }

	METRICA() {
	    return this.getToken(tableroParser.METRICA, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	EQ() {
	    return this.getToken(tableroParser.EQ, 0);
	};

	agregacion() {
	    return this.getTypedRuleContext(AgregacionContext,0);
	};

	LPAREN() {
	    return this.getToken(tableroParser.LPAREN, 0);
	};

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	RPAREN() {
	    return this.getToken(tableroParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(tableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterMetrica(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitMetrica(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitMetrica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AgregacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_agregacion;
    }

	SUMA() {
	    return this.getToken(tableroParser.SUMA, 0);
	};

	PROMEDIO() {
	    return this.getToken(tableroParser.PROMEDIO, 0);
	};

	MAXIMO() {
	    return this.getToken(tableroParser.MAXIMO, 0);
	};

	MINIMO() {
	    return this.getToken(tableroParser.MINIMO, 0);
	};

	CONTAR() {
	    return this.getToken(tableroParser.CONTAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterAgregacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitAgregacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitAgregacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GraficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_grafico;
    }

	GRAFICO() {
	    return this.getToken(tableroParser.GRAFICO, 0);
	};

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	LBRACE() {
	    return this.getToken(tableroParser.LBRACE, 0);
	};

	TIPO() {
	    return this.getToken(tableroParser.TIPO, 0);
	};

	EQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.EQ);
	    } else {
	        return this.getToken(tableroParser.EQ, i);
	    }
	};


	tipo_grafico() {
	    return this.getTypedRuleContext(Tipo_graficoContext,0);
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.SEMICOLON);
	    } else {
	        return this.getToken(tableroParser.SEMICOLON, i);
	    }
	};


	USAR() {
	    return this.getToken(tableroParser.USAR, 0);
	};

	RBRACE() {
	    return this.getToken(tableroParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterGrafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitGrafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitGrafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tipo_graficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_tipo_grafico;
    }

	BARRAS() {
	    return this.getToken(tableroParser.BARRAS, 0);
	};

	LINEAS() {
	    return this.getToken(tableroParser.LINEAS, 0);
	};

	TORTA() {
	    return this.getToken(tableroParser.TORTA, 0);
	};

	TABLA() {
	    return this.getToken(tableroParser.TABLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterTipo_grafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitTipo_grafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitTipo_grafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FiltroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_filtro;
    }

	FILTRO() {
	    return this.getToken(tableroParser.FILTRO, 0);
	};

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMICOLON() {
	    return this.getToken(tableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterFiltro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitFiltro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitFiltro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_operador;
    }

	DOUBLE_EQ() {
	    return this.getToken(tableroParser.DOUBLE_EQ, 0);
	};

	EXCLAM_EQ() {
	    return this.getToken(tableroParser.EXCLAM_EQ, 0);
	};

	MAYOR() {
	    return this.getToken(tableroParser.MAYOR, 0);
	};

	MENOR() {
	    return this.getToken(tableroParser.MENOR, 0);
	};

	MAYOR_EQ() {
	    return this.getToken(tableroParser.MAYOR_EQ, 0);
	};

	MENOR_EQ() {
	    return this.getToken(tableroParser.MENOR_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterOperador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitOperador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitOperador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AlertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_alerta;
    }

	ALERTA() {
	    return this.getToken(tableroParser.ALERTA, 0);
	};

	SI() {
	    return this.getToken(tableroParser.SI, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	ENTONCES() {
	    return this.getToken(tableroParser.ENTONCES, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	SEMICOLON() {
	    return this.getToken(tableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterAlerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitAlerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitAlerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_campo;
    }

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.DOT);
	    } else {
	        return this.getToken(tableroParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_valor;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(tableroParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(tableroParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.LETRA);
	    } else {
	        return this.getToken(tableroParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.DIGITO);
	    } else {
	        return this.getToken(tableroParser.DIGITO, i);
	    }
	};


	UNDERSCORE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.UNDERSCORE);
	    } else {
	        return this.getToken(tableroParser.UNDERSCORE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(tableroParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.DIGITO);
	    } else {
	        return this.getToken(tableroParser.DIGITO, i);
	    }
	};


	DOT() {
	    return this.getToken(tableroParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




tableroParser.ProgramaContext = ProgramaContext; 
tableroParser.ElementoContext = ElementoContext; 
tableroParser.FuenteContext = FuenteContext; 
tableroParser.Tipo_fuenteContext = Tipo_fuenteContext; 
tableroParser.MetricaContext = MetricaContext; 
tableroParser.AgregacionContext = AgregacionContext; 
tableroParser.GraficoContext = GraficoContext; 
tableroParser.Tipo_graficoContext = Tipo_graficoContext; 
tableroParser.FiltroContext = FiltroContext; 
tableroParser.OperadorContext = OperadorContext; 
tableroParser.AlertaContext = AlertaContext; 
tableroParser.CampoContext = CampoContext; 
tableroParser.ValorContext = ValorContext; 
tableroParser.BooleanoContext = BooleanoContext; 
tableroParser.IdentificadorContext = IdentificadorContext; 
tableroParser.CadenaContext = CadenaContext; 
tableroParser.NumeroContext = NumeroContext; 
