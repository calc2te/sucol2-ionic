import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { WritePage } from '../write/write';

@Component({
    selector: 'page-board',
    templateUrl: 'board.html'
})
export class BoardPage {
    items = [];

    index = 0;
    count = 10;
    total_count = 0;

    constructor(public navCtrl: NavController, public http: Http) {
        /*
        for (let i = 0; i < 30; i++) {
            this.items.push( this.items.length );
        }
        */

        this.getList(this.index, this.count);
    }

    getList(index, count) {
        let url = '/get/list';
        let params = JSON.stringify({
            index: index,
            count: count
        });

        this.http.post(url, params).map(res => res.json()).subscribe(data => {
            let length = data.result.length;

            for (let i = 0; i < length; i++) {
                this.items.push({
                    title: data.result[i].title,
                    writer: data.result[i].user_no,
                    comment: data.result[i].comment,
                    comment_cnt: data.result[i].comment_count,
                })
            }

            this.total_count = data.total_count;
            this.index += this.count;
        });
    }

    itemSelected(i) {
        this.navCtrl.push(DetailPage, {
            no: i,
        });
    }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');

        if (this.index < this.total_count) {
            setTimeout(() => {
                this.getList(this.index, this.count);

                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        } else {
            //infiniteScroll.complete();
            infiniteScroll.enable(false);
        }
    }

    write() {
        console.log('write');

        this.navCtrl.push(WritePage, {});
    }
}
