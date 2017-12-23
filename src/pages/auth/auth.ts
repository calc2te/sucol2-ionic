import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      if ((window.localStorage.getItem('user_no') === "undefined" || window.localStorage.getItem('user_no') === null) &&
          (window.localStorage.getItem('user_name') === "undefined" || window.localStorage.getItem('user_name') === null)) {
              this.navCtrl.setRoot(LoginPage);
      }
      else {
          this.navCtrl.setRoot(TabsPage);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

}
