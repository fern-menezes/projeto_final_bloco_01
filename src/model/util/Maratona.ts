import { Participante } from "./Participante";

export class Maratona extends Participante{

    private _distancia: number;
    private _tempo: string;
    private _inicio: string;
    private _pausas: number;

    constructor(id: number, nome: string, idade: number, categoria: number, cidade: string, jaCorreu: string) {
		super(id, nome, idade, categoria, cidade, jaCorreu);
        this._distancia = this.distancia;
		this._tempo = this.tempo;
		this._inicio = this.inicio;
		this._pausas = this.pausas;
		
	}

	public get distancia(): number {
		return this._distancia;
	}


	public get tempo(): string {
		return this._tempo;
	}

  
	public get inicio(): string {
		return this._inicio;
	}

	public get pausas(): number {
		return this._pausas;
	}

	public set distancia(value: number) {
		this._distancia = value;
	}

	public set tempo(value: string) {
		this._tempo = value;
	}

   
	public set inicio(value: string) {
		this._inicio = value;
	}

	public set pausas(value: number) {
		this._pausas = value;
	}

    public visualizar(): void{
        super.visualizar();
        console.log(`Distância percorrida: ${this._distancia}`);
        console.log(`Tempo utilizado: ${this._tempo}`);
        console.log(`Horário de início: ${this._inicio}`);
        console.log(`Quantidade de pausas: ${this._pausas}`);

    }
}