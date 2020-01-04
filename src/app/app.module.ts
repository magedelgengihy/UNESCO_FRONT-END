///////////////////// Built-in Imports //////////////////////////////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  AngularFirestoreModule,
  FirestoreSettingsToken
} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

///////////////////// Components Imports ////////////////////////////
import { AppComponent } from './app.component';
import { NewscardsComponent } from './mainComponents/newscards/newscards.component';
import { NewsDetailsComponent } from './mainComponents/news-details/news-details.component';
import { NavBarComponent } from './mainComponents/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './mainComponents/page-not-found/page-not-found.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { CarouselComponent } from './mainComponents/carousel/carousel.component';
import { HomeComponent } from './mainComponents/home/home.component';
import { AboutUsComponent } from './mainComponents/about-us/about-us.component';
import { FrindlySitesComponent } from './mainComponents/frindly-sites/frindly-sites.component';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { GalleryComponent } from './mainComponents/gallery/gallery.component';
import { ForgetPasswordComponent } from './mainComponents/forget-password/forget-password.component';
import { ChangePasswordComponent } from './mainComponents/change-password/change-password.component';
import { OrganizationStructureComponent } from './mainComponents/organization-structure/organization-structure.component';
import { RegisterComponent } from './mainComponents/register/register.component';
import { LoginComponent } from './mainComponents/login/login.component';
import { ContactUsComponent } from './mainComponents/contact-us/contact-us.component';


//////////////////////// Services Imports ////////////////////////
import { DepartmentsService } from './services/departments.service';
import { PhotoAlbumsService } from './services/photo-albums.service';
import { ContactUsService } from './services/contact-us.service';
import { PublicationsService } from './services/publications.service';
import { PublicationsComponent } from './mainComponents/publications/publications.component';
import { PublicationDetailsComponent } from './mainComponents/publication-details/publication-details.component';
import { UserService } from './services/user.service';


////////////// Others Imports ////////////////////////
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NewsService } from './services/news.service';
import { DepartmentDetailsComponent } from './mainComponents/department-details/department-details.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    //////////////////////////// Components //////////////////////////////////
    AppComponent,
    NewscardsComponent,
    NewsDetailsComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    AboutUsComponent,
    FrindlySitesComponent,
    FooterComponent,
    GalleryComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent,
    OrganizationStructureComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    PublicationsComponent,
    PublicationDetailsComponent,
    DepartmentDetailsComponent,

  ],
  imports: [
    //////////////////////////////// Modules ///////////////////////////////
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCmpnukiDRck2xMpPKpXx1bWpLk8h3QndI',
      authDomain: 'unesco-4ccc9.firebaseapp.com',
      databaseURL: 'https://unesco-4ccc9.firebaseio.com',
      projectId: 'unesco-4ccc9',
      storageBucket: '',
      messagingSenderId: '201043145008',
      appId: '1:201043145008:web:c46ae9546c00a98b1118f5',
      measurementId: 'G-D15XFQDG9H'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ///////////////////// Services ///////////////////////
    ContactUsService,
    DepartmentsService,
    PhotoAlbumsService,
    PublicationsService,
    UserService,
    NewsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, UserService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
