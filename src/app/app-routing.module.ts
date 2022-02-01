import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddAuthorComponent } from './pages/authors/form-add-author/form-add-author.component';
import { EditBookComponent } from './pages/books/books-for-manager/edit-book/edit-book.component';
import { BooksComponent } from './pages/books/books.component';
import { FormAddGenreComponent } from './pages/genres/form-add-genre/form-add-genre.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'edit-book',
    component: EditBookComponent,
  },
  {
    path: 'edit-genre',
    component: FormAddGenreComponent,
  },
  {
    path: 'edit-author',
    component: FormAddAuthorComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
