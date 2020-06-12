import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  baseUrl = "http://pokeapi.co/api/v2/pokemon/"
  id: string;
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      let config = this.http.get(this.baseUrl + this.id)
      config.subscribe((resApi: any) => {
        this.pokemon = resApi;
      })
    });
  }


}
