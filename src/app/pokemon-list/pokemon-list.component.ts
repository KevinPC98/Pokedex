import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = []; // Array to hold the list of Pokémon

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList(1010, 0).subscribe(
      (response: any) => {
        this.pokemonList = response.results;
        this.getPokemonDetailsForList();
      },
      (error: any) => {
        console.error('Error fetching Pokémon list:', error);
      }
    );
  }

  getPokemonDetailsForList() {
    this.pokemonList.forEach((pokemon: any) => {
      this.pokemonService.getPokemonDetails(pokemon.name).subscribe(
        (response: any) => {
          pokemon.sprites = response.sprites.front_default;
          pokemon.id = response.id;
          pokemon.types = response.types.map((type: any) => type.type.name);
          console.log(pokemon);
        },
        (error: any) => {
          console.error('Error fetching Pokémon details:', error);
        }
      );
    });
  }

  getPokemonTypeClass(type: string): string {
    switch (type) {
      case 'fire':
        return 'type-fire';
      case 'water':
        return 'type-water';
      case 'grass':
        return 'type-grass';
      case 'electric':
        return 'type-electric';
      case 'ice':
        return 'type-ice';
      case 'fighting':
        return 'type-fighting';
      case 'poison':
        return 'type-poison';
      case 'ground':
        return 'type-ground';
      case 'flying':
        return 'type-flying';
      case 'psychic':
        return 'type-psychic';
      case 'bug':
        return 'type-bug';
      case 'rock':
        return 'type-rock';
      case 'ghost':
        return 'type-ghost';
      case 'dragon':
        return 'type-dragon';
      case 'dark':
        return 'type-dark';
      case 'steel':
        return 'type-steel';
      case 'fairy':
        return 'type-fairy';
      // Add more cases for other types as needed
      default:
        return 'type-normal';
    }
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
