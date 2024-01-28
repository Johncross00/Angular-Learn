import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { NouvelleCategorieComponent } from './nouvelle-categorie/nouvelle-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ListeCategorieComponent,
    NouvelleCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
