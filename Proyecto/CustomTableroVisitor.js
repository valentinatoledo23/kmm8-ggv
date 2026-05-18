import tableroVisitor from "./generated/tableroVisitor.js";

export class CustomTableroVisitor extends tableroVisitor {
    constructor() {
        super();
        this.memory = {};
        this.jsCode = [];
    }

    visitPrograma(ctx) {
        console.log("\n=== TABLERO ===");
        const nombre = ctx.identificador().getText();
        console.log(`Nombre: ${nombre}`);
        
        // Agregar código JS inicial
        this.jsCode.push(`// Tablero generado: ${nombre}`);
        this.jsCode.push(`const tablero = {`);
        this.jsCode.push(`  nombre: "${nombre}",`);
        this.jsCode.push(`  elementos: []`);
        this.jsCode.push(`};`);
        
        this.visitChildren(ctx);
        
        // Mostrar el código JS generado
        console.log("\n📜 CÓDIGO JAVASCRIPT GENERADO:");
        console.log("```javascript");
        console.log(this.jsCode.join('\n'));
        console.log("```");
        
        // Ejecutar el código JS (simular intérprete)
        console.log("\n🚀 EJECUCIÓN DEL CÓDIGO:");
        console.log(this.jsCode.join('\n'));
        
        return this.jsCode;
    }

    visitFuente(ctx) {
        const nombre = ctx.identificador(0).getText();
        const tipo = ctx.tipo_fuente().getText();
        const ruta = ctx.cadena().getText();
        
        console.log(`📁 Fuente: ${nombre} (tipo: ${tipo}) → Ruta: ${ruta}`);
        
        // Código JS para la fuente
        this.jsCode.push(`  // Fuente de datos`);
        this.jsCode.push(`  const fuente = {`);
        this.jsCode.push(`    nombre: "${nombre}",`);
        this.jsCode.push(`    tipo: "${tipo}",`);
        this.jsCode.push(`    ruta: ${ruta}`);
        this.jsCode.push(`  };`);
        this.jsCode.push(`  tablero.elementos.push({ tipo: "fuente", datos: fuente });`);
        
        return this.visitChildren(ctx);
    }

    visitMetrica(ctx) {
        const nombre = ctx.identificador().getText();
        const aggr = ctx.agregacion().getText();
        const campo = ctx.campo().getText();
        
        console.log(`📊 Métrica: ${nombre} = ${aggr}(${campo})`);
        
        // Código JS para la métrica
        this.jsCode.push(`  // Métrica`);
        this.jsCode.push(`  const metrica = {`);
        this.jsCode.push(`    nombre: "${nombre}",`);
        this.jsCode.push(`    agregacion: "${aggr}",`);
        this.jsCode.push(`    campo: "${campo}"`);
        this.jsCode.push(`  };`);
        this.jsCode.push(`  tablero.elementos.push({ tipo: "metrica", datos: metrica });`);
        
        return this.visitChildren(ctx);
    }

    visitGrafico(ctx) {
        const nombre = ctx.identificador(0).getText();
        const tipo = ctx.tipo_grafico().getText();
        const usar = ctx.identificador(1).getText();
        
        console.log(`📈 Gráfico: ${nombre} (tipo: ${tipo}) → Usa métrica: ${usar}`);
        
        // Código JS para el gráfico
        this.jsCode.push(`  // Gráfico`);
        this.jsCode.push(`  const grafico = {`);
        this.jsCode.push(`    nombre: "${nombre}",`);
        this.jsCode.push(`    tipo: "${tipo}",`);
        this.jsCode.push(`    usarMetrica: "${usar}"`);
        this.jsCode.push(`  };`);
        this.jsCode.push(`  tablero.elementos.push({ tipo: "grafico", datos: grafico });`);
        
        return this.visitChildren(ctx);
    }

    visitFiltro(ctx) {
        const campo = ctx.campo().getText();
        const op = ctx.operador().getText();
        const valor = ctx.valor().getText();
        
        console.log(`🔍 Filtro: ${campo} ${op} ${valor}`);
        
        // Código JS para el filtro
        this.jsCode.push(`  // Filtro`);
        this.jsCode.push(`  const filtro = {`);
        this.jsCode.push(`    campo: "${campo}",`);
        this.jsCode.push(`    operador: "${op}",`);
        this.jsCode.push(`    valor: ${valor}`);
        this.jsCode.push(`  };`);
        this.jsCode.push(`  tablero.elementos.push({ tipo: "filtro", datos: filtro });`);
        
        return this.visitChildren(ctx);
    }

    visitAlerta(ctx) {
        const identificador = ctx.identificador().getText();
        const op = ctx.operador().getText();
        const valor = ctx.valor().getText();
        const mensaje = ctx.cadena().getText();
        
        const condicion = `${identificador} ${op} ${valor}`;
        console.log(`⚠️ Alerta: si ${condicion} entonces ${mensaje}`);
        
        // Código JS para la alerta
        this.jsCode.push(`  // Alerta`);
        this.jsCode.push(`  const alerta = {`);
        this.jsCode.push(`    condicion: "${condicion}",`);
        this.jsCode.push(`    mensaje: ${mensaje}`);
        this.jsCode.push(`  };`);
        this.jsCode.push(`  tablero.elementos.push({ tipo: "alerta", datos: alerta });`);
        this.jsCode.push(``);
        this.jsCode.push(`// Evaluar alerta`);
        this.jsCode.push(`if (${condicion}) {`);
        this.jsCode.push(`  console.log(Alerta: ${mensaje});`);
        this.jsCode.push(`}`);
        
        return this.visitChildren(ctx);
    }
}