import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { ActionsComponent } from './actions/actions.component';
import { ThemesComponent } from './themes/themes.component';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { NavArrowsComponent } from './nav-arrows/nav-arrows.component';
import { JcmsComponent } from './jcms/jcms.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NewHomeComponent,
    ActionsComponent,
    ThemesComponent,
    NavComponent,
    LogoComponent,
    HomeComponent,
    NavArrowsComponent,
    JcmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
