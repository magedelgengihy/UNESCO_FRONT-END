import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './mainComponents/page-not-found/page-not-found.component';
import { NewsDetailsComponent } from './mainComponents/news-details/news-details.component';
import { HomeComponent } from './mainComponents/home/home.component';
import { AboutUsComponent } from './mainComponents/about-us/about-us.component';
import { FrindlySitesComponent } from './mainComponents/frindly-sites/frindly-sites.component';
import { GalleryComponent } from './mainComponents/gallery/gallery.component';
import { from } from 'rxjs';
import { LoginComponent } from './mainComponents/login/login.component';
import { RegisterComponent } from './mainComponents/register/register.component';
import { ContactUsComponent } from './mainComponents/contact-us/contact-us.component';
import { OrganizationStructureComponent} from './mainComponents/organization-structure/organization-structure.component';
import { ForgetPasswordComponent} from './mainComponents/forget-password/forget-password.component';
import {ChangePasswordComponent} from './mainComponents/change-password/change-password.component';
import { PublicationsComponent } from './mainComponents/publications/publications.component';
import { PublicationDetailsComponent } from './mainComponents/publication-details/publication-details.component';
import { DepartmentDetailsComponent } from './mainComponents/department-details/department-details.component';
import { AuthGuard } from './auth/auth.guard';





const routes: Routes = [
  { 
    path: 'admin',  canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'Forgot-Password', component: ForgetPasswordComponent},
  { path: 'Change-Password', component: ChangePasswordComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'news-details', component: NewsDetailsComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'friendly-sites', component: FrindlySitesComponent},
  { path: 'publications', component: PublicationsComponent},
  { path: 'publication-details', component: PublicationDetailsComponent}, 
  { path: 'organization', component:OrganizationStructureComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'department-details/:id', component: DepartmentDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
