import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  urlImage!: string
  listaPersonajes!: any
  listaUrlPersonajes: any[] = [];
  pokemones: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.agregarUrl();
  }

  agregarUrl() {
    this.pokemonService.getUrlPersonajes().subscribe((data: any) => {
      this.listaPersonajes = data.results
      this.listaPersonajes.map((personaje: any) => {
        /* console.log(personaje.url) */
        this.listaUrlPersonajes.push(personaje.url)

      })

    })
  }

  buscarPersonajes() {
    this.listaUrlPersonajes.map((urlPersonaje: any) => {
      this.pokemonService.getPersonajes(urlPersonaje).subscribe((data: any) => {
        this.pokemones.push(data)
        console.log(this.pokemones)
      })

    })


  }
}
