import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../app/services/movie.service'


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  list;
  constructor(private movieService:MovieService){

  }
  

  ngOnInit() {
    
    this.movieService.getMovie().subscribe( (data:any)=>{
      console.log(data)
      this.list = data.results;
    })
    
  
  }

}
