import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  inputvalue='';

  insertcode(values){
    if(values!="="){
      this.inputvalue=this.inputvalue+values;
    }else{
      if(this.inputvalue!=''){
        this.inputvalue=eval(this.inputvalue);
        //console.log(eval(this.inputvalue))
      }
    }
    
    
  }
  clearAll(){
    this.inputvalue='';
  }
}
