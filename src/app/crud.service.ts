import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import Any = jasmine.Any;

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  readonly dbName: string = 'remotestack.db';
  readonly dbTable: string = 'userTable';
  user: Array<any>;
  private dbInstance: SQLiteObject;

  constructor(private platform: Platform, private sqlite: SQLite) {
    this.databaseConn();
  }

  // Create SQLite database
  databaseConn() {
    this.platform.ready().then(() => {
      this.sqlite.create({name: this.dbName, location: 'default'})
        .then((sqLite: SQLiteObject) => {
          this.dbInstance = sqLite;
          sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.dbTable} (
              user_id INTEGER PRIMARY KEY,
              name varchar(255), email varchar(255))`, [])
            .then((res) => {
              alert(JSON.stringify(res));
            })
            .catch((error) => alert(JSON.stringify(error)));
        })
        .catch((error) => alert(JSON.stringify(error)));
    });
  }
}
