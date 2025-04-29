import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved(); 
  }
  deletePhoto(photo: UserPhoto) {
    this.photoService.deletePhoto(photo);
  }

}
