import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {UsuarioFire} from '../objetos';
import {Router} from '@angular/router';
import {UsersService} from '../serviceUsers/users.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {
  @Input() usuario!: UsuarioFire;

  registerForm: FormGroup;
  user = '';
  email = '';
  name = '';
  surname = '';
  password = '';
  passwordRepeated = '';
  registrado = 0;
  id = -1;

  usuarios!: UsuarioFire[];

  constructor(public fb: FormBuilder, private router: Router, private usersService: UsersService,
              private firebaseAuth: AngularFireAuth) {
    this.registerForm = this.fb.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordRepeated: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.usersService.getUsuarios()
      .pipe(
        tap((usuarios: UsuarioFire[]) => this.usuarios = usuarios)
      )
      .subscribe();
  }

  onSubmitRegister(): void {
    console.log('esto primero ');
    console.log(this.registerForm.getRawValue());
    this.user = this.registerForm.get('user')?.value;
    this.email = this.registerForm.get('email')?.value;
    this.name = this.registerForm.get('name')?.value;
    this.surname = this.registerForm.get('surname')?.value;
    this.password = this.registerForm.get('password')?.value;
    this.passwordRepeated = this.registerForm.get('passwordRepeated')?.value;
    console.log('esto segundo ');
    console.log(this.registerForm.getRawValue());
    if (!this.registerForm.valid){
      console.log(this.registerForm.getRawValue());
      window.alert('Es necesario rellenar todos los campos o el formato de algún campo es incorrecto');
    }
    else{
      if(this.passwordRepeated !== this.password)
      {
        window.alert('Las contraseñas deben coincidir. Por favor vuelva a intentarlo.');
      }
      else
      {
        this.usuarios.forEach((usuario) => {
          if (usuario.usuario === this.user){
            window.alert('Debe de escoger otro usuario, ya se encuentra registrado');
            this.registrado = 1;
          }
        });
        if (this.registrado !== 1) {
          console.log(this.registerForm.getRawValue());
          this.firebaseAuth.createUserWithEmailAndPassword(this.email, this.password).
          then((userCredential) => {
            console.log(this.registerForm.getRawValue());
            this.usersService.addNewUser(userCredential.user.uid, this.name, this.surname, this.user);
            this.router.navigate(['/registered-succesful']).then(() => {
              this.registerForm.reset();
            });
          }).catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              alert('El email se encuentra registrado, por favor introduzca otro');
            } else if (error.code === 'auth/invalid-email') {
              alert('El email introducido no es válido');
            } else if (error.code === 'auth/operation-not-allowed') {
              alert('Operación no permitida');
            } else if (error.code === 'auth/weak-password') {
              alert('La contraseña es muy débil, debe tener mínimo 6 caracteres');
            }
            else{
              alert(error.message);
            }
          });

        }
      }
    }
  }

}
