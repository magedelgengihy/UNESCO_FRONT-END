
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }        from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PhotoalbumsComponent } from './photoalbums/photoalbums.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';

import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';

import { CrudOperationsService } from './services/crud-operations.service';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryCreateComponent } from './country-create/country-create.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user/user.component';
import { DepartmentTableComponent } from './department-table/department-table.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { NewsTableComponent } from './news-table/news-table.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsUpdateComponent } from './news-update/news-update.component';
import { PhotoalbumTableComponent } from './photoalbum-table/photoalbum-table.component';
import { PhotoalbumCreateComponent } from './photoalbum-create/photoalbum-create.component';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationTableComponent } from './publication-table/publication-table.component';
import { PublicationCreateComponent } from './publication-create/publication-create.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    DepartmentsComponent,
    PhotoalbumsComponent,
    HomeComponent,
    NewsComponent,
    PublicationsComponent,
    CountriesComponent,
    CountryComponent,
    CountryTableComponent,
    CountryCreateComponent,
    UserTableComponent,
    UserCreateComponent,
    UserComponent,
    DepartmentTableComponent,
    DepartmentComponent,
    DepartmentCreateComponent,
    NewsTableComponent,
    NewsCreateComponent,
    NewsUpdateComponent,
    PhotoalbumTableComponent,
    PhotoalbumCreateComponent,
    PhotoalbumComponent,
    PublicationComponent,
    PublicationTableComponent,
    PublicationCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    CrudOperationsService,
  ]
})
export class AdminModule { }
