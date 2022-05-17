import {Component, Input, OnInit} from '@angular/core';
import {Actividad, Empresa} from '../../objetos';
import {GetterFirebaseService} from '../../serviceGeneral/getter-firebase.service';
@Component({
  selector: 'app-activity-page-information',
  templateUrl: './activity-page-information.component.html',
  styleUrls: ['activity-page-information.page.scss', '../../app/app.component.scss']
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
}
