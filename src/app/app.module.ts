import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThcComponent } from './thc/thc.component';
import { NewsarticleComponent } from './newsarticle/newsarticle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThcComponent,
    NewsarticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
