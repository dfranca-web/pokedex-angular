import { PokeApiService } from './../../service/poke-api.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public allPokemons: any[] = []
  private paramSearch = ''

  public isLoading = true
  public isError = false

  private urlNext = ''
  private urlPrevious = ''

  private imageDefault = 'assets/image/pokebola.png'

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit() {
    this.getPokemons()
  }

  public getSearch(search: string) {
    this.paramSearch = search
  }

  public getAllPokemonsBySearch(allPokemons: Array<any>): Array<any> {
    return allPokemons.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(this.paramSearch.toLowerCase())
    )
  }

  public getPokemonImage(status: any): void {
    const {
      sprites: {
        other: { dream_world },
      },
    } = status
    return dream_world.front_default || this.imageDefault
  }

  public textTitleDetail(title: string): string {
    return `Detalhe ${title}`
  }

  public hasNextPage(): boolean {
    return this.urlNext !== '' && !!this.urlNext
  }

  public hasPreviousPage(): boolean {
    return this.urlPrevious !== '' && !!this.urlPrevious
  }

  public nextPagination(): void {
    this.pokeApiService.url = this.urlNext
    this.isLoading = true

    this.getPokemons()
  }

  public previousPagination(): void {
    this.pokeApiService.url = this.urlPrevious
    this.isLoading = true

    this.getPokemons()
  }

  private getPokemons(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.resolveResponse(res)
      },
      () => {
        this.isError = true
      }
    )
  }

  private resolveResponse(response: any): void {
    const { results, next, previous } = response
    this.allPokemons = results
    this.urlNext = next
    this.urlPrevious = previous
    this.isLoading = false
  }
}
