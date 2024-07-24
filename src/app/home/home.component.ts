import { Component ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  trendingMovies : any;
  theatreMovies : any;
  popularMovies : any;


  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe(
      (movies)=>{
        this.trendingMovies = movies;
        console.log(this.trendingMovies)
      }
    );

  }

  getTheaterMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe(
      (movies)=>{
        this.theatreMovies = movies;
        console.log(this.theatreMovies)
      }
    );

  }

  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe(
      (movies)=>{
        this.popularMovies = movies;
        console.log(this.popularMovies)
      }
    );

  }

  goToMovie(type: string, id: string){
    this.router.navigate(['movie',type,id]);
  }

  areaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

  currentRate = 3;

  constructor(
    private http : HttpClient,
    private router: Router
  ){}

  ngOnInit(){
    this.getTrendingMovies();
    this.getTheaterMovies();
    this.getPopularMovies();
  }

}
