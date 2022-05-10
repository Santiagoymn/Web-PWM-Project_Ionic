import {Injectable, Input} from '@angular/core';
import {UsuarioFire} from '../objetos';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { doc, setDoc } from 'firebase/firestore';
import {updateProfile} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Input() usuario!: UsuarioFire;

  constructor(private firebaseAuth: AngularFireAuth,private firestore: AngularFirestore) { }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign in with email/password
  login(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });


  }

  getUsuarios() {
    return this.firestore.collection<UsuarioFire>('usuarios').valueChanges();
  }

  addNewUser(newId: any, name: string, surname: string, user: string){
    this.firestore.collection('usuarios').doc(newId)
      .set({nombre: name, apellidos: surname, usuario: user}).then (r =>{});
  }

}

