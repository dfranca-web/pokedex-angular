import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent {
  @Output() emitSearch: EventEmitter<string> = new EventEmitter<string>()

  public textSearch = ''

  public search(value: string): void {
    this.emitSearch.emit(value)
  }
}
