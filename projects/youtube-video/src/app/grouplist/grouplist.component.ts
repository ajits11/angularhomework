import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {

    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
   }
 // vUrl="https://www.youtube.com/watch?v=mJaxCjNJDww";
  safeSrc: SafeResourceUrl;
  ngOnInit(): void {
  }
  listofvideos=[
     {'title':'test','url':'https://www.youtube.com/embed/mJaxCjNJDww'},
    {'title':'test1','url':'https://www.youtube.com/embed/6GMAugzV5ls'},
    {'title':'test2','url':'https://www.youtube.com/embed/WcrIjf0Ps6E'},
    {'title':'test3','url':'https://www.youtube.com/embed/tFoUuFq3vHw'}
  ];

  playVideo(videourl){
    this.safeSrc=this.sanitizer.bypassSecurityTrustResourceUrl(videourl);
  }

}
