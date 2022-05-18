import { Component, OnInit } from '@angular/core';
import { getAuth, signOut } from 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  displayName!: string;
  photoURL!: string;
  email!: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {}

  async onSubmitLogOut(): Promise<any> {
    return await this.afAuth.signOut().then(() => {
      window.alert('Ha cerrado su sesión correctamente');
      this.router.navigate(['/home']).then(() => {
      });
    });
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
}

