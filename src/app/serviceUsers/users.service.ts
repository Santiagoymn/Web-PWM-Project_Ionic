import {Injectable, Input} from '@angular/core';
import {FileUpload, UsuarioFire} from '../objetos';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {updateProfile} from '@angular/fire/auth';
import {finalize, Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {getAuth} from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Input() usuario!: UsuarioFire;
  private basePath = '/fotos_perfil_usuarios';

  constructor(private firebaseAuth: AngularFireAuth, private firestore: AngularFirestore,
              private storage: AngularFireStorage) { }

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
      .set({nombre: name, apellidos: surname, usuario: user, profilePicture: urlPic}).then ();
  }
  getInfoUserLogged(){
    return this.firebaseAuth.user;
  }
  updatePhotoUser(downloadURL: string){
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      photoURL: downloadURL
    }).then(() => {
    }).catch(() => {
    });
  }

  updateNameUser(name: string){
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
    }).catch(() => {
    });
  }
  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.updatePhotoUser(downloadURL);
      });
    })).subscribe();
    return uploadTask.percentageChanges();
  }

}

