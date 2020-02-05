import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { take, filter, map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.afAuth.user.pipe(
    take(1),
    map(user => {
      if (user) {
        return { displayName: user.displayName, photoURL: user.photoURL };
      }
      return null;
    })
  );

  constructor(private afAuth: AngularFireAuth) { }

  signinWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signinWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  signout() {
    return this.afAuth.auth.signOut();
  }
}
