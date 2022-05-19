import { Component, OnInit } from '@angular/core';
import {GetterFirebaseService} from '../serviceGeneral/getter-firebase.service';
import {Categoria} from '../objetos';
import {tap} from 'rxjs';
import * as $ from 'jquery';
import {getAuth} from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  categorias!: Categoria[];

  width!: number;
  subMenu = false;
  constructor(private getterJsonService: GetterFirebaseService) { }

  ngAfterViewInit = () => { //Recién en este punto tendrás acceso al valor
    this.width = (document.documentElement.scrollWidth);
  };

  ngOnInit(): void {
    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  toggleLineHeaderOculto(): void{
    $('#lineHeader').toggle();
  }

  closeTresRayas(): void{
    $('#lineHeader').hide();
    $('#subMenu').hide();
    $('#menos').hide();
    $('#mas').show();
  }

  showSubMenu(): void{
    $('#subMenu').show();
    this.toggleMasMenos();
  }

  hideSubMenu(): void{
    $('#subMenu').hide();
    this.toggleMasMenos();
  }

  toggleMasMenos(): void{
    $('#mas').toggle();
    $('#menos').toggle();
  }

  puestaVariableLocal(identificador: any){
    localStorage.setItem('category', identificador);
    window.location.reload();

  }

  getLogged(): boolean{
    const auth = getAuth();
    const user = auth.currentUser;
    return user !== null;
  }

}
