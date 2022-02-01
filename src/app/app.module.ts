import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/modules/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeModule } from './pages/home/home.module';
import { BooksComponent } from './pages/books/books.component';

import { BooksForManagerComponent } from './pages/books/books-for-manager/books-for-manager.component';
import { BooksForCustomerComponent } from './pages/books/books-for-customer/books-for-customer.component';
import { CostFilterComponent } from './pages/books/books-for-customer/filter/cost-filter/cost-filter.component';
import { RatingFilterComponent } from './pages/books/books-for-customer/filter/rating-filter/rating-filter.component';
import { YearFilterComponent } from './pages/books/books-for-customer/filter/year-filter/year-filter.component';
import { GenreFilterComponent } from './pages/books/books-for-customer/filter/genre-filter/genre-filter.component';
import { AuthorFilterComponent } from './pages/books/books-for-customer/filter/author-filter/author-filter.component';
import { FilterComponent } from './pages/books/books-for-customer/filter/filter.component';
import { EditBookComponent } from './pages/books/books-for-manager/edit-book/edit-book.component';
/* import { NgxMatSelectSearchModule } from 'ngx-mat-select-search'; */
import { Api } from './generated/bookStore-api';
import { ApiService } from './shared/services/api.service';
import { GenresComponent } from './pages/genres/genres.component';
import { FormAddGenreComponent } from './pages/genres/form-add-genre/form-add-genre.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { FormAddAuthorComponent } from './pages/authors/form-add-author/form-add-author.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    BooksComponent,
    FilterComponent,
    AuthorFilterComponent,
    GenreFilterComponent,
    YearFilterComponent,
    RatingFilterComponent,
    CostFilterComponent,
    BooksForManagerComponent,
    BooksForCustomerComponent,
    EditBookComponent,
    GenresComponent,
    FormAddGenreComponent,
    AuthorsComponent,
    FormAddAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    HomeModule/* ,
    NgxMatSelectSearchModule */
  ],
  providers: [Api,ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
