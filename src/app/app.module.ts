import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
import {FormsModule} from "@angular/forms";
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent,
    MyDirectiveDirective,
    MySecondComponentComponent
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
