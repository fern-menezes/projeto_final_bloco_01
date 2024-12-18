import { Participante } from "./Participante";

export class Maratona extends Participante{

    private _distancia: number;
    private _tempo: string;
    private _inicio: string;
    private _pausas: number;

    constructor(id: number, nome: string, idade: number, cidade: string, jaCorreu: string, categoria: number, distancia: number, tempo: string, inicio: string, pausas: number) {
        super(id, nome, idade, cidade, jaCorreu, categoria);
        this._distancia = distancia;
        this._tempo = tempo;
        this._inicio = inicio;
        this._pausas = pausas;
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

    public visualizar(): void {
        super.visualizar();
        console.log(`Distância percorrida: ${this._distancia}Km`);
        console.log(`Tempo utilizado: ${this._tempo}`);
        console.log(`Horário de início: ${this._inicio}`);
        console.log(`Quantidade de pausas: ${this._pausas}`);
    }
}
