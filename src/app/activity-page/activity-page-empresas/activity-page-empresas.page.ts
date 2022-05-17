import {Component, Input, OnInit} from '@angular/core';
import {Empresa} from "../../objetos";
import {GetterFirebaseService} from "../../serviceGeneral/getter-firebase.service";

@Component({
  selector: 'app-activity-page-empresas',
  templateUrl: 'activity-page-empresas.page.html',
  styleUrls: ['activity-page-empresas.page.scss', '../../app.component.scss']
})
export class ActivityPageEmpresasPage implements OnInit {

  empresas!: Empresa[];
  @Input() empresa!: Empresa;
  constructor(private getterJsonService: GetterFirebaseService) {
  }

  async ngOnInit(){
    this.empresas = await this.getterJsonService.getActividadesEmpresas(localStorage.getItem("activity"));
  }
}
