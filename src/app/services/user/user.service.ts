import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from '../../interfaces/app-user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    if (user.displayName)
    {this.db.object('/users/' + user.uid).update({
      name:user.displayName,
      email: user.email
    });

    }
    else{
      this.db.object('/users/' + user.uid).update({
        
        email: user.email
      });
    }
  }

  get(uid: string): FirebaseObjectObservable<AppUser> {
     return this.db.object('/users/' + uid);
  }

}
