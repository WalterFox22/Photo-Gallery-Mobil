import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { WebView } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photo: UserPhoto[] = [];

  constructor() {}

  private async savePicture(photo:Photo){
    const base64Data= await this.readAsBase64(photo);
    const fileName = Date.now() + '.jpeg';
    const saveFile= await Filesystem.writeFile({
      path:fileName,
      data:base64Data,
      directory:Directory.Data,
    })

    return{
      filepath: fileName,
      webviewPath:photo.webPath
    }
  }

  private async readAsBase64 (photo:Photo){
    const response= await fetch(photo.webPath!)
    const blob = await response.blob()

    return await this.convertBlobToBase64(blob) as string;
  }
  
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });





  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // Para guarda la imagen
     const saveImageFile= await this.savePicture(capturedPhoto)
     this.photo.unshift(saveImageFile)



  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
