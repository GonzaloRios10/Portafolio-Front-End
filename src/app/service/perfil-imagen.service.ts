import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PerfilImagenService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImagen($event: any, name: string){
  	const file = $event.target.files[0]
  	const imgRef = ref(this.storage, 'Imagen_DePerfil/' + name)
  	uploadBytes(imgRef, file)
  	.then(response => {this.getImages()})
  	.catch(error => console.log(error))
  }

  getImages(){
  	const imagesRef = ref(this.storage, 'Imagen_DePerfil')
  	list(imagesRef)
  	.then(async response => {
  		for(let item of response.items){
  			this.url = await getDownloadURL(item);
  			console.log("URL: " + this.url);
  		}
  	})
  	.catch(error => console.log(error))
  }
}
