import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DatabaseService {

  caches: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.caches = db.list('caches');
  }

  addCache(cache) {
    this.caches.push(cache);
  }

  getCaches() {
    return this.caches;
  }

  getCacheById(id) {
    return this.db.object('caches/' + id);
  }

}
