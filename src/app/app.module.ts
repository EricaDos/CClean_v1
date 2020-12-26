import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cleanerssComponent } from './cleanerss/cleanerss.component';
import { CleanersComponent } from './cleaners/cleaners.component';

@NgModule({
  declarations: [
    AppComponent,
    cleanerssComponent,
    CleanersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
