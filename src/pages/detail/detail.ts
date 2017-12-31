import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

/**
* Generated class for the DetailPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})
export class DetailPage {
    private title: any;
    private content: any;
    private writer: any;
    private comment: any[] = [];

    private cmt_content: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public platform: Platform) {
        //console.log(navParams);
        //console.log(navParams.get("no"));

        let no = navParams.get("no");

        let url = '/board';
        let params = JSON.stringify({
            no: no
        });

        if (!this.platform.is('core')) {
            url = 'http://changsune.cafe24.com/sucol1/board.php';
        }

        this.http.post(url, params).map(res => res.json()).subscribe(data => {
            console.log(data);

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

            //console.log(this.comment);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailPage');
    }

    public transform(str: string) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }

}
