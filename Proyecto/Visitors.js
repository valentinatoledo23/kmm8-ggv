import TableroVisitor from './TableroVisitor.js';

export default class CustomVisitor extends TableroVisitor {
    
    // Controla la raíz del programa
    visitPrograma(ctx) {
        const nombreTablero = ctx.IDENTIFICADOR().getText();
        
        // Mapeamos y visitamos cada elemento interno de forma manual
        const elementos = ctx.elemento().map(elementCtx => this.visit(elementCtx));
        
        return {
            tipo: 'Programa',
            tablero: nombreTablero,
            componentes: elementos.filter(el => el !== null) // Filtrar nulos si los hay
        };
    }

    // Dirige al hijo correspondiente
    visitElemento(ctx) {
        return this.visitChildren(ctx);
    }

    visitFuente(ctx) {
        return {
            tipo: 'FuenteDeDatos',
            id: ctx.IDENTIFICADOR().getText(),
            formato: ctx.tipo_fuente().getText(),
            ubicacion: ctx.CADENA().getText().replace(/"/g, '')
        };
    }

    visitMetrica(ctx) {
        return {
            tipo: 'Metrica',
            id: ctx.IDENTIFICADOR().getText(),
            operacion: ctx.agregacion().getText(),
            origenCampo: ctx.campo().getText()
        };
    }

    visitGrafico(ctx) {
    const idToken = ctx.IDENTIFICADOR();
    let id = 'ID_DESCONOCIDO';
    let origenDatos = null;

    if (idToken) {
        if (Array.isArray(idToken)) {
            id = idToken[0] ? idToken[0].getText() : 'ID_DESCONOCIDO';
            origenDatos = idToken[1] ? idToken[1].getText() : null;
        } else {
            id = idToken.getText();
        }
    }

    const tipoGrafico = ctx.tipo_grafico() ? ctx.tipo_grafico().getText() : 'TIPO_DESCONOCIDO';

    // Aquí ejecuta la lógica que ya tenías para retornar o guardar tu gráfico
    // Por ejemplo, si tu visitor retorna un objeto:
    return {
        id,
        tipoGrafico,
        origenDatos
    };
  }

    visitFiltro(ctx) {
        return {
            tipo: 'Filtro',
            columna: ctx.campo().getText(),
            op: ctx.operador().getText(),
            limite: ctx.valor().getText()
        };
    }

    visitAlerta(ctx) {
        return {
            tipo: 'Alerta',
            condicionVariable: ctx.IDENTIFICADOR().getText(),
            op: ctx.operador().getText(),
            limite: ctx.valor().getText(),
            mensaje: ctx.CADENA().getText().replace(/"/g, '')
        };
    }
}