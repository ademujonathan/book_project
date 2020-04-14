import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ContactComponent } from './footer/contact/contact.component';
import { TermsOfUseComponent } from './footer/terms-of-use/terms-of-use.component';
import { ProfileComponent } from './profile/profile.component';
import { AddBookComponent } from './library/add-book/add-book.component';
import { MyBooksComponent } from './library/my-books/my-books.component';
import { BooksSearchComponent } from './Search/books-search/books-search.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  
  {
    path: 'add-book',
    component: AddBookComponent
  },

  {
    path: 'my-books',
    component: MyBooksComponent
  },
  {
    path: 'books-search',
    component: BooksSearchComponent
  },
{
    path: 'ProfileComponent',
    redirectTo: '/home',
    pathMatch: 'full'
},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
