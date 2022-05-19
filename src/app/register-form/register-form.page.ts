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
  email = '';
  name = '';
  surname = '';
  password = '';
  passwordRepeated = '';
  registrado = 0;
  id = -1;
  urlPhoto = '';


  constructor(public fb: FormBuilder, private router: Router, private usersService: UsersService,
              private firebaseAuth: AngularFireAuth) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordRepeated: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  onSubmitRegister(): void {
    this.email = this.registerForm.get('email')?.value;
    this.name = this.registerForm.get('name')?.value;
    this.surname = this.registerForm.get('surname')?.value;
    this.password = this.registerForm.get('password')?.value;
    this.passwordRepeated = this.registerForm.get('passwordRepeated')?.value;
    // eslint-disable-next-line max-len
    this.urlPhoto = 'https://firebasestorage.googleapis.com/v0/b/pwm-project-aa26c.appspot.com/o/logos%2FLogo.png?alt=media&token=ba7c61d3-ccc0-4690-92bc-45044ffee700';
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
        const fullName = this.name + ' ' + this.surname;
        this.firebaseAuth.createUserWithEmailAndPassword(this.email, this.password).
        then((userCredential) => {
          userCredential.user.updateProfile({
            displayName: fullName,
            photoURL: this.urlPhoto
          });
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
