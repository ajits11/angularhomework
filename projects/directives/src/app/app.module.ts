import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MagicDirective } from './magic.directive';
import { InputhoverDirective } from './inputhover.directive';

@NgModule({
  declarations: [
    AppComponent,
    MagicDirective,
    InputhoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
