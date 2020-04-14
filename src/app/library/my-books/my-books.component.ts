import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Book } from './../../shared/book.model';
import { BookService } from './../../shared/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  list: Book[];
  constructor(
    private service: BookService,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
    ) { }

  ngOnInit() {
    this.service.getBooks().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as Book;
      })
    });


  }

  onEdit(joe: Book){
    this.service.formData = Object.assign({},joe);
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this record?")){
  this.firestore.doc('books/'+ id).delete();
  alert("Deleted Successfully!");
  }}

}
