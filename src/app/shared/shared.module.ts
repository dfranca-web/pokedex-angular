import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { FormsModule } from '@angular/forms';
import { PokeLoadingComponent } from './poke-loading/poke-loading.component';
import { PokeErrorComponent } from './poke-error/poke-error.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeLoadingComponent,
    PokeErrorComponent,
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeLoadingComponent,
    PokeErrorComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class SharedModule {}
