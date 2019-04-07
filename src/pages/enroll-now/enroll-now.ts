import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { CoursesPage } from '../courses/courses';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { LoginPage } from '../login/login';
import { ProgramCalenderPage } from '../program-calender/program-calender';


/**
 * Generated class for the EnrollNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enroll-now',
  templateUrl: 'enroll-now.html',
})
export class EnrollNowPage {
items: any;
username:any;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public loading: LoadingController, public navParams: NavParams,public http:Http, public menuCtrl: MenuController) {
  this.enrollement();
  
  }

  enrollement(){
    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
    
    };
    let loader = this.loading.create({
      content: 'Processing please wait...',
    });
    loader.present().then(() => { 
      this.http.post('http://127.0.0.1:8080/ionicphp/course.php', data, options)
        .map(res => res.json())
        .subscribe(res => {
         
          loader.dismiss()
          this.items = res.server_response;
         
          console.log(this.items); 
        });
    });
  }
  Register_course(){
    //// check to confirm the username, email, telephone and password fields are filled
    this.username = this.navParams.get('username');

   var headers = new Headers();
       headers.append("Accept", 'application/json');
       headers.append('Content-Type', 'application/json' );
       let options = new RequestOptions({ headers: headers });
   
     let data = {
          username: this.username,
         // course_code: this.course_code
         };
   
   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {
   this.http.post('http://127.0.0.1:8080/ionicphp/course_register.php',data, options)
   .map(res => res.json())
   .subscribe(res => {
    console.log(res)
    loader.dismiss()
   if(res=="Updated successfull"){
     let alert = this.alertCtrl.create({
       title:"CONGRATS",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
    this.navCtrl.push(LoginPage);
   
   }else
   {
    let alert = this.alertCtrl.create({
    title:"ERROR",
    subTitle:(res),
    buttons: ['OK']
    });
   
    alert.present();
     } 
   });
   });
    }
   
   
  CoursesPage() {
    this.navCtrl.push(CoursesPage);
  }
  ProgramCalenderPage() {
    this.navCtrl.push(ProgramCalenderPage);
  }
  EnrollNowPage() {
    this.navCtrl.push(EnrollNowPage);
  }

  HomePage() {
    this.navCtrl.popToRoot();
  }
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }
  PersonalDetailsPage(){
    this.navCtrl.push(PersonalDetailsPage);
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-3')
  }
  showFilters() {
    this.menuCtrl.open('filters-3');
  }

  hideFilters() {
    this.menuCtrl.close('filters-3');
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollNowPage');
  }

}
