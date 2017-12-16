import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
* Generated class for the WritePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-write',
    templateUrl: 'write.html',
})
export class WritePage {
    title: string;
    content: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WritePage');
    }

    insert() {
        console.log('insert');

        let url = '/lib/write';
        let params = JSON.stringify({
            title: this.title,
            content: this.content
        });

        this.http.post(url, params).map(res => res.json()).subscribe(data => {
            console.log(data);

            if (data.code > 0) {
                this.completeAlert();
            }
        });
    }

    completeAlert() {
        let alert = this.alertCtrl.create({
            title: '작성 완료',
            subTitle: '글이 성공적으로 등록되었습니다.',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        this.navCtrl.pop();
                    }
                },
            ]
        });
        alert.present();
    }
}
