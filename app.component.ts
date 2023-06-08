import { Component } from '@angular/core';
import { freeApiservice} from './services/freeapi.service';
import { comments } from './classes/comments';
import { posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private _freeApiservice: freeApiservice){
  }

    lstcomments: comments[]; 

    lstposts:posts[];
  
  ngOnInit(){

    this._freeApiservice.getcomments()
    .subscribe
    (
      data=>
      {
        this.lstcomments = data;
      }
    );

    this._freeApiservice.getcommentsbyparameter()
    .subscribe
    (
      data=>
      {
        this.lstposts = data;
      }
    )


  }
}
