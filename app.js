import chalk from "chalk";
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Não há arquivo no caminho..."));
}


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const linksExtraidos = regex.exec(texto);
    const arrayResultado = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultado.push({ [temp[1]] : [temp[2]]});
    }
    return(arrayResultado);
}


async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro);
    }
}


pegaArquivo('Arquivo/texto.md')