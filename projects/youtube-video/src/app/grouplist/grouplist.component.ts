import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listofvideos=[
    {'title':'test','url':'https://www.youtube.com/watch?v=mJaxCjNJDww'},
    {'title':'test1','url':'https://www.youtube.com/watch?v=6GMAugzV5ls'},
    {'title':'test2','url':'https://www.youtube.com/watch?v=WcrIjf0Ps6E'},
    {'title':'test3','url':'https://www.youtube.com/watch?v=tFoUuFq3vHw'}
  
  
  ];

}
