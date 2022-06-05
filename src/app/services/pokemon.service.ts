import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url2: string = "https://pokeapi.co/api/v2/pokemon/?limit=90&offset=0";

  constructor( private http: HttpClient) {
  }

  getUrlPersonajes() {
    return this.http.get(`${this.url2}`)
  }

  getPersonajes(url: string) {
    return this.http.get(`${url}`)
  }

}
