import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Actividad} from '../app/objetos';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class FavServiceService {

  readonly dbName: string = 'remotestack.db';
  readonly dbTable: string = 'favsTable';
  activities: Array<Actividad>;
  private dbInstance: SQLiteObject;

  constructor(private platform: Platform, private sqlite: SQLite) {

  }

  // Create SQLite database
  databaseConn() {
  this.platform.ready().then(() => {
          this.sqlite.create({
            name: this.dbName,
            location: 'default'
          }).then((sqLite: SQLiteObject) => {
            this.dbInstance = sqLite;
            sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.dbTable} (
                userId INTEGER PRIMARY KEY,
                email varchar(255),
                activity varchar(255))`, []);
            })
            .catch((error) => alert('error'));
        })
        .catch((error) => alert('error'));
  }

  // Add new Fav Activity
  public addFav(email, activity) {
    // validation
    if (!email.length || !activity.length) {
      alert('Provide both email & name');
      return;
    }
    this.dbInstance.executeSql(`
        INSERT INTO ${this.dbTable} (email, activity) VALUES ('${email}', '${activity}')`, [])
      .then(() => {
        alert('Success');
      });
  }

  getAllFavs() {
    return this.dbInstance.executeSql(`
      SELECT * FROM ${this.dbTable}`, []).then((res) => {
      this.activities = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.activities.push(res.rows.item(i));
        }
        return this.activities;
      }
    }, (e) => {
      alert(JSON.stringify(e));
    });
  }

  // Get user by user email
  getActivities(email): Promise<any> {
    return this.dbInstance.executeSql(`
      SELECT * FROM ${this.dbTable} WHERE email = ?`, [email])
      .then((res) => ({
        userId: res.rows.item(0).user_id,
        email: res.rows.item(0).email,
        activity: res.rows.item(0).activity
      }));
  }

  // Delete seleted activity
  deleteFav(email, activity) {
    this.dbInstance.executeSql(`
      DELETE FROM ${this.dbTable} WHERE activity = ${activity} AND email = ${email}`, [])
      .then(() => {
      })
      .catch(e => {
        alert(JSON.stringify(e));
      });
  }

  checkActivity(activity, email){
    return this.dbInstance.executeSql(`
      SELECT * FROM ${this.dbTable} WHERE email = ${email} AND activity = ${activity}`, [])
      .then((res) => res == null);
  }
}
