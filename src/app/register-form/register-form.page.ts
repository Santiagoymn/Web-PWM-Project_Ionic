import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {

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
  @Input() usuario!: UsuarioFire;

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
    this.user = this.registerForm.get('user')?.value;
    this.email = this.registerForm.get('email')?.value;
    this.name = this.registerForm.get('name')?.value;
    this.surname = this.registerForm.get('surname')?.value;
    this.password = this.registerForm.get('password')?.value;
    this.passwordRepeated = this.registerForm.get('passwordRepeated')?.value;

    if (!this.registerForm.valid){
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
          this.firebaseAuth.createUserWithEmailAndPassword(this.email, this.password).
          then((userCredential) => {
            // @ts-ignore
            this.usersService.addNewUser(userCredential.user.uid, this.name, this.surname, this.user);
            this.router.navigate(['/registeredSuccesful']).then(() => {
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
