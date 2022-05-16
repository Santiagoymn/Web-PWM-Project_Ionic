import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioFire} from '../objetos';
import {UsersService} from '../serviceUsers/users.service';
import {tap} from 'rxjs';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss', '../app.component.scss']
})
export class LoginPage implements OnInit {
  @Input() usuario!: UsuarioFire;

  checkoutForm: FormGroup;
  email = '';
  password = '';
  usuarios!: UsuarioFire[];

  constructor(public fb: FormBuilder, private usersService: UsersService, private router: Router,
              private firebaseAuth: AngularFireAuth,
              private navCtrl: NavController) {
    this.checkoutForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.usersService.getUsuarios()
      .pipe(
        tap((usuarios: UsuarioFire[]) => this.usuarios = usuarios)
      )
      .subscribe();
  }

  onSubmit(): void {
    this.email = this.checkoutForm.get('email')?.value;
    this.password = this.checkoutForm.get('password')?.value;
    if (!this.checkoutForm.valid) {
      window.alert('Es necesario rellenar todos los campos');
    } else {
      this.firebaseAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          alert('Ha iniciado sesión correctamente');
          this.navCtrl.navigateForward('/home').then(() => {
            sessionStorage.setItem('logged', 'true');
            this.checkoutForm.reset();
          });
        }).catch((error) => {
        if (error.code === 'auth/wrong-password') {
          alert('El email o contraseña introducido es incorrecto');
        } else if (error.code === 'auth/invalid-email') {
          alert('El email introducido no es válido');
        }
        else{
          alert(error.message);
        }
      });
    }
  }
}
