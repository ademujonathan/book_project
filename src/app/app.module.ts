import { environment } from 'environments/environment';
import { BookService } from './shared/book.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ContactComponent } from './footer/contact/contact.component';
import { TermsOfUseComponent } from './footer/terms-of-use/terms-of-use.component';
import { ProfileComponent } from './profile/profile.component';

import { AddBookComponent } from './library/add-book/add-book.component';
import { MyBooksComponent } from './library/my-books/my-books.component';
import { BooksSearchComponent } from './Search/books-search/books-search.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    TermsOfUseComponent,
    ProfileComponent,
    AddBookComponent,
    MyBooksComponent,
    BooksSearchComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireStorageModule


    


  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
