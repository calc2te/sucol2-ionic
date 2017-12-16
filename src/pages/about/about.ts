import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    private images: any[] = [];

    constructor(public navCtrl: NavController,
                public http: Http,
                private modalCtrl: ModalController) {

        let url = '/imgAPI';
        this.http.get(url).map(res => res.json()).subscribe(data => {
            //this.images = data.results;
            let length = data.results.length;

            for (let i = 0; i < length; i++) {
                this.images.push({
                    no: i,
                    url: data.results[i]
                });
            }
        });
    }

    private openModal(i) {
        let modal = this.modalCtrl.create(GalleryModal, {
          photos: this.images,
          initialSlide: i,
        });
        modal.present();
      }
}
