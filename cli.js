import pegaArquivo from "./app.js"
import chalk from "chalk";
import validaURL from "./http-validacao.js";

const caminho = process.argv

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if(caminho[3] === "validar"){
        console.log(chalk.blue("Lista de validados"), await validaURL(resultado))
    }else{
        console.log(chalk.yellow("Lista de Links"), resultado)
    }
}

processaTexto(caminho);