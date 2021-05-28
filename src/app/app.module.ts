import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NewsService } from './shared/news.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ContributeComponent } from './contribute/contribute.component';
import { MyarticlesComponent } from './myarticles/myarticles.component';
import { EditComponent } from './edit/edit.component';
//import { AngularTawkComponent } from 'angular-tawk';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    ProfileComponent,
    ContributeComponent,
    MyarticlesComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  /*exports:[
    AngularTawkComponent
  ],*/
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
