// Generated from c:/Users/olivi/tablero/tablero.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class tableroParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		TABLERO=1, FUENTE=2, TIPO=3, RUTA=4, METRICA=5, GRAFICO=6, USAR=7, FILTRO=8, 
		ALERTA=9, SI=10, ENTONCES=11, VERDADERO=12, FALSO=13, CSV=14, API=15, 
		JSON=16, SUMA=17, PROMEDIO=18, MAXIMO=19, MINIMO=20, CONTAR=21, BARRAS=22, 
		LINEAS=23, TORTA=24, TABLA=25, CADENA=26, LBRACE=27, RBRACE=28, LPAREN=29, 
		RPAREN=30, SEMICOLON=31, COLON=32, SLASH=33, EQ=34, COMMA=35, UNDERSCORE=36, 
		GUION=37, DOT=38, DOUBLE_EQ=39, EXCLAM_EQ=40, MAYOR=41, MENOR=42, MAYOR_EQ=43, 
		MENOR_EQ=44, LETRA=45, DIGITO=46, WS=47;
	public static final int
		RULE_programa = 0, RULE_elemento = 1, RULE_fuente = 2, RULE_tipo_fuente = 3, 
		RULE_metrica = 4, RULE_agregacion = 5, RULE_grafico = 6, RULE_tipo_grafico = 7, 
		RULE_filtro = 8, RULE_operador = 9, RULE_alerta = 10, RULE_campo = 11, 
		RULE_valor = 12, RULE_booleano = 13, RULE_identificador = 14, RULE_cadena = 15, 
		RULE_numero = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "elemento", "fuente", "tipo_fuente", "metrica", "agregacion", 
			"grafico", "tipo_grafico", "filtro", "operador", "alerta", "campo", "valor", 
			"booleano", "identificador", "cadena", "numero"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'tablero'", "'fuente'", "'tipo'", "'ruta'", "'metrica'", "'grafico'", 
			"'usar'", "'filtro'", "'alerta'", "'si'", "'entonces'", "'verdadero'", 
			"'falso'", "'csv'", "'api'", "'json'", "'suma'", "'promedio'", "'maximo'", 
			"'minimo'", "'contar'", "'barras'", "'lineas'", "'torta'", "'tabla'", 
			null, "'{'", "'}'", "'('", "')'", "';'", "':'", "'/'", "'='", "','", 
			"'_'", "'-'", "'.'", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TABLERO", "FUENTE", "TIPO", "RUTA", "METRICA", "GRAFICO", "USAR", 
			"FILTRO", "ALERTA", "SI", "ENTONCES", "VERDADERO", "FALSO", "CSV", "API", 
			"JSON", "SUMA", "PROMEDIO", "MAXIMO", "MINIMO", "CONTAR", "BARRAS", "LINEAS", 
			"TORTA", "TABLA", "CADENA", "LBRACE", "RBRACE", "LPAREN", "RPAREN", "SEMICOLON", 
			"COLON", "SLASH", "EQ", "COMMA", "UNDERSCORE", "GUION", "DOT", "DOUBLE_EQ", 
			"EXCLAM_EQ", "MAYOR", "MENOR", "MAYOR_EQ", "MENOR_EQ", "LETRA", "DIGITO", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "tablero.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public tableroParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode TABLERO() { return getToken(tableroParser.TABLERO, 0); }
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(tableroParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(tableroParser.RBRACE, 0); }
		public List<ElementoContext> elemento() {
			return getRuleContexts(ElementoContext.class);
		}
		public ElementoContext elemento(int i) {
			return getRuleContext(ElementoContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(TABLERO);
			setState(35);
			identificador();
			setState(36);
			match(LBRACE);
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 868L) != 0)) {
				{
				{
				setState(37);
				elemento();
				}
				}
				setState(42);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(43);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementoContext extends ParserRuleContext {
		public FuenteContext fuente() {
			return getRuleContext(FuenteContext.class,0);
		}
		public MetricaContext metrica() {
			return getRuleContext(MetricaContext.class,0);
		}
		public GraficoContext grafico() {
			return getRuleContext(GraficoContext.class,0);
		}
		public FiltroContext filtro() {
			return getRuleContext(FiltroContext.class,0);
		}
		public AlertaContext alerta() {
			return getRuleContext(AlertaContext.class,0);
		}
		public ElementoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elemento; }
	}

	public final ElementoContext elemento() throws RecognitionException {
		ElementoContext _localctx = new ElementoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_elemento);
		try {
			setState(50);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FUENTE:
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				fuente();
				}
				break;
			case METRICA:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				metrica();
				}
				break;
			case GRAFICO:
				enterOuterAlt(_localctx, 3);
				{
				setState(47);
				grafico();
				}
				break;
			case FILTRO:
				enterOuterAlt(_localctx, 4);
				{
				setState(48);
				filtro();
				}
				break;
			case ALERTA:
				enterOuterAlt(_localctx, 5);
				{
				setState(49);
				alerta();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuenteContext extends ParserRuleContext {
		public TerminalNode FUENTE() { return getToken(tableroParser.FUENTE, 0); }
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public TerminalNode TIPO() { return getToken(tableroParser.TIPO, 0); }
		public Tipo_fuenteContext tipo_fuente() {
			return getRuleContext(Tipo_fuenteContext.class,0);
		}
		public TerminalNode RUTA() { return getToken(tableroParser.RUTA, 0); }
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(tableroParser.SEMICOLON, 0); }
		public FuenteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fuente; }
	}

	public final FuenteContext fuente() throws RecognitionException {
		FuenteContext _localctx = new FuenteContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_fuente);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(FUENTE);
			setState(53);
			identificador();
			setState(54);
			match(TIPO);
			setState(55);
			tipo_fuente();
			setState(56);
			match(RUTA);
			setState(57);
			cadena();
			setState(58);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Tipo_fuenteContext extends ParserRuleContext {
		public TerminalNode CSV() { return getToken(tableroParser.CSV, 0); }
		public TerminalNode API() { return getToken(tableroParser.API, 0); }
		public TerminalNode JSON() { return getToken(tableroParser.JSON, 0); }
		public Tipo_fuenteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo_fuente; }
	}

	public final Tipo_fuenteContext tipo_fuente() throws RecognitionException {
		Tipo_fuenteContext _localctx = new Tipo_fuenteContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_tipo_fuente);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 114688L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MetricaContext extends ParserRuleContext {
		public TerminalNode METRICA() { return getToken(tableroParser.METRICA, 0); }
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public TerminalNode EQ() { return getToken(tableroParser.EQ, 0); }
		public AgregacionContext agregacion() {
			return getRuleContext(AgregacionContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(tableroParser.LPAREN, 0); }
		public CampoContext campo() {
			return getRuleContext(CampoContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(tableroParser.RPAREN, 0); }
		public TerminalNode SEMICOLON() { return getToken(tableroParser.SEMICOLON, 0); }
		public MetricaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metrica; }
	}

	public final MetricaContext metrica() throws RecognitionException {
		MetricaContext _localctx = new MetricaContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_metrica);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(METRICA);
			setState(63);
			identificador();
			setState(64);
			match(EQ);
			setState(65);
			agregacion();
			setState(66);
			match(LPAREN);
			setState(67);
			campo();
			setState(68);
			match(RPAREN);
			setState(69);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AgregacionContext extends ParserRuleContext {
		public TerminalNode SUMA() { return getToken(tableroParser.SUMA, 0); }
		public TerminalNode PROMEDIO() { return getToken(tableroParser.PROMEDIO, 0); }
		public TerminalNode MAXIMO() { return getToken(tableroParser.MAXIMO, 0); }
		public TerminalNode MINIMO() { return getToken(tableroParser.MINIMO, 0); }
		public TerminalNode CONTAR() { return getToken(tableroParser.CONTAR, 0); }
		public AgregacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_agregacion; }
	}

	public final AgregacionContext agregacion() throws RecognitionException {
		AgregacionContext _localctx = new AgregacionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_agregacion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4063232L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GraficoContext extends ParserRuleContext {
		public TerminalNode GRAFICO() { return getToken(tableroParser.GRAFICO, 0); }
		public List<IdentificadorContext> identificador() {
			return getRuleContexts(IdentificadorContext.class);
		}
		public IdentificadorContext identificador(int i) {
			return getRuleContext(IdentificadorContext.class,i);
		}
		public TerminalNode LBRACE() { return getToken(tableroParser.LBRACE, 0); }
		public TerminalNode TIPO() { return getToken(tableroParser.TIPO, 0); }
		public List<TerminalNode> EQ() { return getTokens(tableroParser.EQ); }
		public TerminalNode EQ(int i) {
			return getToken(tableroParser.EQ, i);
		}
		public Tipo_graficoContext tipo_grafico() {
			return getRuleContext(Tipo_graficoContext.class,0);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(tableroParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(tableroParser.SEMICOLON, i);
		}
		public TerminalNode USAR() { return getToken(tableroParser.USAR, 0); }
		public TerminalNode RBRACE() { return getToken(tableroParser.RBRACE, 0); }
		public GraficoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_grafico; }
	}

	public final GraficoContext grafico() throws RecognitionException {
		GraficoContext _localctx = new GraficoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_grafico);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(GRAFICO);
			setState(74);
			identificador();
			setState(75);
			match(LBRACE);
			setState(76);
			match(TIPO);
			setState(77);
			match(EQ);
			setState(78);
			tipo_grafico();
			setState(79);
			match(SEMICOLON);
			setState(80);
			match(USAR);
			setState(81);
			match(EQ);
			setState(82);
			identificador();
			setState(83);
			match(SEMICOLON);
			setState(84);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Tipo_graficoContext extends ParserRuleContext {
		public TerminalNode BARRAS() { return getToken(tableroParser.BARRAS, 0); }
		public TerminalNode LINEAS() { return getToken(tableroParser.LINEAS, 0); }
		public TerminalNode TORTA() { return getToken(tableroParser.TORTA, 0); }
		public TerminalNode TABLA() { return getToken(tableroParser.TABLA, 0); }
		public Tipo_graficoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo_grafico; }
	}

	public final Tipo_graficoContext tipo_grafico() throws RecognitionException {
		Tipo_graficoContext _localctx = new Tipo_graficoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_tipo_grafico);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 62914560L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FiltroContext extends ParserRuleContext {
		public TerminalNode FILTRO() { return getToken(tableroParser.FILTRO, 0); }
		public CampoContext campo() {
			return getRuleContext(CampoContext.class,0);
		}
		public OperadorContext operador() {
			return getRuleContext(OperadorContext.class,0);
		}
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(tableroParser.SEMICOLON, 0); }
		public FiltroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_filtro; }
	}

	public final FiltroContext filtro() throws RecognitionException {
		FiltroContext _localctx = new FiltroContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_filtro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(FILTRO);
			setState(89);
			campo();
			setState(90);
			operador();
			setState(91);
			valor();
			setState(92);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperadorContext extends ParserRuleContext {
		public TerminalNode DOUBLE_EQ() { return getToken(tableroParser.DOUBLE_EQ, 0); }
		public TerminalNode EXCLAM_EQ() { return getToken(tableroParser.EXCLAM_EQ, 0); }
		public TerminalNode MAYOR() { return getToken(tableroParser.MAYOR, 0); }
		public TerminalNode MENOR() { return getToken(tableroParser.MENOR, 0); }
		public TerminalNode MAYOR_EQ() { return getToken(tableroParser.MAYOR_EQ, 0); }
		public TerminalNode MENOR_EQ() { return getToken(tableroParser.MENOR_EQ, 0); }
		public OperadorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador; }
	}

	public final OperadorContext operador() throws RecognitionException {
		OperadorContext _localctx = new OperadorContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_operador);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 34634616274944L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AlertaContext extends ParserRuleContext {
		public TerminalNode ALERTA() { return getToken(tableroParser.ALERTA, 0); }
		public TerminalNode SI() { return getToken(tableroParser.SI, 0); }
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public OperadorContext operador() {
			return getRuleContext(OperadorContext.class,0);
		}
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode ENTONCES() { return getToken(tableroParser.ENTONCES, 0); }
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(tableroParser.SEMICOLON, 0); }
		public AlertaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alerta; }
	}

	public final AlertaContext alerta() throws RecognitionException {
		AlertaContext _localctx = new AlertaContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_alerta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(ALERTA);
			setState(97);
			match(SI);
			setState(98);
			identificador();
			setState(99);
			operador();
			setState(100);
			valor();
			setState(101);
			match(ENTONCES);
			setState(102);
			cadena();
			setState(103);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CampoContext extends ParserRuleContext {
		public List<IdentificadorContext> identificador() {
			return getRuleContexts(IdentificadorContext.class);
		}
		public IdentificadorContext identificador(int i) {
			return getRuleContext(IdentificadorContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(tableroParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(tableroParser.DOT, i);
		}
		public CampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_campo; }
	}

	public final CampoContext campo() throws RecognitionException {
		CampoContext _localctx = new CampoContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_campo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			identificador();
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(106);
				match(DOT);
				setState(107);
				identificador();
				}
				}
				setState(112);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public BooleanoContext booleano() {
			return getRuleContext(BooleanoContext.class,0);
		}
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_valor);
		try {
			setState(116);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CADENA:
				enterOuterAlt(_localctx, 1);
				{
				setState(113);
				cadena();
				}
				break;
			case DIGITO:
				enterOuterAlt(_localctx, 2);
				{
				setState(114);
				numero();
				}
				break;
			case VERDADERO:
			case FALSO:
				enterOuterAlt(_localctx, 3);
				{
				setState(115);
				booleano();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BooleanoContext extends ParserRuleContext {
		public TerminalNode VERDADERO() { return getToken(tableroParser.VERDADERO, 0); }
		public TerminalNode FALSO() { return getToken(tableroParser.FALSO, 0); }
		public BooleanoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleano; }
	}

	public final BooleanoContext booleano() throws RecognitionException {
		BooleanoContext _localctx = new BooleanoContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_booleano);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			_la = _input.LA(1);
			if ( !(_la==VERDADERO || _la==FALSO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentificadorContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(tableroParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(tableroParser.LETRA, i);
		}
		public List<TerminalNode> DIGITO() { return getTokens(tableroParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(tableroParser.DIGITO, i);
		}
		public List<TerminalNode> UNDERSCORE() { return getTokens(tableroParser.UNDERSCORE); }
		public TerminalNode UNDERSCORE(int i) {
			return getToken(tableroParser.UNDERSCORE, i);
		}
		public IdentificadorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identificador; }
	}

	public final IdentificadorContext identificador() throws RecognitionException {
		IdentificadorContext _localctx = new IdentificadorContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_identificador);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(LETRA);
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 105621835743232L) != 0)) {
				{
				{
				setState(121);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 105621835743232L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public TerminalNode CADENA() { return getToken(tableroParser.CADENA, 0); }
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_cadena);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(CADENA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(tableroParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(tableroParser.DIGITO, i);
		}
		public TerminalNode DOT() { return getToken(tableroParser.DOT, 0); }
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_numero);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(129);
				match(DIGITO);
				}
				}
				setState(132); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIGITO );
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(134);
				match(DOT);
				setState(136); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(135);
					match(DIGITO);
					}
					}
					setState(138); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==DIGITO );
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001/\u008f\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0005\u0000\'\b\u0000\n\u0000\f\u0000*\t\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"3\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000bm\b\u000b\n\u000b\f"+
		"\u000bp\t\u000b\u0001\f\u0001\f\u0001\f\u0003\fu\b\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0005\u000e{\b\u000e\n\u000e\f\u000e~\t\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0004\u0010\u0083\b\u0010\u000b\u0010\f"+
		"\u0010\u0084\u0001\u0010\u0001\u0010\u0004\u0010\u0089\b\u0010\u000b\u0010"+
		"\f\u0010\u008a\u0003\u0010\u008d\b\u0010\u0001\u0010\u0000\u0000\u0011"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \u0000\u0006\u0001\u0000\u000e\u0010\u0001\u0000\u0011\u0015"+
		"\u0001\u0000\u0016\u0019\u0001\u0000\',\u0001\u0000\f\r\u0002\u0000$$"+
		"-.\u0089\u0000\"\u0001\u0000\u0000\u0000\u00022\u0001\u0000\u0000\u0000"+
		"\u00044\u0001\u0000\u0000\u0000\u0006<\u0001\u0000\u0000\u0000\b>\u0001"+
		"\u0000\u0000\u0000\nG\u0001\u0000\u0000\u0000\fI\u0001\u0000\u0000\u0000"+
		"\u000eV\u0001\u0000\u0000\u0000\u0010X\u0001\u0000\u0000\u0000\u0012^"+
		"\u0001\u0000\u0000\u0000\u0014`\u0001\u0000\u0000\u0000\u0016i\u0001\u0000"+
		"\u0000\u0000\u0018t\u0001\u0000\u0000\u0000\u001av\u0001\u0000\u0000\u0000"+
		"\u001cx\u0001\u0000\u0000\u0000\u001e\u007f\u0001\u0000\u0000\u0000 \u0082"+
		"\u0001\u0000\u0000\u0000\"#\u0005\u0001\u0000\u0000#$\u0003\u001c\u000e"+
		"\u0000$(\u0005\u001b\u0000\u0000%\'\u0003\u0002\u0001\u0000&%\u0001\u0000"+
		"\u0000\u0000\'*\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000()\u0001"+
		"\u0000\u0000\u0000)+\u0001\u0000\u0000\u0000*(\u0001\u0000\u0000\u0000"+
		"+,\u0005\u001c\u0000\u0000,\u0001\u0001\u0000\u0000\u0000-3\u0003\u0004"+
		"\u0002\u0000.3\u0003\b\u0004\u0000/3\u0003\f\u0006\u000003\u0003\u0010"+
		"\b\u000013\u0003\u0014\n\u00002-\u0001\u0000\u0000\u00002.\u0001\u0000"+
		"\u0000\u00002/\u0001\u0000\u0000\u000020\u0001\u0000\u0000\u000021\u0001"+
		"\u0000\u0000\u00003\u0003\u0001\u0000\u0000\u000045\u0005\u0002\u0000"+
		"\u000056\u0003\u001c\u000e\u000067\u0005\u0003\u0000\u000078\u0003\u0006"+
		"\u0003\u000089\u0005\u0004\u0000\u00009:\u0003\u001e\u000f\u0000:;\u0005"+
		"\u001f\u0000\u0000;\u0005\u0001\u0000\u0000\u0000<=\u0007\u0000\u0000"+
		"\u0000=\u0007\u0001\u0000\u0000\u0000>?\u0005\u0005\u0000\u0000?@\u0003"+
		"\u001c\u000e\u0000@A\u0005\"\u0000\u0000AB\u0003\n\u0005\u0000BC\u0005"+
		"\u001d\u0000\u0000CD\u0003\u0016\u000b\u0000DE\u0005\u001e\u0000\u0000"+
		"EF\u0005\u001f\u0000\u0000F\t\u0001\u0000\u0000\u0000GH\u0007\u0001\u0000"+
		"\u0000H\u000b\u0001\u0000\u0000\u0000IJ\u0005\u0006\u0000\u0000JK\u0003"+
		"\u001c\u000e\u0000KL\u0005\u001b\u0000\u0000LM\u0005\u0003\u0000\u0000"+
		"MN\u0005\"\u0000\u0000NO\u0003\u000e\u0007\u0000OP\u0005\u001f\u0000\u0000"+
		"PQ\u0005\u0007\u0000\u0000QR\u0005\"\u0000\u0000RS\u0003\u001c\u000e\u0000"+
		"ST\u0005\u001f\u0000\u0000TU\u0005\u001c\u0000\u0000U\r\u0001\u0000\u0000"+
		"\u0000VW\u0007\u0002\u0000\u0000W\u000f\u0001\u0000\u0000\u0000XY\u0005"+
		"\b\u0000\u0000YZ\u0003\u0016\u000b\u0000Z[\u0003\u0012\t\u0000[\\\u0003"+
		"\u0018\f\u0000\\]\u0005\u001f\u0000\u0000]\u0011\u0001\u0000\u0000\u0000"+
		"^_\u0007\u0003\u0000\u0000_\u0013\u0001\u0000\u0000\u0000`a\u0005\t\u0000"+
		"\u0000ab\u0005\n\u0000\u0000bc\u0003\u001c\u000e\u0000cd\u0003\u0012\t"+
		"\u0000de\u0003\u0018\f\u0000ef\u0005\u000b\u0000\u0000fg\u0003\u001e\u000f"+
		"\u0000gh\u0005\u001f\u0000\u0000h\u0015\u0001\u0000\u0000\u0000in\u0003"+
		"\u001c\u000e\u0000jk\u0005&\u0000\u0000km\u0003\u001c\u000e\u0000lj\u0001"+
		"\u0000\u0000\u0000mp\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000"+
		"no\u0001\u0000\u0000\u0000o\u0017\u0001\u0000\u0000\u0000pn\u0001\u0000"+
		"\u0000\u0000qu\u0003\u001e\u000f\u0000ru\u0003 \u0010\u0000su\u0003\u001a"+
		"\r\u0000tq\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000ts\u0001\u0000"+
		"\u0000\u0000u\u0019\u0001\u0000\u0000\u0000vw\u0007\u0004\u0000\u0000"+
		"w\u001b\u0001\u0000\u0000\u0000x|\u0005-\u0000\u0000y{\u0007\u0005\u0000"+
		"\u0000zy\u0001\u0000\u0000\u0000{~\u0001\u0000\u0000\u0000|z\u0001\u0000"+
		"\u0000\u0000|}\u0001\u0000\u0000\u0000}\u001d\u0001\u0000\u0000\u0000"+
		"~|\u0001\u0000\u0000\u0000\u007f\u0080\u0005\u001a\u0000\u0000\u0080\u001f"+
		"\u0001\u0000\u0000\u0000\u0081\u0083\u0005.\u0000\u0000\u0082\u0081\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u008c\u0001"+
		"\u0000\u0000\u0000\u0086\u0088\u0005&\u0000\u0000\u0087\u0089\u0005.\u0000"+
		"\u0000\u0088\u0087\u0001\u0000\u0000\u0000\u0089\u008a\u0001\u0000\u0000"+
		"\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000"+
		"\u0000\u008b\u008d\u0001\u0000\u0000\u0000\u008c\u0086\u0001\u0000\u0000"+
		"\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d!\u0001\u0000\u0000\u0000"+
		"\b(2nt|\u0084\u008a\u008c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}