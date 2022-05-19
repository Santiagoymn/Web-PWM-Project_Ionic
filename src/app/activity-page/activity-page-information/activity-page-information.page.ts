import {Component, Input, OnInit} from '@angular/core';
import {Actividad, Empresa} from '../../objetos';
import {GetterFirebaseService} from '../../serviceGeneral/getter-firebase.service';
import {getAuth} from '@angular/fire/auth';
import {FavServiceService} from '../../../favService/fav-service.service';
@Component({
  selector: 'app-activity-page-information',
  templateUrl: 'activity-page-information.page.html',
  styleUrls: ['activity-page-information.page.scss', '../../app.component.scss']
})
export class ActivityPageInformationPage implements OnInit {

  @Input() actividad!: Actividad;
  @Input() empresa!: Empresa;
  empresas!: Empresa[];
  actividades!: Actividad[];
  user: string | null;
  checked: boolean;
  isHidden: boolean;

  constructor(private getterJsonService: GetterFirebaseService, private favService: FavServiceService) {
    try {
      this.user = getAuth().currentUser.email;
    }catch (e){
      this.user = null;
    }

    const id = '#checkbox';
    if(this.user){
      this.isHidden = false;
    }else{
      this.isHidden = true;
    }

    /*alert(this.favService.checkActivity(localStorage.getItem('activity'), this.user));
    if(this.favService.checkActivity(localStorage.getItem('activity'), this.user)){
      this.checked = true;
    }else{
      this.checked = false;
    }*/
  }

  async ngOnInit() {
    await this.favService.databaseConn();
    this.actividades = await this.getterJsonService.getCategoriaActividades(localStorage.getItem('category'));
  }

  actividadClicada(){
    return localStorage.getItem('activity');
  }

  checkBoxClick(e){
    if(e.currentTarget.checked){ // Usuario añade actividad a favs
      alert('VA A AÑADIR A FAVORITOS');
      this.favService.addFav(this.user, localStorage.getItem('activity'));
    }else{ // Usuario elimina actividad a favs
      alert('VA A ELIMINAR DE FAVORITOS');
      this.favService.deleteFav(this.user, localStorage.getItem('activity'));
    }
    alert('LISTA DE FAVORITOS ACTUAL: ');
    const act = this.favService.getAllFavs().then(res => alert(res[0]));
  }
}
