import {Component, Input, OnInit} from '@angular/core';
import {Actividad, Categoria} from '../objetos';
import {tap} from 'rxjs';
import {GetterFirebaseService} from '../serviceGeneral/getter-firebase.service';

@Component({
  selector: 'app-category-page-actividades',
  templateUrl: './category-page-actividades.html',
  styleUrls: ['./category-page-actividades.scss', '../app.component.scss'],
})
export class CategoryPageActividadesPage implements OnInit {

  categorias!: Categoria[];
  actividades!: Actividad[];
  @Input() categoria!: Categoria;
  @Input() actividad!: Actividad;
  constructor(private getterJsonService: GetterFirebaseService) {
  }

  async ngOnInit() {
    // @ts-ignore
    this.actividades = await this.getterJsonService.getCategoriaActividades(localStorage.getItem('category'));

    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  categoriaClicada(){
    return localStorage.getItem('category');
  }

  puestaVariableActivity(identificador: any){
    localStorage.setItem('activity', identificador);
  }
}
