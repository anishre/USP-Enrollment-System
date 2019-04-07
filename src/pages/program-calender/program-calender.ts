import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,LoadingController,ToastController } from 'ionic-angular';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { CoursesPage } from '../courses/courses';
import { LoginPage } from '../login/login';
import { Http, Headers, RequestOptions } from "@angular/http";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import * as papa from 'papaparse';
import 'rxjs/add/operator/map';



/**
 * Generated class for the ProgramCalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program-calender',
  templateUrl: 'program-calender.html',
})
export class ProgramCalenderPage {

  csvData: any[] = [];
  headerRow: any[] = [];
  

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public toastCtrl: ToastController,  private http: Http, public navParams: NavParams, public menuCtrl: MenuController,private transfer: FileTransfer,) 
  {
    this.writeCsvData();
   
  }
  writeCsvData() {
    
    
      let data = this.extractData;

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
  
   
      this.http.post('http://127.0.0.1:8080/ionicphp/program_calender.php',data, options)
      .map(res => res.json())
      .subscribe( 
  
      );
}
  

  extractData(res){
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData).data;

    this.headerRow = parsedData[0];
    
    parsedData.splice(0, 1);
    this.csvData = parsedData;

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
  PersonalDetailsPage(){
    this.navCtrl.push(PersonalDetailsPage);
  }
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-5')
  }
  showFilters() {
    this.menuCtrl.open('filters-5');
  }

  hideFilters() {
    this.menuCtrl.close('filters-5');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

}