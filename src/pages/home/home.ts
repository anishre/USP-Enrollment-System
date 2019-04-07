import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { LoginPage } from '../login/login';
import { ProgramCalenderPage } from '../program-calender/program-calender';
import 'rxjs/add/operator/map';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  data: any;
  app: any;
  username: any;
  password: any;
  items: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController, public menuCtrl: MenuController) {}
  
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-1')
  }

  CoursesPage() {
    this.navCtrl.push(CoursesPage);
  }
  ProgramCalenderPage() {
    this.navCtrl.push(ProgramCalenderPage);
  }
  EnrollNowPage() {
    let data = {
      username: this.username
    }
    this.navCtrl.push(EnrollNowPage,data);
  }

  HomePage() {
    this.navCtrl.popToRoot();
  }
  PersonalDetailsPage(){
    let data = {
      username: this.username
    }
    this.navCtrl.push(PersonalDetailsPage,data);
  }
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }

  showFilters() {
    this.menuCtrl.open('filters-1');
  }

  hideFilters() {
    this.menuCtrl.close('filters-1');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  backToWelcome() {

    const root = this.app.getRootNav();

    root.popToRoot();

  }

 

  logout() {

    //Api Token Logout

 

    localStorage.clear();

    setTimeout(() => this.backToWelcome(), 1000);

  }
  ngOnInit() {
    this.username = this.navParams.get('username');

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username
    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://127.0.0.1:8080/ionicphp/fetch_data.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()
          this.items = res.server_response;

          console.log(this.items);
        });
    });
    
  }
}
