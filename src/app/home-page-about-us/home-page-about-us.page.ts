import { Component, OnInit } from '@angular/core';
import {GetterFirebaseService} from '../serviceGeneral/getter-firebase.service';


@Component({
  selector: 'app-home-page-about-us',
  templateUrl: './home-page-about-us.page.html',
  styleUrls: ['./home-page-about-us.page.scss', '../app.component.scss'],
})
export class HomePageAboutUsPage implements OnInit {

  aboutUs = this.getterJsonService.getAboutUs();
  constructor( private getterJsonService: GetterFirebaseService) { }

  ngOnInit() {
  }

}
