import { Participante } from "../util/Participante";

export interface ParticipanteRepository{
    gerarNumero(): number;
   
    cadastrar(participante: Participante): void;
    listar(): void;
    consultarId(id: number): void;
    atualizar(participante: Participante): void;
    deletar(id: number): void;
}