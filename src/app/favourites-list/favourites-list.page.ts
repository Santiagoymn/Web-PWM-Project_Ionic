import { Component, OnInit } from '@angular/core';
import {SQLiteObject} from '@ionic-native/sqlite/ngx';
import {FavServiceService} from '../../favService/fav-service.service';
import {GetterFirebaseService} from '../serviceGeneral/getter-firebase.service';
import {Actividad} from '../objetos';
import {getAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.page.html',
  styleUrls: ['./favourites-list.page.scss', '../app.component.scss'],
})
export class FavouritesListPage implements OnInit {

  actividades!: Actividad[];
  actividadesFav!: string[];
  user: string;
  checked = true;
  constructor(private getterJsonService: GetterFirebaseService, private favService: FavServiceService) {
    this.user = getAuth().currentUser.email;
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getLogged(){
    return (getAuth().currentUser !== null);
  }

  async ngOnInit() {
    this.actividades = await this.getterJsonService.getTodasActividades();
    this.actividadesFav = await this.favService.getActivities(this.user);
  }


  checkBoxClickDelete(e, activity){
    alert('clica checkbox');
    this.favService.deleteFav(this.user, activity);
    e.currentTarget.checked = false;
    alert('Sale');
    //window.location.reload();
  }

  puestaVariableActivity(identificador: any){
    localStorage.setItem('activity', identificador);
  }

}
