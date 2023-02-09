export class Skills {
	id?: number;
	nombreS: string;
	porcentajeS: number;
	imagenS: string;

	constructor(nombreS: string, porcentajeS: number, imagenS: string){
		this.nombreS = nombreS;
		this.porcentajeS = porcentajeS;
		this.imagenS = imagenS;
	}
}
