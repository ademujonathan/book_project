import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  

  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) { }

    getUserState() {
      return this.afAuth.authState;
    }


    // loging function
    login( email: string, password: string) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.eventAuthError.next(error);
        })
        .then(userCredential => {
          if(userCredential) {
            this.router.navigate(['/home']);
          }
        })
    }

    //  creation of user 
    createUser(user) {
    this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName,
        });



        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/home']);
          });

      })
      .catch( error => {
        this.eventAuthError.next(error);

      }
      )
  }

// Section function inserted data sent to firebase
  insertUserData( userCredential: firebase.auth.UserCredential) {
    return this.db.doc('Users/${userCredential.user.uid}').set({
      file: this.newUser.file,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      email: this.newUser.email,
      address: this.newUser.address,
      country: this.newUser.country,
      postcode: this.newUser.postcode,
      city: this.newUser.city,
      region: this.newUser.region,
      role: 'network user'
    })

  }
  logout() {
    return this.afAuth.auth.signOut();
  }
}
