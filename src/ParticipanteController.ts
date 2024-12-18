import { Participante } from "./Participante";
import { ParticipanteRepository } from "./ParticipanteRepository";


export class ParticipanteController implements ParticipanteRepository{
    
    private listaParticipantes: Array<Participante> = new Array<Participante>();
    id: number = 0;
    
    cadastrar(participante: Participante): void {
        this.listaParticipantes.push(participante); 
        console.log(`O ${participante.nome} foi cadastrado com sucesso! ✅`); 
    }
    
        
    listar(): void {
        for(let participante of this.listaParticipantes){
            participante.visualizar()
        }
    }

    consultarId(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null)
            buscaProduto.visualizar();
        else{
            console.log("\nParticipante Não Cadastrado!❌")
        }
    }
        
    atualizar(participante: Participante): void {
        const buscaParticipante = this.buscarNoArray(participante.id);

        if(buscaParticipante !== null){
            this.listaParticipantes[this.listaParticipantes.indexOf(buscaParticipante)] = participante;
            console.log("\nO participante foi atualizado com sucesso!✔️")
        } else
            console.log("\nParticipante Não Encontrado!")
    }
    
    deletar(id: number): void {
        const buscaParticipante = this.buscarNoArray(id);

        if(buscaParticipante !== null){
            this.listaParticipantes.splice(this.listaParticipantes.indexOf(buscaParticipante), 1);
            console.log("\nParticipante deletado com sucesso!✔️")
        } else
            console.log("\nParticipante Não Encontrado!")
    }
        
    gerarNumero(): number {
        return ++this.id;
    }


    public buscarNoArray(id: number): Participante | null{
        for (let participante of this.listaParticipantes){
            if(participante.id === id)
                return participante;
        }
        return null;
    }
}
    