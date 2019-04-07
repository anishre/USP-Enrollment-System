import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }
  CoursesPage() {
    this.navCtrl.push(CoursesPage);
  }

  EnrollNowPage() {
    this.navCtrl.push(EnrollNowPage);
  }

  HomePage() {
    this.navCtrl.popToRoot();
  }
  PersonalDetailsPage(){
    this.navCtrl.push(PersonalDetailsPage);
  }
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-2')
  }
  showFilters() {
    this.menuCtrl.open('filters-2');
  }

  hideFilters() {
    this.menuCtrl.close('filters-2');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

}
