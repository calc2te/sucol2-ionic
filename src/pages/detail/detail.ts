import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
* Generated class for the DetailPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})
export class DetailPage {
    private title: any;
    private content: any;
    private writer: any;
    private comment: any[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        console.log(navParams);
        console.log(navParams.get("no"));

        let no = navParams.get("no");

        let url = '/board';
        let params = JSON.stringify({
            no: no
        });

        this.http.post(url, params).map(res => res.json()).subscribe(data => {
            console.log(data);
            console.log(data.no);
            console.log(data.title);

            this.title = data.title;
            this.content = data.content;
            this.writer = data.writer;

            // comment
            let length = data.comment.length;

            for (let i = 0; i < length; i++) {
                this.comment.push({
                    writer: data.comment[i].writer,
                    comment: data.comment[i].comment
                });
            }

            console.log(this.comment);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailPage');
    }

}
