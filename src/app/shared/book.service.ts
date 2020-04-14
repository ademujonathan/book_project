import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  data: any
  formData: Book;
  
  constructor(public httpClient: HttpClient,
    private firestore: AngularFirestore ){}
    // private storage: AngularFireStorage ) { }

  getBooks(){
    return this.firestore.collection('books').snapshotChanges();  
    };
     
    // getImage(object: string): Observable<Blob> {
    //   return this.httpClient.get(object, { responseType: 'blob' });
    // }
  
}
