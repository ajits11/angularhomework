import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrouplistComponent } from './grouplist.component';



@NgModule({
  declarations: [GrouplistComponent],
  imports: [
    CommonModule
  ],
  exports:[
    GrouplistComponent
  ]
})
export class GrouplistModule { }
