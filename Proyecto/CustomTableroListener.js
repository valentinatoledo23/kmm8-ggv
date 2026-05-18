import tableroLexer from "./generated/tableroLexer.js";
import tableroParser from "./generated/tableroParser.js";
import { CustomTableroVisitor } from "./CustomTableroVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new tableroLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    
    // ========== TABLA DE LEXEMAS-TOKENS ==========
    console.log("\n📋 TABLA DE LEXEMAS-TOKENS");
    console.log("┌─────────────────────┬────────────────────────────────┐");
    console.log("│ Lexema              │ Token                          │");
    console.log("├─────────────────────┼────────────────────────────────┤");
    
    // Obtener la lista de nombres de tokens desde el lexer
    const tokenNames = lexer.ruleNames;
    
    // Obtener todos los tokens (excepto EOF)
    const tokens = lexer.getAllTokens();
    for (let token of tokens) {
        let lexema = token.text;
        // Escape para caracteres especiales
        lexema = lexema.replace(/\n/g, '\\n').replace(/\t/g, '\\t');
        // Truncar si es muy largo
        if (lexema.length > 20) lexema = lexema.substring(0, 17) + "...";
        
        // Obtener el nombre del token
        let tokenName = "DESCONOCIDO";
        if (token.type >= 1 && token.type <= tokenNames.length) {
            tokenName = tokenNames[token.type - 1];
        }
        
        console.log(`│ ${lexema.padEnd(20)} │ ${tokenName.padEnd(30)} │`);
    }
    console.log("└─────────────────────┴────────────────────────────────┘");
    
    // Volver a crear el lexer porque getAllTokens() lo consumió
    lexer = new tableroLexer(inputStream);
    tokenStream = new CommonTokenStream(lexer);
    let parser = new tableroParser(tokenStream);
    let tree = parser.programa();

    if (parser.syntaxErrorsCount > 0) {
        console.error("\n❌ Se encontraron errores de sintaxis en la entrada.");
        console.error(`   Cantidad de errores: ${parser.syntaxErrorsCount}`);
    } else {
        console.log("\n✅ Entrada válida.");
        
        // ========== ÁRBOL DE DERIVACIÓN ==========
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log("\n🌳 ÁRBOL DE DERIVACIÓN:");
        console.log(cadena_tree);

        // ========== INTERPRETACIÓN ==========
        const visitor = new CustomTableroVisitor();
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese la definición del tablero: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();