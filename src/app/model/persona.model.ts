export class Persona {
	id?: number;
	nombre: string;
	apellido: string;
	img: string;
	telefono: string;
	email: string;
	perfil: string;
	banner: string;
	acerca_demi: string;

	constructor(nombre: string, apellido: string, img: string, telefono: string, email: string, perfil: string, banner: string, acerca_demi: string){
		this.nombre = nombre;
		this.apellido = apellido;
		this.img = img;
		this.telefono = telefono;
		this.email = email;
		this.perfil = perfil;
		this.banner = banner;
		this.acerca_demi = acerca_demi;
	}
}