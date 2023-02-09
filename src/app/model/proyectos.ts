export class Proyectos {
	id?: number;
    nombreP: string;
    descripcionP: string;
    imagenP: string;

    constructor(nombreP: string, descripcionP: string, imagenP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imagenP = imagenP;
    }
}
