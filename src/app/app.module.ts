import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from 'src/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PokemonListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
