//Super Classe Abstrata


export abstract class Participante{

    private _id: number;
    private _nome: string;
    private _idade: number;
    private _categoria: number;
    private _cidade: string;
    private _jaCorreu: string;


	constructor(id: number, nome: string, idade: number, categoria: number, cidade: string, jaCorreu: string) {
		this._id = id;
		this._nome = nome;
		this._idade = idade;
		this._categoria = categoria;
		this._cidade = cidade;
		this._jaCorreu = jaCorreu;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}


	public get idade(): number {
		return this._idade;
	}

	public get categoria(): number {
		return this._categoria;
	}

	public get cidade(): string {
		return this._cidade;
	}


	public get jaCorreu(): string {
		return this._jaCorreu;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set idade(value: number) {
		this._idade = value;
	}

	public set categoria(value: number) {
		this._categoria = value;
	}

	public set cidade(value: string) {
		this._cidade = value;
	}

	public set jaCorreu(value: string) {
		this._jaCorreu = value;
	}


    public visualizar(): void{
		let categoria: string;

		switch(this._categoria){
			case 1:
				categoria = "Maratona";
				break;
			default:
				categoria = "Tipo Inválido ⚠️";
		}
		
    //usar os métodos get e set para gerar as informações no console, Imprime as informações do produto no console
        console.log("\n--------------------------------------------");
        console.log("          CADASTRO DO PARTICIPANTE            ");
        console.log("----------------------------------------------");
        console.log(`Matrícula do participante: ${this._id}`);
        console.log(`Nome do participante: ${this._nome}`);
        console.log(`Idade: ${this._idade}`);
		console.log(`Categoria: ${categoria}`);
        console.log(`Em qual cidade que deseja participar? : ${this._cidade}`);
        console.log(`Já participou de uma maratona?: ${this._jaCorreu}`);


}
}
