import readlinesync = require("readline-sync");
import { Maratona } from "./src/Maratona";
import { MeiaMaratona } from "./src/MeiaMaratona";
import { ParticipanteController } from "./src/ParticipanteController";
import { colors } from './src/util/Colors';

export function main() {
    let opcao: number, id: number, idade: number, categoria: number, distancia: number, pausas: number;
    let nome: string, cidade: string, jaCorreu: string, tempo: string, inicio: string;
    let categoriaTipo = ['Maratona', 'Meia Maratona'];

    let participantes: ParticipanteController = new ParticipanteController();

    preCadastrados(participantes);

    while (true) {
        menu();
        opcao = readlinesync.questionInt('Digite a opcao desejada: ');

        if (opcao === 0) {
            console.log(colors.bg.black, colors.fg.yellow);
            console.log("\n------------------------------------------");
            console.log("Obrigado por usar o nosso sistema 🏃‍➡️");
            sobre();
            console.log(colors.reset);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("➕ Cadastrar dados do Participante");

                console.log("Informe o nome: ");
                nome = readlinesync.question('');

                console.log("Informe a idade: ");
                idade = readlinesync.questionInt('');

                console.log("Informe a cidade: ");
                cidade = readlinesync.question('');

                console.log("Já participou de uma Maratona? ");
                jaCorreu = readlinesync.question('');

                console.log("Escolha a categoria de corrida: ");
                categoria = readlinesync.keyInSelect(categoriaTipo, "", { cancel: false }) + 1;

                switch (categoria) {
                    case 1:
                        console.log("Informe a distância percorrida: ");
                        distancia = readlinesync.questionFloat('');

                        console.log("Informe o tempo utilizado: ");
                        tempo = readlinesync.question('');

                        console.log("Horário de início da Corrida: ");
                        inicio = readlinesync.question('');

                        console.log("Quantidade de pausas realizadas: ");
                        pausas = readlinesync.questionInt('');

                        participantes.cadastrar(new Maratona(participantes.gerarNumero(), nome, idade, cidade, jaCorreu, categoria, distancia, tempo, inicio, pausas));
                        break;
                    case 2:
                        console.log("Informe a distância percorrida: ");
                        distancia = readlinesync.questionFloat('');

                        console.log("Informe o tempo utilizado: ");
                        tempo = readlinesync.question('');

                        console.log("Horário de início da Corrida: ");
                        inicio = readlinesync.question('');

                        console.log("Quantidade de pausas realizadas: ");
                        pausas = readlinesync.questionInt('');

                        participantes.cadastrar(new MeiaMaratona(participantes.gerarNumero(), nome, idade, cidade, jaCorreu, categoria, distancia, tempo, inicio, pausas));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("📝 Listar todos os participantes");
                participantes.listar();
                break;
            case 3:
                console.log("📖 Consultar participante por ID");

                console.log("Digite o id do participante: ");
                id = readlinesync.questionInt('');
                participantes.consultarId(id);

                keyPress()
                break;
            case 4:
                console.log("🔄 Atualizar participante");

                id = readlinesync.questionInt("Digite o Id do participante: ");
                let participante = participantes.buscarNoArray(id);

                if (participante !== null) {
                    nome = readlinesync.question("Digite o Nome do Produto: ");
                    categoria = participante.categoria;

                    idade = readlinesync.questionInt("Digite a idade atualizada: ");
                    cidade = readlinesync.question("Digite a cidade atualizada: ");
                    jaCorreu = readlinesync.question("Já participou de uma maratona? ");

                    switch (categoria) {
                        case 1:
                            console.log("Informe a distância percorrida atualizada: ");
                            distancia = readlinesync.questionFloat('');

                            console.log("Informe o tempo utilizado atualizado: ");
                            tempo = readlinesync.question('');

                            console.log("Informe o horário de início atualizado: ");
                            inicio = readlinesync.question('');

                            console.log("Informe a quantidade de pausas atualizada: ");
                            pausas = readlinesync.questionInt('');

                            participantes.atualizar(new Maratona(id, nome, idade, cidade, jaCorreu, categoria, distancia, tempo, inicio, pausas)); // Use atualizar
                            break;
                    }

                } else {
                    console.log("Participante não Encontrado!");
                }
                keyPress()
                break;
            case 5:
                console.log("🗑️ Deletar participante");

                console.log("Digite o participante que deseja excluir: ");
                id = readlinesync.questionInt('');

                console.log("Você realmente deseja excluir o participante com ID:", id, "? (s/n)");
                const confirmacao = readlinesync.question('').toLowerCase();

                if (confirmacao === 's') {
                    participantes.deletar(id);
                } else {
                    console.log("Operação de exclusão cancelada.");
                }
                keyPress()
                break;
            default:
                console.log("Opção Inválida! ❌");
                break;
        }
    }
}

main();

export function sobre() {
    console.log("Desenvolvido por: Fern🌿 | github: fern-menezes");
    console.log("--------------------------------------------------");
};

export function menu() {
    console.log(colors.bg.black, colors.fg.yellow);
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
    console.log(colors.reset);
};

function preCadastrados(participantes: ParticipanteController): void {
    participantes.cadastrar(new Maratona(participantes.gerarNumero(), "João Silva", 28, "São Paulo", "Sim", 1, 42.195, "3h 45m", "7:00 AM", 2));
    participantes.cadastrar(new Maratona(participantes.gerarNumero(), "Maria Oliveira", 34, "Rio de Janeiro", "Não", 1, 21.0975, "1h 50m", "8:00 AM", 1));
    participantes.cadastrar(new MeiaMaratona(participantes.gerarNumero(), "Fernanda Lima", 29, "Brasília", "Sim", 2, 10, "45m", "9:00 AM", 0));
    participantes.cadastrar(new Maratona(participantes.gerarNumero(), "Carlos Eduardo", 40, "Belo Horizonte", "Sim", 1, 5, "20m", "10:00 AM", 1));
    participantes.cadastrar(new MeiaMaratona(participantes.gerarNumero(), "Aline Souza", 25, "Porto Alegre", "Não", 2, 42.195, "4h 10m", "7:30 AM", 3));
}
function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}