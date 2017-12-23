import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  nick: string;

  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: Http,
                public platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    let url = '/login';
    let params = JSON.stringify({
        nick: this.nick
    });

    if (!this.platform.is('core')) {
        url = 'http://changsune.cafe24.com/sucol1/getLogin.php';
    }

    this.http.post(url, params).map(res => res.json()).subscribe(data => {
        console.log(data);

        if (data.code > 0) {
            this.navCtrl.setRoot(TabsPage);

            window.localStorage.setItem('user_no', data.user_no);
            window.localStorage.setItem('user_name', data.user_name);
        }
        else {
            // show message
        }
    },onerror => { console.log(onerror) });
  }

}
