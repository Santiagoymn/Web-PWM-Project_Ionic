import { Component, OnInit } from '@angular/core';
import {SQLiteObject} from '@ionic-native/sqlite/ngx';
import {FavServiceService} from '../../favService/fav-service.service';
import {GetterFirebaseService} from '../serviceGeneral/getter-firebase.service';
import {Actividad} from '../objetos';
import {getAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.page.html',
  styleUrls: ['./favourites-list.page.scss'],
})
export class FavouritesListPage implements OnInit {

  actividades!: Actividad[];
  actividadesFav!: string[];
  user: string;

  checked: boolean;


  constructor(private getterJsonService: GetterFirebaseService, private favService: FavServiceService) {
    this.user = getAuth().currentUser.email;

    if(this.favService.checkActivity(localStorage.getItem('activity'), this.user)){
      this.checked = true;
    }else{
      this.checked = false;
    }
  }

  getLogged(){
    return (getAuth().currentUser !== null);
  }

  async ngOnInit() {
    this.actividades = await this.getterJsonService.getTodasActividades();
    this.actividadesFav = await this.favService.getActivities('m@m.mm');
  }


  checkBoxClick(e){
    this.favService.deleteFav(this.user, localStorage.getItem('activity'));
  }

  puestaVariableActivity(identificador: any){
    localStorage.setItem('activity', identificador);
  }

}
