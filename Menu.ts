import readlinesync = require("readline-sync");


export function main(){

    let opcao;

    while(true){
        
        
        menu();
        opcao = readlinesync.questionInt('Digite a opcao desejada: ');


    if(opcao === 0){
        console.log("\n------------------------------------------");
        console.log("Obrigado por usar o nosso sistema 🏃‍➡️");
        sobre();
        process.exit(0);
    }

    switch(opcao){
        case 1:
            console.log("➕ Cadastrar Participante");
           
          
           
            break;
        case 2:
            
        case 3:
            console.log("📖 Consultar participante por ID");

            
            break;
        case 4:
            console.log("🔄 Atualizar participante");

            
                 
            break;
        case 5:
            console.log("🗑️ Deletar participante");

            
            break;
        default:
            console.log("Opção Inválida! ❌");
            break;
        }
    }
}   

main();

export function sobre(){
    console.log("Desenvolvido por: Fern🌿 | github: fern-menezes");
    console.log("--------------------------------------------------");
};

export function menu(){

    //console.log(colors.bg.white, colors.fg.red);
    console.log("\n----------------------------------------");
    console.log("             MARATONA RUN4FUN             ");
    console.log("------------------------------------------");
    console.log("                                          ");
    console.log("       1 - CADASTRAR PARTICIPANTE         ");
    console.log("       2 - LISTAR TODOS OS PARTICIPANTES  ");
    console.log("       3 - CONSULTAR PARTICIPANTES        ");
    console.log("       4 - ATUALIZAR PARTICIPANTE         ");
    console.log("       5 - DELETAR PARTICIPANTE           ");
    console.log("       0 - SAIR                           ");
    console.log("                                          ");
    //console.log(colors.reset);
};


/**function preCadastrados(): void {
    // Medicamentos
    participantes.cadastrar(new Medicamento(
        produtos.gerarNumero(),
        "Paracetamol",
        10.99,
        1,
        50,
        "C8H9NO2",
        "500mg",
        "sim"
    ));
    
    produtos.cadastrar(new Medicamento(
        produtos.gerarNumero(),
        "Ibuprofeno",
        15.49,
        1,
        30,
        "C13H18O2",
        "600mg",
        "não"
    ));

    // Cosméticos
    produtos.cadastrar(new Cosmetico(
        produtos.gerarNumero(),
        "Creme Hidratante",
        25.99,
        2,
        20,
        "Nivea",
        "Uso Externo",
        "Hidratação por 24h"
    ));
    
    produtos.cadastrar(new Cosmetico(
        produtos.gerarNumero(),
        "Shampoo Anticaspa",
        19.99,
        2,
        35,
        "Head & Shoulders",
        "Uso Diário",
        "Combate à Caspa"
    ));
}
*/