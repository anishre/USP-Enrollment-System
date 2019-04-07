import { Component } from '@angular/core';

import { CoursesPage } from '../courses/courses';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { HomePage } from '../home/home';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { ProgramCalenderPage } from '../program-calender/program-calender';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CoursesPage;
  tab3Root = EnrollNowPage;
  tab4Root = PersonalDetailsPage;
  tab5Root = ProgramCalenderPage;

  constructor() {

  }
}
