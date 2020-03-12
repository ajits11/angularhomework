import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GrouplistModule } from './grouplist/grouplist.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GrouplistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
