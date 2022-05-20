import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../objetos';
import {tap} from 'rxjs';
import {GetterFirebaseService} from '../../serviceGeneral/getter-firebase.service';

@Component({
  selector: 'app-home-page-categories',
  templateUrl: './home-page-categories.page.html',
  styleUrls: ['./home-page-categories.page.scss', '../../app.component.scss'],
})
export class HomePageCategoriesPage implements OnInit {

  @Input() categoria!: Categoria;
  categorias!: Categoria[];
  constructor(private getterJsonService: GetterFirebaseService) {
  }

  ngOnInit(): void {
    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  puestaVariableLocal(identificador: any){
    localStorage.setItem('category', identificador);
  }

}
