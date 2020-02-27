import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //  url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc';

   url:string = environment.url;


  constructor(private http: HttpClient) { }

  getMovie(){
    return this.http.get(this.url);
  }

}
