
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpParams } from '@angular/common/http';

@Injectable()
export class freeApiservice
{
   
    constructor(private httpclient: HttpClient) {}


    getcomments(): Observable<any>{
        return this.httpclient.get("https://jsonplaceholder.typicode.com/post/1/comments")

    }

    getcommentsbyparameter(): Observable<any>{
        let params1=new HttpParams().set('userId',"1")
        return this.httpclient.get("https://jsonplaceholder.typicode.com/post/1/comments",{params:params1})

    }
}