import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import {getAuth} from 'firebase/auth';
import {FileUpload} from '../objetos';
import {UsersService} from '../serviceUsers/users.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.page.html',
  styleUrls: ['./user-edit-profile.page.scss'],
})
export class UserEditProfilePage implements OnInit {
  displayName!: string;
  photoURL!: string;
  email!: string;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage: number | undefined;
  saveForm: FormGroup;

  constructor(public afAuth: AngularFireAuth, private router: Router, private usersService: UsersService, public fb: FormBuilder) {
    this.saveForm = this.fb.group({
      nombreApellidos: [this.displayName]
    });
  }

  ngOnInit() {}

  goBack(){
    this.router.navigate(['/user-profile']).then(() => {
    });
  }

  onSubmitSaveChanges() {
    this.upload();
    const displayNameInput = this.saveForm.get('nombreApellidos')?.value;
    if ( displayNameInput !== this.displayName ) {
        this.usersService.updateNameUser(displayNameInput);
    }
    window.alert('Ha realizado cambios correctamente');
    this.router.navigate(['/user-profile']);
  }

  getLogged(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      this.displayName = user.displayName;
      this.email = user.email;
      this.photoURL = user.photoURL;
      return true;
    }
    else{
      return false;
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.usersService.pushFileToStorage(this.currentFileUpload)
          .subscribe(
            percentage => {
              this.photoURL= this.currentFileUpload.url;
              this.percentage = Math.round(percentage ? percentage : 0);
            },
            error => {
              console.log(error);
            }
          );
      }
    }
  }

  tittleFile(){
    if (this.selectedFiles) {
      // @ts-ignore
      return this.selectedFiles.item(0).name;
    }else{
      return '';
    }
  }

}
