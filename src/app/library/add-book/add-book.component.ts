import { HttpClient } from '@angular/common/http';
import { BookService } from './../../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map'
import { storage } from 'firebase';




@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  selectedFile: any = null;
  imgSrc: string = "/assets/img/iim.png";
  isSubmitted: boolean = false;
  

  constructor(
    private service: BookService,
    private firestore: AngularFirestore,
    private httpClient: HttpClient) {}
    


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      bookTitle:'',
      bookAuthor:'',
      publishedDate:'',
      topic:'',
      comment: '',
      imageUrl: ""
    }
  }

  //Data submit function
  onSubmit(form: NgForm){
    this.isSubmitted = true;
    let data = Object.assign({}, form.value);
    delete data.id;

    const fd = new FormData();

    fd.append('image', this.selectedFile, this.selectedFile.name);  
      this.httpClient.post('https://us-central1-newproject-8b902.cloudfunctions.net/uploadFile', fd).subscribe(res =>{
        console.log(res);
      });

    if(form.value.id==null)
      this.firestore.collection('books').add(data);
    else
    this.firestore.doc('books/'+ form.value.id).update(data);

    this.resetForm(form);
    alert(" Your book has been added")
  }

    //  File upload event
    onFileSelected(event:any) {
      if(event.target.files && event.target.files[0]){
        const reader = new FileReader();
        reader.onload = (e:any) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedFile = event.target.files[0];
      }
      else{
        this.imgSrc = "/assets/img/iim.png";
        this.selectedFile = null;
      }
    }
}
