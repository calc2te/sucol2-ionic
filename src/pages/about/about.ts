import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    private images: any[] = [];

    constructor(public navCtrl: NavController,
                public http: Http,
                private modalCtrl: ModalController,
                public platform: Platform) {

        let url = '/imgAPI';

        if (!this.platform.is('core')) {
            url = 'http://changsune.cafe24.com/sucol1/img.php';
        }

        this.http.get(url).map(res => res.json()).subscribe(data => {
            console.log(data);

            let length = data.results.length;

            for (let i = 0; i < length; i++) {
                this.images.push({
                    no: i,
                    url: data.results[i]
                });
            }
        },onerror => { console.log(onerror) });
    }

    private openModal(i) {
        let modal = this.modalCtrl.create(GalleryModal, {
          photos: this.images,
          initialSlide: i,
        });
        modal.present();
      }
}
