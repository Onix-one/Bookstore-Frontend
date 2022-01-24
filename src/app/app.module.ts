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
import { FilterComponent } from './pages/books/filter/filter.component';
import { AuthorFilterComponent } from './pages/books/filter/author-filter/author-filter.component';
import { GenreFilterComponent } from './pages/books/filter/genre-filter/genre-filter.component';
import { YearFilterComponent } from './pages/books/filter/year-filter/year-filter.component';
import { RatingFilterComponent } from './pages/books/filter/rating-filter/rating-filter.component';
import { CostFilterComponent } from './pages/books/filter/cost-filter/cost-filter.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
