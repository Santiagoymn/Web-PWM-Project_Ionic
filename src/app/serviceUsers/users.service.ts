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

  constructor(private firebaseAuth: AngularFireAuth, private firestore: AngularFirestore) { }

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

  addNewUser(newId: any, name: string, surname: string, user: string, urlPic: string){
    this.firestore.collection('usuarios').doc(newId)
      .set({nombre: name, apellidos: surname, usuario: user, profilePicture: urlPic}).then (r =>{});
  }

  getInfoUserLogged(){
    return this.firebaseAuth.user;
  }

}

