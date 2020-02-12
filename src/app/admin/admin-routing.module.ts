import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { PhotoalbumsComponent } from './photoalbums/photoalbums.component';
import { DepartmentsComponent } from './departments/departments.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { CountriesComponent } from './countries/countries.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';
import { NewsUpdateComponent } from './news-update/news-update.component';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';
import { PublicationComponent } from './publication/publication.component';

const routes: Routes = [
  {
     path: '', 
     component: AdminComponent,
     children: [
      {path: '', component: HomeComponent},
      {path: 'users/:id', component: UserComponent},
      {path: 'users', component: UsersComponent},
      {path: 'departments/:id', component: DepartmentComponent},
      {path: 'departments', component: DepartmentsComponent},
      {path: 'photoalbums/:id', component: PhotoalbumComponent},
      {path: 'photoalbums', component: PhotoalbumsComponent},
      {path: 'news/:id', component: NewsUpdateComponent},
      {path: 'news', component: NewsComponent},
      {path: 'publications/:id', component: PublicationComponent},
      {path: 'publications', component: PublicationsComponent},
      {path: 'countries/:id', component: CountryComponent, pathMatch: 'full'},
      {path: 'countries', component: CountriesComponent},
      
     ],
    
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
