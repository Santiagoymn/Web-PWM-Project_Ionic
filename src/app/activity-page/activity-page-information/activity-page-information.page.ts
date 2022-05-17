import {Component, Input, OnInit} from '@angular/core';
import {Actividad, Empresa} from '../../objetos';
import {GetterFirebaseService} from '../../serviceGeneral/getter-firebase.service';
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

  constructor(private getterJsonService: GetterFirebaseService) {
  }

  async ngOnInit() {
    this.actividades = await this.getterJsonService.getCategoriaActividades(localStorage.getItem('category'));
  }

  actividadClicada(){
    return  localStorage.getItem('activity');
  }

  checkBoxClick(e){
    if(e.currentTarget.checked){ // Usuario añade actividad a favs

    }else{ // Usuario elimina actividad a favs

    }
  }
}
