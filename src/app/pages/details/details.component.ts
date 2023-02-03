import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: [any, any] = [{}, {}];

  public isLoading: boolean = true
  public isError: boolean = false

  private imageDefault: string = 'assets/image/pokebola.png'

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
  ) {}

  ngOnInit(): void {
    this.getPokemon()
  }

  get pokemonName(): string {
    const [pokemon] = this.pokemon
    return pokemon?.name || '';
  }

  get pokemonNameJapanese(): string {
    const [, pokemon] = this.pokemon
    const [japonese] = pokemon.names || []
    return japonese?.name || '';
  }

  get pokemonImage(): string {
    const [pokemon] = this.pokemon
    const { sprites: { other: { dream_world } } } = pokemon
    return dream_world.front_default || this.imageDefault;
  }

  get pokemonStatistics(): any {
    const [pokemon] = this.pokemon
    return pokemon?.stats || {};
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
        this.isLoading = false
      },
      error => {
        this.isError = true
      }
    );
  }
}
