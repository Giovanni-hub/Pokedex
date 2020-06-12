import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  baseUrl = "http://pokeapi.co/api/v2/pokemon/"
  pokedex = [];
  term: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  getConfig() {
    return this.http.get(this.baseUrl + "?limit=151");
  }

  getPokemon() {
    this.getConfig().subscribe((resApi: any) => {
      this.pokedex = resApi.results;
    })
  }

  getIndex(pokemon) {
    return this.pokedex.indexOf(this.pokedex.filter((i, index) => pokemon.name == i.name)[0]) + 1;
  }

}
