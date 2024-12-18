import { Participante } from "./Participante";

export interface ParticipanteRepository{
     
    cadastrar(participante: Participante): void;
    listar(): void;
    consultarId(id: number): void;
    atualizar(participante: Participante): void;
    deletar(id: number): void;

    gerarNumero(): number;
}